function valid(str){
  var count ={}
  for(let i=0;i<str.length; i++){
    var curr= str[i];
    count[curr] = count[curr] ? count[curr]+1 : 1; 
  }
  let a= count[str[0]]
  let fault=0;
  for(let i=1;i<str.length;i++){
    if(count[str[i]]!==count){
      fault++;
    }
    else if(fault>2) return false;
  }
  return true;
}

console.log(valid("aabbccc"));

