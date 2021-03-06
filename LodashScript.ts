function concat(array, ...concat){
     for(var i = 0; i < concat.length; i++){
          if(Array.isArray(concat[i])){
               array = array.concat(concat[i].flat());
          }
          else{
               array = array.concat(concat[i]);
          }
     }
     return array;
}
console.log("concat([1], 2, [3], [[4]])");
console.log( concat([1], 2, [3], [[4]]) );

function tail(array){
     return array.slice(1, array.length);
}
console.log("tail([1, 2, 3, 4])");
console.log( tail([1, 2, 3, 4]) );

function take(array, takeNum = 1){
     if(takeNum > array.length){
          takeNum = array.length;
      }
     return array.slice(0, takeNum);
}

console.log("take([1, 2, 3, 4], 2)");
console.log( take([1, 2, 3, 4], 2) );

function last(array){
     return array[array.length - 1];
}

console.log("last([1, 2, 3, 4])");
console.log( last([1, 2, 3, 4]) );

function reverse(array){
     var rev = [];
     for(var i = 0; i < array.length; i++){
          rev[i] = array[array.length - 1 - i];
     }
     return rev;
}

console.log("reverse([1, 2, 3, 4])");
console.log( reverse([1, 2, 3, 4]) );

function fromPairs(array) {
     var ret = {};
     for (var i = 0; i < array.length; i++) {
         ret[array[i][0]] = array[i][1];
     }
     return ret;
 }
 
 console.log("fromPairs([['a', 1], ['b', 2]])");
 console.log( fromPairs([['a', 1], ['b', 2]]) );