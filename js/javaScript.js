
let objetosDemeter={

    objetos:[{
        name: "Cutter",
        kind: "tool",
        quantity: 1,
        picture: "cutter-svgrepo-com.svg",
        price: 30,
        website: "https://www.fullertool.com/product/5pc-pro-bolt-cutter-assortment/"
    },
        {
            name: "Axe",
            kind: "tool",
            quantity: 1,
            picture: "hacha.svg",
            price: 10,
            website: "https://www.fullertool.com/product/1-1-2-lb-graphite-core-axe/"
        },
        {
            name: "Wrench",
            kind: "tool",
            quantity: 1,
            picture: "llave-inglesa.svg",
            price: 5,
            website: "https://www.fullertool.com/product/pro-metric-combination-wrenches/"
        },
        {
            name: "pipe wrench",
            kind: "tool",
            quantity: 1,
            picture: "adjustable-wrench.svg",
            price: 10,
            website: "https://www.fullertool.com/product/pro-adjustable-pipe-wrenches/"
        },
        {
            name: "Hammer",
            kind: "tool",
            quantity: 1,
            picture: "martillo.svg",
            price: 3,
            website: ""
        },
        {
            name: "Screwdriver",
            kind: "tool",
            quantity: 1,
            picture: "destornillador.svg",
            price: 1,
            website: ""
        },
        {
            name: "Ruler",
            kind: "tool",
            quantity: 1,
            picture: "gobernante.svg",
            price: 5,
            website: "https://www.fullertool.com/product/slot-head-pro-screwdrivers/"
        },
        {
            name: "motor",
            kind: "part",
            quantity: 1,
            picture: "motor-electrico.svg",
            price: 30,
            website: "https://torro.lv/tubular-motors/AM35MEL-RF-6-28-rf-radio-control"
        },
        {
            name: "Platine",
            kind: "part",
            quantity: 4,
            picture: "placa-base.svg",
            price: 55,
            website: "https://www.torro-shop.de/24-GHz-Platine-Leopard"
        },
        {
            name: "Wechselquarze",
            kind: "part",
            quantity: 1,
            picture: "wechselquarze.svg",
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

    /*
    *   <div>
            <article>
            *
            * <img src=''/>
            * <h3></h3>
            *  <p> </p>
            *
            * </article>
    *   </div>
    * */

    imagen.setAttribute('src', "imagenes/"+objetosJson[num].picture);

    nombreObj.innerHTML= objetosJson[num].name;
    precio.innerHTML= objetosJson[num].price+' €';

    cuadrObjeto.setAttribute('class','col-sm');

}

function generarRow(num) {

    cuadrObjeto= document.createElement('article');

    divContenedor.appendChild(cuadrObjeto);

    imagen= cuadrObjeto.appendChild(document.createElement('img'));
    nombreObj= cuadrObjeto.appendChild(document.createElement('h3'));
    precio= cuadrObjeto.appendChild(document.createElement('p'));

    //cuadrObjeto.setAttribute('onclick', 'openModal('+num+')');
    imagen.setAttribute('src', 'imagenes/'+objetosJson[num].picture);

    nombreObj.innerHTML= objetosJson[num].name;
    precio.innerHTML= objetosJson[num].price+' €';


    cuadrObjeto.setAttribute('class','list-group-item');

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

     if (estiloPag=="listado"){

          listar();

     }else if (estiloPag== "grideado"){

         gridear();

     }

}


//misma función pero en orden descendente
function ordenarDescend() {

    objetosJson.sort(function(a,b){return a.price - b.price;});

    divContenedor.innerHTML="";

    if (estiloPag=="listado"){

        listar();

    }else if (estiloPag== "grideado"){

        gridear();

    }

}



let btn = document.querySelector('input');

btn.onkeyup = function(event) {

    let letra = String.fromCharCode(event.key);

    var objeto = document.getElementById("cuadritos");
    objeto.innerHTML = "";


    for (let i = 0; i < 10; i++) {

        let fila = "<div class='row-sm'>";

        if (objetosDemeter.objetos[i].nombre.contains(letra)) {

            fila += "<div id=" + i + " class='col-sm'>" +
                "<div class='img-lista'><img src='" + objetosDemeter.objetos[i].fotos + "' alt=''></div>" +

                "<div id='nombre-grid'>" + objetosDemeter.objetos[i].nombre + "</div>" +
                "" +
                "</div>";

        }
        fila += "</div>";
        document.getElementById("cuadritos").innerHTML += fila;

        estiloPag = "grideadisimo";
    }


}



