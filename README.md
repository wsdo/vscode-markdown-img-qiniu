<!--
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-14 14:06:47
 * @LastEditors  : starkwang
 * @LastEditTime : 2019-12-24 10:35:18
 * @Description: file content
 -->
# introduce
One can simply use the shortcut key to upload the picture of the paste board to the seven-cow picture bed plug-in, allowing you to write markdown with vscode to have a better experience.

Une simple utilisation des touches de raccourcissage permet de télécharger une image de la plaque collante sur le plug-in de la table de chiu pour améliorer l’efficacité de l’écriture.

간단히 단축키를 사용하여 접착판의 사진을 칠우도 침대의 플러그인에 올려 글을 쓰는 능력을 향상시키는 것.

1つは簡単に使うことができて、貼り板の絵を七牛図床プラグインにアップして、文章の効率を高めます。

一个可以简单使用快捷键就把粘贴板的图片上传到七牛图床插件、提高写作效率。

## qiniu

Object storage

Widely used in the sea volume data management scenarios

• standard storage free 10 GB
• unlimited monthly free upload traffic
• 100,000 PUT/ month and 1 million GET/ month

## install
> Search in the plugin store : markdown
![CoUBGV4T9iuARVgNAAA20pJb9Lg736](https://p1-q.mafengwo.net/s15/M00/B7/50/CoUBGV4T9iuARVgNAAA20pJb9Lg736.png)

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

关于我
about me: [http://www.shudong.wang/about](https://www.shudong.wang/about)

If it helps you, please point to a star：
link
[vscode-markdown-img-qiniu](https://github.com/wsdo/vscode-markdown-img-qiniu)
