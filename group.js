function groupByCommas(n) {
var a  =n.toString().split('');
var j=0;
var ar = [];
a.reverse();
for(var i=0;i<a.length;i++){
   
    if(j===3){
        ar.push(",");
        j=0;
    }
    
    ar.push(a[i]);
    j
    
}
ar.reverse();
var st = ar.join('');
return st;
}