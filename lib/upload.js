const path = require('path')
const url = require('url')
const request = require('request')
const fs = require('fs')

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
  let { domain, remotePath } = config;

  let localFile = file
  if (/^".+"$/.test(localFile)) {
    localFile = file.substring(1, file.length - 1)
  }
  
  // 预设参数值
  const param = formatParam(localFile, mdFile)
  //上传后保存的文件名
  const saveFile = formatString(remotePath + '${ext}', param)
  console.log('saveFile', saveFile);

  return new Promise((resolve, reject) => {
    const options = {
      'method': 'POST',
      'url': 'https://api.okmd.dev/api/upload',
      'headers': {
        'Cookie': 'laravel_session=eyJpdiI6Im1oOUxNSTkrZDVGOGUwSlJJZzJ1c0E9PSIsInZhbHVlIjoiQmk0bktEMkFFNUJaWExuUnRqTXh0elZsblVlVWsyUzBTUGFCZHZDQVdxZEd1aGxSM0plU1lROWFqUEdjQ1o5L3Z4YmhlSTJMOUlzQnRGbmp5dWZXYUZIRWxOZUhSMnIxNFppZlA3RnV5ODVYaTQ2NWVhaXpRWUEwOGZQQ1ZraVUiLCJtYWMiOiIzNWIxZjMzYjZmYmUwN2VmYzM0MDg3YzdmM2MwMTRmZmJkNGFiZGRmYjM4ZGE1ZWVjNTk0YWE2OTFlMWJmOWZlIiwidGFnIjoiIn0%3D'
      },
      formData: {
        'image': {
          'value': fs.createReadStream(localFile),
          'options': {
            'filename': path.basename(localFile),
            'contentType': null
          }
        }
      }
    };

    request(options, function (error, response) {
      if (error) {
        console.error('Upload error:', error);
        reject(error);
      } else {
        try {
          const responseBody = JSON.parse(response.body);
          resolve({
            name: path.basename(saveFile, param.ext),
            url: responseBody.url // 假设API返回的JSON中包含url字段
          });
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          reject(parseError);
        }
      }
    });
  });
}

