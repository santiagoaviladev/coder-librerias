

function init()
{
    saludar();
    cargarTeclado();
}



/* 

    1. Escriba un programa que pida al usuario su nombre en una ventana Swwet Alert  
    2. Una vez, obtenido el nombre, mostrar un mensaje de Bienvenida. 
    3. Muestre una pantalla con el teclado de una calculadora básica. (SUMA,  MUL)
    0 1 2 
    3 4 5
    6 7 8
    9 + * 
    Puede usar el template predefinido.
    4. Haga que los resultado de  clickear número y  operaciones se muestren en un toast
    */

let res={op1:-1,op2:-1,operacion:"SUMA"};

function cargarTeclado()
{
    const nodoTeclado = document.querySelector("#teclado")
    for(let i=0;i<10;i++)
    {
        const btn = document.createElement("button");
        btn.innerHTML=i;
        btn.addEventListener("click", ()=>setResultado(i));
        nodoTeclado.appendChild(btn);
    }
}

function setResultado (num)
{
    if(res.op1===-1)
    {
        res.op1=num;
    }
    else if(res.op2===-1)
    {
        res.op2=num;
        Toastify({
            text: `SUMA: ${res.op1 + res.op2}`,
            
         }).showToast();
    }
}


function saludar()
{
   const nombre = prompt("Ingrese su nombre");
   Swal.fire({
       text: `Hola, ${nombre}`
  });
}