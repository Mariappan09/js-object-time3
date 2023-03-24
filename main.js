let b=parseInt(prompt("enter time"));
   let a=new Date();
   a.setHours(b);
   let hour=a.getHours();
	if(hour>=6 && hour<=11){
 console.log("morning");
}
else if(hour>=12 && hour<=16){
 console.log("Afternoun");
}

else{
 console.log("night");