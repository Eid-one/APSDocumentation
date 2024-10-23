  let promTime = false;

 
 function promUser(){
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            if( promTime){
                 reject('Sorry Errors it Didnt Happing!')

         
            } else {
                resolve(" Thats Right  Man !!!!  it has  happenined and True  Data  Thanks!!!");
          
            }
        }, 1000);
      });
      

 }





  
 async function prom(){
    console.log(' Hello World Hellooow');
    let promOne = await promUser ()

     console.log(
   promOne
     )
      
 }
 