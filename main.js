   function init(){
    /*  console.log(numOne,numTwo)
     numOne();
     numTwo(); */
     console.log(filterArray());
  

   }

    //  this  is   Long Way  to Save Funtions!
   /*  let numOne  =  function getNUM(){
         document.getElementById('demo1').innerHTML = " Hello World !!!"
         document.getElementById('demo').innerHTML = 123+ " Test Test !!"
     
    }

      let  numTwo  = ()=>{
          document.getElementById('demo2').innerHTML = " This is a Shor Fuction wich is Colled  Arraw Funtions"
         document.getElementById('demo3').innerHTML = 123+ " Test Test !!"

        
      }
 */
    
      /* Filter  Funtion  Documentation !!!!  */
     
/*       function filterArray() {
        let testArray = [80, 10, 2, 15, 50, 100, 30, 60, 70, 5, 6, 9, 1, 800];
      return testArray.filter((element, index, array)=>{

         console.log( element, index, array);
          document.getElementById('demo').innerHTML = array;
      } );
    }
    
 function isBiggerThanTen(a) {
        return a >10;
        
       
        
    } */

        function filterArray() {
            let testArray = [80, 10, 2, 15, 50, 100, 30, 60, 70, 5, 6, 9, 1, 800];
            
            // Filtering the array using the isBiggerThanTen function
            let filteredArray = testArray.filter((element, index, array) => {
              
                
                return isBiggerThanTen(element); // Return true/false based on condition
            });
            
            // Updating the HTML element 'demo' with the filtered array
            document.getElementById('demo').innerHTML =  filteredArray .join(', ');
            
            return filteredArray;
        }
        
        function isBiggerThanTen(a) {
            return a > 50;
        }
        
        