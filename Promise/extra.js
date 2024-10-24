

/*    async function init(){
    walkting();


 }

   function walkting(){
 let  prom = await new Promise((reslove, rejected)=>{
        setTimeout(()=>{
            let  walkting = false;
            if( walkting){
                 reslove('Waa Sax ah  Anigu waanu Soconaaa !');
            } else{
                 rejected(' Maya   hada waanu Hurudnaaa !!!')
            }
        
           },500)
        
        


    })

  
   }
    */



 

      async function init(){
        fetchData()
        fetchData()
        showMe()
         try {
            let findName =  await getNumbers()
            console.log(findName)
            document.getElementById('demo').innerHTML = getNumbers();
            
           
          } catch (error) {
            console.log(error)
          }
         
   
        }
  let  namePerson = true;

  function  getNumbers(){
             return new Promise((res, rejct)=>{
                 setTimeout( ()=>{ 
                    if(namePerson){
                        res('Eid Aden Abdi  OK')

                    } else{
                        rejct('Eid Aden Abdi  NONE')

                    }
               
                 },1000)
             })
          }


            function showMe(){

                 document.getElementById('demo3').innerHTML='Show ME  Your Id'

                  setTimeout(()=>{
                     document.getElementById('demo2').innerHTML= ' Here your  this is may Id!!!'


                  },5000)
            }

/* 
            fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
 */

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data:', data +' Data Wass Seccsussfully accepted!!!');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  