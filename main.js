 let inputs = document.querySelectorAll("input");

inputs[0].focus();

 inputs.forEach((item, index) => {
  
  item.addEventListener("keydown", (e) => {
    item.value = "";    
      if(index < inputs.length -1 ){
          console.log("input", e.key)
        if(e.key === "Backspace"){
            setTimeout(() => inputs[index -1].focus(),100);
        }else{
            setTimeout(() => inputs[index + 1].focus(), 100);
        }
       
      } else{
        setTimeout(() => inputs[0].focus(), 100);
      }
   
  });
}); 
 

 /* const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})  */