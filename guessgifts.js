function guessGifts(wishlist, presents) {
    
var ar = [];
for(var i in wishlist){
    
    for(var j in presents){
        
        if(wishlist[i].size===presents[j].size && wishlist[i].clatters===presents[j].clatters && wishlist[i].weight===presents[j].weight){
            
            ar.push(wishlist);
        }
    }
    
}
var array = ar.filter(function(elem, pos) {
return ar.indexOf(elem) == pos;
  }); 

return array;
}