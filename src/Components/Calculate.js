   import React, { useState } from 'react'

   const Calculate = () => {

      const [num , setNum] =useState("");


   const getValue=(event)=>{
      if(num!=="0"){
         setNum(num.concat(event.target.value));
      }else{
         setNum(event.target.value);
      }
   }  

   const calculateMath =()=>{

      if (!num.trim()) return;

   try {
      const result = eval(num);
      if (result === undefined || Number.isNaN(result)) {
         setNum("Error");
         return;
      }
      setNum(result.toString());
   } catch {
      setNum("Error");
   }

   }

   const clearBack=()=>{
      setNum(num.slice(0,-1));
   }

   const clearAll=()=>{
      setNum("");
   }

   return (
      <div>
         <div className='container' >
               <div className='screen'>
                  <input value={num || "0"} readOnly />
               </div>
               <div className='brand'>
                  <p>CASIO©</p>
                  <p>CD-180</p>
               </div>
               <div className='btn-full'>
                  
                  
                  <div className="btn-container">
                     <button onClick={getValue} value="(">(</button>
                     <button onClick={getValue} value=")">)</button>
                     <button onClick={clearBack} value={"CE"} >CE</button>
                     <button onClick={clearAll} value={"AC"}>AC</button>
                  </div>

                  <div className="btn-container">
                     <button onClick={getValue} value="7">7</button>
                     <button onClick={getValue} value="8">8</button>
                     <button onClick={getValue} value="9">9</button>
                     <button onClick={getValue} value="/">/</button>
                  </div>


                  <div className="btn-container">
                     <button onClick={getValue} value="4">4</button>
                     <button onClick={getValue} value="5">5</button>
                     <button onClick={getValue} value="6">6</button>
                     <button onClick={getValue} value="*">x</button>
                  </div>


                  <div className="btn-container">
                     <button onClick={getValue} value="1">1</button>
                     <button onClick={getValue} value="2">2</button>
                     <button onClick={getValue} value="3">3</button>
                     <button onClick={getValue} value="-">-</button>
                  </div>


                  <div className="btn-container">
                     
                     <button onClick={getValue} value=".">.</button>
                     <button onClick={getValue} value="0">0</button>
                     <button onClick={getValue} value="%">%</button>
                     <button onClick={getValue} value="+">+</button>
                  </div>

                  <div className="btn-containerequal">
                     <button onClick={calculateMath} value="=">=</button>
                     
                  </div>
               </div>

               

         </div>

      </div>
   )
   }

   export default Calculate
