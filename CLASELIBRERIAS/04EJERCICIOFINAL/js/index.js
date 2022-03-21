function init()
{
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

function cargarTeclado()
{
    const nodo = document.querySelector("#teclado");
    for(let i =0; i<10; i++)
    {
        const div = document.createElement("div");
        div.setAttribute("class", "numero")
        div.innerHTML=`${i}`;
        nodo.appendChild(div);
    }
    let div = document.createElement("div");
    div.setAttribute("class", "operacion")
    div.innerHTML=`+`;
    nodo.appendChild(div);

    div = document.createElement("div");
    div.setAttribute("class", "operacion")
    div.innerHTML=`*`;
    nodo.appendChild(div);
  
    
}