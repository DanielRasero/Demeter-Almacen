
let objetosDemeter={

    objetos:[{
        name: "Cutter",
        kind: "tool",
        quantity: 1,
        picture: ["cutter-svgrepo-com.svg"],
        price: 30,
        website: "https://www.fullertool.com/product/5pc-pro-bolt-cutter-assortment/"
    },
        {
            name: "Axe",
            kind: "tool",
            quantity: 1,
            picture: ["hacha.svg"],
            price: 10,
            website: "https://www.fullertool.com/product/1-1-2-lb-graphite-core-axe/"
        },
        {
            name: "Wrench",
            kind: "tool",
            quantity: 1,
            picture: ["llave-inglesa.svg"],
            price: 5,
            website: "https://www.fullertool.com/product/pro-metric-combination-wrenches/"
        },
        {
            name: "pipe wrench",
            kind: "tool",
            quantity: 1,
            picture: ["adjustable-wrench.svg"],
            price: 10,
            website: "https://www.fullertool.com/product/pro-adjustable-pipe-wrenches/"
        },
        {
            name: "Hammer",
            kind: "tool",
            quantity: 1,
            picture: ["martillo.svg"],
            price: 3,
            website: ""
        },
        {
            name: "Screwdriver",
            kind: "tool",
            quantity: 1,
            picture: ["destornillador.svg"],
            price: 1,
            website: ""
        },
        {
            name: "Ruler",
            kind: "tool",
            quantity: 1,
            picture: ["gobernante.svg"],
            price: 5,
            website: "https://www.fullertool.com/product/slot-head-pro-screwdrivers/"
        },
        {
            name: "motor",
            kind: "part",
            quantity: 1,
            picture: ["motor-electrico.svg"],
            price: 30,
            website: "https://torro.lv/tubular-motors/AM35MEL-RF-6-28-rf-radio-control"
        },
        {
            name: "Platine",
            kind: "part",
            quantity: 4,
            picture: ["placa-base.svg","platine-leopard.jpg"],
            price: 55,
            website: "https://www.torro-shop.de/24-GHz-Platine-Leopard"
        },
        {
            name: "Wechselquarze",
            kind: "part",
            quantity: 1,
            picture: ["wechselquarze.svg"],
            price: 25,
            website: "https://www.torro-shop.de/wechselquarze-quarze-no-02-fuer-panzer-fernbedienung-der-heng-long-panzer"
        }
    ]
};


//variable para guardar en que modo está distribuido la página
var divContenedor= document.getElementById('cuadritos');


var objetosJson;
objetosJson = JSON.parse(JSON.stringify(objetosDemeter.objetos));

var estiloPag= "grideado";


for (let i = 1; i < objetosJson.length; i++) {

    generarGrid(i);

}


function generarGrid(num) {

    var cuadrObjeto= document.createElement('article');

    divContenedor.appendChild(cuadrObjeto);

    var imagen= cuadrObjeto.appendChild(document.createElement('img'));
    var nombreObj= cuadrObjeto.appendChild(document.createElement('h3'));
    var precio= cuadrObjeto.appendChild(document.createElement('p'));


    imagen.setAttribute('src', "imagenes/"+objetosJson[num].picture[0]);

    nombreObj.innerHTML= objetosJson[num].name;
    precio.innerHTML= objetosJson[num].price+' €';

    cuadrObjeto.setAttribute('class','col-sm');
    cuadrObjeto.setAttribute('id','cuadradin');
    cuadrObjeto.setAttribute('data-toggle', 'modal');
    cuadrObjeto.setAttribute('data-target','#exampleModal')
    cuadrObjeto.setAttribute('onclick', 'showModal('+num+')');


}

function generarRow(num) {

    cuadrObjeto= document.createElement('article');


    divContenedor.appendChild(cuadrObjeto);

    imagen= cuadrObjeto.appendChild(document.createElement('img'));
    nombreObj= cuadrObjeto.appendChild(document.createElement('h3'));
    precio= cuadrObjeto.appendChild(document.createElement('p'));

    //cuadrObjeto.setAttribute('onclick', 'openModal('+num+')');
    imagen.setAttribute('src', 'imagenes/'+objetosJson[num].picture[0]);

    nombreObj.innerHTML= objetosJson[num].name;
    precio.innerHTML= objetosJson[num].price+' €';

    cuadrObjeto.setAttribute('class','list-group-item');
    cuadrObjeto.setAttribute('data-toggle', 'modal');
    cuadrObjeto.setAttribute('data-target','#exampleModal')
    cuadrObjeto.setAttribute('onclick', 'showModal('+num+')');



}

function listar(){

    divContenedor.innerHTML="";

    for (let i = 0; i < objetosJson.length; i++) {

        generarRow(i);
        estiloPag= "listado";
    }

}



function gridear(){

    divContenedor.innerHTML="";

    for (let i = 0; i < objetosJson.length; i++) {

        generarGrid(i);
        estiloPag= "grideado";
    }

}


//para ordenar de manera ascendente
function ordenarAscend() {

    objetosJson.sort(function(a,b){return a.price - b.price;});
    objetosJson.reverse();

    divContenedor.innerHTML="";

    if (document.getElementById('sel1').value== "Todas") {

        if (estiloPag == "listado") {

            listar();

        } else if (estiloPag == "grideado") {

            gridear();

        }

    }else{

        for (let i = 0; i < objetosJson.length; i++) {

            if (objetosJson[i].kind == document.getElementById('sel1').value) {

                if (estiloPag == "listado") {

                    generarRow(i);

                } else if (estiloPag == "grideado") {

                    generarGrid(i);

                }

            }

        }

    }

}


//misma función pero en orden descendente
function ordenarDescend() {

    objetosJson.sort(function(a,b){return a.price - b.price;});

    divContenedor.innerHTML="";

    if (document.getElementById('sel1').value== "Todas") {

        if (estiloPag == "listado") {

            listar();

        } else if (estiloPag == "grideado") {

            gridear();

        }

    }else{

        for (let i = 0; i < objetosJson.length; i++) {

            if (objetosJson[i].kind == document.getElementById('sel1').value) {

                if (estiloPag == "listado") {

                    generarRow(i);

                } else if (estiloPag == "grideado") {

                    generarGrid(i);

                }

            }

        }

    }

}


function filtrarNombre() {

    var contEncontrado = 0;

    document.getElementById('cuadritos').innerHTML="";

    for (let i = 0; i < objetosJson.length; i++) {

        if (objetosJson[i].name.includes(document.getElementById('buscador-nombre').value)) {

            if (estiloPag=="listado"){

               generarRow(i);

            }else if (estiloPag== "grideado"){

                generarGrid(i);

            }

            contEncontrado++;
        }

    }

    if (contEncontrado == 0) {

        var mensaje= divContenedor.appendChild(document.createElement("h1"));
        mensaje.innerHTML= "Ningún objeto encontrado";
    }

}

function filtrarTipo() {

    document.getElementById('cuadritos').innerHTML="";

    if (document.getElementById('sel1').value== "Todas"){

        if (estiloPag=="listado"){

            listar();

        }else if (estiloPag== "grideado"){

            gridear();

        }

    }else {

        for (let i = 0; i < objetosJson.length; i++) {

            if (objetosJson[i].kind == document.getElementById('sel1').value) {

                if (estiloPag == "listado") {

                    generarRow(i);

                } else if (estiloPag == "grideado") {

                    generarGrid(i);

                }

            }

        }
    }
}

document.addEventListener('keyup', function (event) { filtrarNombre();});



  function showModal(num){

      document.getElementById("exampleModalLabel").innerHTML= objetosJson[num].name;

      document.getElementById("fotos-carousel").innerHTML=
          "<div class='carousel-item active'>"+
          "<img src='imagenes/"+objetosJson[num].picture[0]+"'>"+
          "</div>";


      if ( objetosJson[num].picture.length > 1){

          for (let i = 1; i < objetosJson[num].picture.length; i++) {
              document.getElementById("fotos-carousel").innerHTML+=
                  "<div class='carousel-item'>"+
                  "<img src='imagenes/"+objetosJson[num].picture[i]+"'>"+
                  "</div>";

          }
      }

          document.getElementById("resto-modal").innerHTML=
          "<p>"+objetosJson[num].kind+"</p>" +
          "<p>"+objetosJson[num].price+" €</p>" +
          "<a href='"+objetosJson[num].website+"'>Link de compra</a>";

      $('#exampleModal').modal('show');

  }
