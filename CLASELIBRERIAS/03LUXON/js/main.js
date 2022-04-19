const luxonDateTime = luxon.DateTime;


function init()
{
   crearDateTimeLocal();
   crearDateAPartirDeUnObjeto();
   crearDateTimeConIso();
   usarToLocaleString();
   programarBtn();

}


function crearDateTimeLocal()
{
   const fecha = luxonDateTime.local(2022, 1, 12, 12, 0);

   console.log(fecha);

   const fechaSinParams = luxonDateTime.local();
   console.log("FECHA SIN PARAMS", fechaSinParams);
}

function crearDateAPartirDeUnObjeto()
{
  const fecha = luxonDateTime.fromObject(
     {day: 22, month:1, year: 2020},
     {zone: 'America/Buenos_Aires'},
  )
  console.log("fecha desde objeto", fecha);

}


function crearDateTimeConIso()
{
   const fecha = luxonDateTime.fromISO("2017-05-15");
   console.log("FROM ISO", fecha);
   console.log("TO STRING", fecha.toString());
}

function usarToLocaleString()
{
   const fecha = luxonDateTime.fromISO("2017-05-15");
   console.log("LOCAL STRING", fecha.setLocale('de').toLocaleString())
}


function programarBtn()
{
   const btn = document.querySelector("#dateBtn");
   btn.addEventListener("click", ()=>
   {
      let fecha = document.getElementById("myDate").value;

      const fechaActual = luxonDateTime.local();

      fecha = luxonDateTime.fromISO(fecha);


      console.log("LUXON DATE 1:", fechaActual.c.day);
      console.log("LUXON DATE:", fecha.c.day);

   })

}