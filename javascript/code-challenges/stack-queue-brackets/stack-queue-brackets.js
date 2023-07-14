const validatebrackets = (str) =>{

     let obj ={
          roundBrackets : {
               open : 0,
               close : 0
          },
          squareBrackets : {
               open : 0,
               close : 0
          },
          curlyBrackets : {
               open : 0,
               close : 0
          }
     }

     str.split("").forEach(ele =>{
          if(ele === '('){
               obj.roundBrackets.open++
          }
          if(ele === ')'){
               obj.roundBrackets.close++
          }
          if(ele === '['){
               obj.squareBrackets.open++
          }
          if(ele === ']'){
               obj.squareBrackets.close++
          }
          if(ele === '{'){
               obj.curlyBrackets.open++
          }
          if(ele === '}'){
               obj.curlyBrackets.close++
          }
     })

     if(  obj.roundBrackets.close === obj.roundBrackets.open && 
          obj.curlyBrackets.close === obj.curlyBrackets.open && 
          obj.squareBrackets.close === obj.squareBrackets.open
     ) return true 

     return false
}