
//FUNCTION TO REVERSE A POSITIVE OR NEGATIVE INTEGER //
function reverse(x){


    var reversed =0;
    var wasNeg = false;

if(x<0){
    x*=-1;
     wasNeg = true;
}
var iterator =x;

for (let i =0;i<iterator.toString().length;i++){
 
 reversed+=x%10;
 if(i!==iterator.toString().length-1){ 
 reversed*=10;  
 x=x/10;
 x=parseInt(x); 
 }

}

if(wasNeg==true){
    reversed*=-1;
    return reversed;
}
else{
    return reversed;
}

}








