
let objetosDemeter={

    "objetos":[

        {"nombre":"Objeto1","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto2","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto3","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto4","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto5","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto6","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto7","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto8","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"Objeto9","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""}
    ]
};


for (let i = 0; i < 10; i++) {

    let fila="<div class='row-sm'>";

    fila+="<div id="+i+" class='col-sm'>"+objetosDemeter.objetos[i].nombre+"</div>";

    fila+= "</div>";
    document.getElementById("cuadritos").innerHTML+= fila;
}


function listado() {

    var objeto= document.getElementById("cuadritos");
    objeto.innerHTML="";

    let fila="<ul class='list-group'>";

    for (let i = 0; i < 10; i++) {

        fila+="<li class='list-group-item'> " +
            "<div class='img-lista'>"+objetosDemeter.objetos[i].fotos+"</div>" +
            "<div class='nombre-lista'>"+objetosDemeter.objetos[i].nombre+" </div>" +
            "</li>";
    }

    fila+= "</div>";
    document.getElementById("cuadritos").innerHTML+= fila;

}


function grideado() {

    var objeto= document.getElementById("cuadritos");
    objeto.innerHTML="";

    for (let i = 0; i < 10; i++) {

        let fila="<div class='row-sm'>";

        fila+="<div id="+i+" class='col-sm'>"+objetosDemeter.objetos[i].nombre+"</div>";

        fila+= "</div>";
        document.getElementById("cuadritos").innerHTML+= fila;
    }

}