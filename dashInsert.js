function DashInsert(num) { 

var a = num.toString();
var ar = a.split('');
var j = 0;
for(var i in ar){
   
      if(ar[j]%2===1&&ar[j-1]%2===1){
       
       ar.splice(j,0,'-');
       j++;
    
   }
   
   j++;
   var st = ar.join(''); 
}
  return st;
}