<!--
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-14 14:06:47
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-21 18:54:51
 * @Description: file content
 -->
# introduce
One can simply use the shortcut key to upload the picture of the paste board to the seven-cow picture bed plug-in, allowing you to write markdown with vscode to have a better experience.

一个可以简单使用快捷键就把粘贴板的图片上传到七牛图床插件、提高写作效率。

## install
> Search in the plugin store : markdown

![20191121184937](https://s.shudong.wang/shudong/20191121184937.png)

Go to www.qiniu.com and apply for ak and sk


> mac shortcut key：option + command + v 

> win shortcut key：ctrl + alt + v

## config

```js
{
    "qiniu.access_key": "*******************",
    "qiniu.secret_key": "*******************",
    "qiniu.bucket": "static",
    "qiniu.remotePath": "shudong/${fileName}",
    "qiniu.domain": "http://s.shudong.wang"
}
```

I have been using vscode to develop and write notes and articles, but I have used several vscode diagram bed plug-ins that do not meet my needs. Today, I wanted to have a look at the writing notes, but I found the screenshots were too troublesome to process the pictures. Therefore, I have this plug-in. I just want to experience the development process of vscode plug-in and also facilitate my writing experience.

If the use of a happy star is not bad!
