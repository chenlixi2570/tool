const path = require('path')
const fs = require('fs')

/** path 模块方法 **/

// path.resolve 方法将参数转为绝对路径
// resolve()
function resolve(){
   let curr = __filename
   let absolute = path.resolve(curr,'../../ChSDK')
   console.log(absolute, path.isAbsolute(absolute))
}

function parse(){
   // path.parse 方法解析字符路径为对象 path.format 将对象格式化成字符路径
   let cur = __filename
   let obj = path.parse(cur)
   console.log(obj);
   let str = path.format(obj)
   console.log(str)
}
// parse()

function join(){
   // path.sep 保存目录中文件夹分隔符 path.delimiter 保存多个路径如何分隔
   // 查看 python 中所有bif 函数的方法是，这些方法保存在一个叫 __builtins__ delimiter generate 中
   let cur = __filename
   let arr = cur.split(path.sep)
   console.log(arr);
   let str = path.join(...arr)
   console.log(str)
}
// join()

function name(){
   // 如果要查询路径中的某一部分，可以使用 path.parse 方法，也可以使用一系列 name 方法
   // path.basename path.dirname path.extname
   let cur = __filename
   let root = path.dirname(cur).slice(0,3)
   console.log('root=', root)
   let dir = path.dirname(cur)
   console.log('dir', dir)
   let base = path.basename(cur)
   console.log('base', base)
   let ext = path.extname(cur)
   console.log('ext', ext)
   let name = path.basename(cur, path.extname(cur))
   console.log('name', name)
   console.log('********** 我是骚气的分隔线 ************')
   console.log(path.parse(cur))
}
name()
