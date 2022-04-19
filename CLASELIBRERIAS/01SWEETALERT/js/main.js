function init()
{
    saludarConSweetAlert();
    agregarEventoABoton();
    alertSinBotonDeConfirmacion();
    alertConImagenes();
    alertConEventos();

}


function saludarConSweetAlert()
{
    //const name = prompt("Ingresa un nombre");


     Swal.fire({
         title: `Hola, con Sweet Alert`, 
         text: 'Esto es un saludo',
         icon: 'warning',
         confirmButtonText: 'PIOLA'
     });
}
function alertSinBotonDeConfirmacion(){
    const btn = document.querySelector("#btnSweet2");
    btn.addEventListener("click", 
    ()=>
    Swal.fire({
        title: `Hola, con Sweet Alert`, 
        text: 'Esto es un saludo',
        icon: 'warning',
        
    }));
}
function agregarEventoABoton()
{
    const btn = document.querySelector("#btnSweet");
    btn.addEventListener("click", 
    ()=>
    Swal.fire({
        title: `Hola, con Sweet Alert`, 
        text: 'Esto es un saludo',
        icon: 'warning',
        
    }));
    
    
}

function alertConImagenes()
{
    const btn = document.querySelector("#btnSweet3");
    btn.addEventListener("click", 
    ()=>
    Swal.fire({
        title: `Hola, con Sweet Alert`, 
        imageUrl: 'https://imagenes.20minutos.es/uploads/imagenes/2020/06/19/rick-astley-en-su-cancion-never-gonna-give-you-up.gif',
        imageWidth: '200px',
        text: 'Esto es un saludo',
        icon: 'warning',
        width: "600px",
        background: "#4e4e4e",
        color: "white",

        
    }));
}

function alertConEventos()
{
    const btn = document.querySelector("#btnSweet4");
    btn.addEventListener("click", 
    ()=>
    Swal.fire({
        title: `Hola, con Sweet Alert`, 
        imageUrl: 'https://imagenes.20minutos.es/uploads/imagenes/2020/06/19/rick-astley-en-su-cancion-never-gonna-give-you-up.gif',
        imageWidth: '200px',
        text: 'Esto es un saludo',
        icon: 'warning',
        width: "600px",
        background: "#4e4e4e",
        color: "white",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "CONFIRMAR",
        cancelButtonText: "CANCELAR"
        }).then((result)=>{
            if(result.isConfirmed)
            {
                console.log("CONFIRMO ACCION")
            }
            else{
                console.log("NO CONFIRMO ACCION");
            }
        }));
}