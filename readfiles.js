var fs = require("fs");
try {
    //setInterval(function(){
    //    var data=fs.readFileSync('log.txt', 'utf8');
    //    console.log(data);
    // },2000)  

    var props = "";
    // 开始遍历 
    var obj = { name: 'lucy', age: 15 }
    for (var p in obj) { // 方法 
        if (typeof (obj[p]) == " function ") {
            obj[p]();
        } else { // p 为属性名称，obj[p]为对应属性的值 
            props += p + " = " + obj[p] + " /n ";
        }
    } // 最后显示所有的属性 
    console.log(props);
} catch (err) {

}