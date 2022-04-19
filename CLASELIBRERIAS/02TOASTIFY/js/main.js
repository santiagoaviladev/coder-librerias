function init()
{
   agregarAccionConToastify();
   agregarAccionConToastifyStyled();
   agregarAccionConToastifyClickeable();
   agregarAccionConToastifyDestiny();

}

function agregarAccionConToastify(){

   const btn = document.querySelector("#btnTOAST");
   btn.addEventListener("click", ()=>{
      Toastify({
         text: "Hola, con Toast",
         duration: 3000,
         gravity: 'bottom',
         position: 'left'
      }).showToast();
   })

    

}

function agregarAccionConToastifyStyled(){

   const btn = document.querySelector("#btnTOAST2");
   btn.addEventListener("click", ()=>{
      Toastify({
         text: "🤑 Hola, con Toast",
         duration: 3000,
         gravity: 'bottom',
         position: 'left',
         style: {
            background: "green",
            width: "80%",
            borderRadius: "20px",
         }
      }).showToast();
   })
}


function agregarAccionConToastifyClickeable(){

   const btn = document.querySelector("#btnTOAST3");
   btn.addEventListener("click", ()=>{
      Toastify({
      text: "🤑 Hola, con Toast",
      duration: 5000,
      onClick: ()=>{
         alert("HOLA");
      }
   }).showToast()});
   
}

function agregarAccionConToastifyDestiny(){

   const btn = document.querySelector("#btnTOAST4");
   btn.addEventListener("click", ()=>{
      Toastify({
      text: "🤑 Hola, con Toast",
      duration: 5000,
      destination: "https://www.google.com"
   }).showToast()});

}

