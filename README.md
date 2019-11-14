<!--
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-14 14:06:47
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-14 16:47:11
 * @Description: file content
 -->
# vscode-paste-image-to-qiniu

一个可以支持截图粘贴上传图片到七牛、让你写用vscode写markdown有更好的体验。

![screenshot](./screenshot/screenshot.gif)

## 安装
输入命令：
```bash
ext install vscode-paste-image-to-qiniu
```
或者在插件应用商店搜索vscode-paste-image-to-qiniu安装

## 参数设置
```js
{
    // 有效的七牛 AccessKey 签名授权
    "qiniu.access_key": "*****************************************",

    // 有效的七牛 SecretKey 签名授权
    "qiniu.secret_key": "*****************************************",

    // 七牛图片上传空间
    "qiniu.bucket": "static",

    // 七牛图片上传路径，参数化命名，暂时支持 ${fileName}、${mdFileName}、${date}、${dateTime}
    // 示例：
    //   ${fileName}-${date} -> picName-20160725.jpg
    //   ${mdFileName}-${dateTime} -> markdownName-20170412222810.jpg
    "qiniu.remotePath": "shudong/${fileName}",

    // 七牛图床域名
    "qiniu.domain": "http://s.shudong.wang"
}
```

一直使用vscode来开发、写笔记文章、但是用了几款vscode的图床插件都不是很符合我的需求。今天本来想看看书写点笔记、但是发现截图了去处理图片太过于麻烦、于是有了这个插件、仅仅是想体验一下vscode插件的开发流程、也可以方便自己的写体验。

如果用的开心给个star也不错！
