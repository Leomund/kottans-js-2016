function deepAssign(target, source, isExtend) {

/*  if ( target === undefined || target === null ){
    throw new TypeError('Error!');
  }
  */
  var to = Object(target);
  var len = arguments.length;
  if ( isExtend === true ){
    len -= 1;
  }
  for ( var i=1; i<len; i+=1){

  /*  if (source[i] === undefined || source[i] === null){
      continue;
    }*/
    var nextSource=arguments[i];
    var arrKeys=Object.keys(Object(nextSource));
    for(var key=0, lenKeys = arrKeys.length; key < lenKeys; key+=1){

      if(nextSource[arrKeys[key]] instanceof Object){
         if( arrKeys[key] in to && isExtend === true){
           to[arrKeys[key]]=deepAssign(to[arrKeys[key]],nextSource[arrKeys[key]]);
         }else{
           to[arrKeys[key]]=deepAssign({},nextSource[arrKeys[key]]);
         }
      }else{
        to[arrKeys[key]]=nextSource[arrKeys[key]];
      }


    }
  }
  return to
}


a={a:1,b:2};b={c:2,d:{x:3}};
console.log(deepAssign(a,b))