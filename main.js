let inputs = document.querySelectorAll("input");

inputs[0].focus();

inputs.forEach((item, index) => {
  
  item.addEventListener("keydown", () => {
    item.value = "";
      if(index < inputs.length -1 ){
        setTimeout(() => inputs[index + 1].focus(), 100);
      }else{
        setTimeout(() => inputs[0].focus(), 100);
      }
   
  });
});
