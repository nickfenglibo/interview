/* function create(obj){
    if(object.create){
        return Object.create(obj);
    }
    function f(){};
    f.prototype=obj;
    return new f();
}

var arr = [1, [2, [3, 4]]];

/* function flatten(arr) {
    return arr.reduce((prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
 

function log(){
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log(args);
    console.log.apply(console, args);
  };
  log('hello', 'world');
  
 */
function test(){
    console.log(a);
    console.log(foo());
    var a=1;
    function foo(){
        return 2;
    }
}
test();

(function(){
    var a = b = 3;
  })();