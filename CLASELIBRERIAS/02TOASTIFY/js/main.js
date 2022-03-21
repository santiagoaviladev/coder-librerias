function init()
{
   agregarAccionConToastify()

}

function agregarAccionConToastify(){

    const nodo = document.querySelector("#btnTOAST"); 
    nodo.addEventListener("click", ()=>
    {
        Toastify({

        }).showToast();
    })

}

function agregarAccionConToastifyStyled(){

    const nodo = document.querySelector("#btnTOASTStyled"); 
    nodo.addEventListener("click", ()=>
    {
        Toastify({

        }).showToast();
    })

}


function agregarAccionConToastifyClickeable(){

    const nodo = document.querySelector("#btnTOASTClickeable"); 
    nodo.addEventListener("click", ()=>
    {
        Toastify({

        }).showToast();
    })

}

function agregarAccionConToastifyDestiny(){

    const nodo = document.querySelector("#btnTOASTDESTINY"); 
    nodo.addEventListener("click", ()=>
    {
        Toastify({

        }).showToast();
    })

}

