
 function appendOperation(operation) {
   document.querySelector("#resultArea").innerHTML += operation
}

  function calculateResult() {
   let container =  document.querySelector("#resultArea");
   let result = eval(container.innerHTML);
   container.innerHTML = result ;

}

function delet() {
   let container =  document.querySelector("#resultArea")
   container.innerHTML.endsWith(' ') ?  container.innerHTML = container.innerHTML.slice(0, -3) : container.innerHTML = container.innerHTML.slice(0, -1) 

}

   function cc() {
      let container =  document.querySelector("#resultArea");
      container.innerHTML = ' ' 
}


