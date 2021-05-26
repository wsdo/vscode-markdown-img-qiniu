const qiniu = require('qiniu')
const path = require('path')
const url = require('url')

const PutPolicy = qiniu.rs.PutPolicy
const PutExtra = qiniu.io.PutExtra

// 上传策略函数
const uptoken = (bucket, key) => new PutPolicy(`${bucket}:${key}`).token()

const generateUniqueID = () => {
    return `${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

const randomString = (length) => {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) 
        result += str[Math.floor(Math.random() * str.length)];
    return result;
}

// 默认参数
const formatParam = (file, mdFileName) => {
    const dt = new Date()
    const y = dt.getFullYear()
    const m = dt.getMonth() + 1
    const d = dt.getDate()
    const h = dt.getHours()
    const mm = dt.getMinutes()
    const s = dt.getSeconds()

    const date = `${y}${m}${d}`
    var ext = path.extname(file)
    const str = randomString(4)

    const filename = `${Date.now()}${str}`

    return {
        date,
        dateTime: `${date}${h}${mm}${s}`,
        fileName: path.basename(file, ext),
        ext,
        mdFileName
    }
}

const formatString = (tplString, data) => {
    const keys = Object.keys(data)
    const values = keys.map(k => data[k])

    return new Function(keys.join(','), 'return `' + tplString + '`').apply(null, values)
}

module.exports = (config, file, mdFile) => {
    let access_key = config.access_key;
    let secret_key = config.secret_key;
    let bucket = config.bucket;
    let domain = config.domain;
    let remotePath = config.remotePath;

    qiniu.conf.ACCESS_KEY = access_key
    qiniu.conf.SECRET_KEY = secret_key

    let localFile = file
    if (/^".+"$/.test(localFile)) {
        localFile = file.substring(1, file.length - 1)
    }

    // 预设参数值
    const param = formatParam(localFile, mdFile)
    //上传到七牛后保存的文件名
    const saveFile = formatString(remotePath + '${ext}', param)
    //生成上传 Token
    const token = uptoken(bucket, saveFile)

    return new Promise((resolve, reject) => {

        const extra = new PutExtra()

        qiniu.io.putFile(token, saveFile, localFile, extra, (err, { key }) => {

            if (!err) {
                // 上传成功， 处理返回值
                resolve({
                    name: path.basename(key, param.ext),
                    url: url.resolve(domain, saveFile)
                })
            } else {
                // 上传失败， 处理返回代码
                reject(err)
            }
        })
    })
}


