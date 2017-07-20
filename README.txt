2017-07-19
快速构建前端开发环境

感谢我的同事，一位大牛的无私帮助，🙏

1.手动创建gulpfile.js文件，
2.运行 npm init 创建package.json文件
3.运行 npm install xxx --save-dev 来安装对应安装包。eg. npm install gulp-watch --save-dev
4.手动创建src里的文件
5.运行对应的任务来生成build里的文件。

未完。。。。。。

一款APP从设计稿到切图过程全方位揭秘
http://www.chinaz.com/design/2015/0918/448252.shtml

彻底弄懂CommonJS和AMD/CMD！
http://www.cnblogs.com/chenguangliang/p/5856701.html

gulp plugins
http://gulpjs.com/plugins/

遇到的问题
events.js:141
      throw er; // Unhandled 'error' event
      ^
Error: module "./module-template.js" not found from "/Users/pretty.jiao/flexble/src/js/fake_8bca2bed.js"
    at notFound (/Users/pretty.jiao/flexble/node_modules/browserify/index.js:803:15)
    at /Users/pretty.jiao/flexble/node_modules/browserify/index.js:754:23
    at /Users/pretty.jiao/flexble/node_modules/browser-resolve/index.js:185:24
    at /Users/pretty.jiao/flexble/node_modules/browser-resolve/node_modules/resolve/lib/async.js:36:22
    at load (/Users/pretty.jiao/flexble/node_modules/browser-resolve/node_modules/resolve/lib/async.js:54:43)
    at /Users/pretty.jiao/flexble/node_modules/browser-resolve/node_modules/resolve/lib/async.js:60:22
    at /Users/pretty.jiao/flexble/node_modules/browser-resolve/node_modules/resolve/lib/async.js:16:47
    at FSReqWrap.oncomplete (fs.js:82:15)

how to fix?
import Template from './modules/module-template.js';
引用的文件路径出错了













