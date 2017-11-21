function bubbleSort(arr){
    let len=arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len-1-i; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
                
            }
            
        }        
    }
    return arr;
}
var arr=[3,5,2,8,9,7,6];
console.log(arr);
var  arrSort=bubbleSort(arr);
console.log(arrSort);


