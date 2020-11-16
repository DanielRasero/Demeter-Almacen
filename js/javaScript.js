
let objetosDemeter={

    "objetos":[

        {"nombre":"Tornillo","tipo":"piezas pequeñas","caracteristicas":"Acero inox, 0.3cm x 1cm","fotos":"imagenes/perno.svg","precio":"0.75€","web":"tuferreteria.com"},

        {"nombre":"Tuerca","tipo":"piezas pequeñas","caracteristicas":"Acero inox, 1cm x 0.75cm","fotos":"imagenes/tuerca.svg","precio":"0.80€","web":"tuferreteria.com"},

        {"nombre":"Destornillador","tipo":"herramientas","caracteristicas":"destornillador de punta plana","fotos":"imagenes/destornillador.svg","precio":"2€","web":"tuferreteria.com"},

        {"nombre":"Alicate","tipo":"herramientas","caracteristicas":"alicates acero inox","fotos":"imagenes/alicate.svg","precio":"3€","web":"tuferreteria.com"},

        {"nombre":"Llave inglesa","tipo":"herramientas","caracteristicas":"llave inglesa acero inox","fotos":"imagenes/llave-inglesa.svg","precio":"4€","web":"tuferreteria.com"},

        {"nombre":"Carcasa Tanque","tipo":"pieza-maqueta","caracteristicas":"maqueta metálica completa acero inox","fotos":"imagenes/tanque.svg","precio":"50€","web":"tusmaquetas.com"},

        {"nombre":"Motor","tipo":"pieza-maqueta","caracteristicas":"motor eléctrico 20W","fotos":"imagenes/motor-electrico.svg","precio":"20€","web":"tuferreteria.com"},

        {"nombre":"Objeto8","tipo":"","caracteristicas":"","fotos":"imagenes/menu.svg","precio":"","web":"tuferreteria.com"},
        {"nombre":"Objeto9","tipo":"","caracteristicas":"","fotos":"imagenes/menu.svg","precio":"","web":"tuferreteria.com"},
        {"nombre":"Objeto10","tipo":"","caracteristicas":"","fotos":"imagenes/menu.svg","precio":"","web":"tuferreteria.com"},
        {"nombre":"Objeto11","tipo":"","caracteristicas":"","fotos":"imagenes/","precio":"","web":""},
        {"nombre":"Objeto12","tipo":"","caracteristicas":"","fotos":"imagenes/","precio":"","web":""},
        {"nombre":"Objeto13","tipo":"","caracteristicas":"","fotos":"imagenes/","precio":"","web":""}
    ]
};


for (let i = 0; i < 10; i++) {

    let fila="<div class='row-sm'>";

    fila+="<div id="+i+" class='col-sm'>"+
    "<div class='img-lista'><img src='"+objetosDemeter.objetos[i].fotos+"' alt=''></div>"+

        "<div id='nombre-grid'>"+objetosDemeter.objetos[i].nombre+"</div>" +
        "" +
        "</div>";

    fila+= "</div>";
    document.getElementById("cuadritos").innerHTML+= fila;
}


function listado() {

    var objeto= document.getElementById("cuadritos");
    objeto.innerHTML="";

    let fila="<ul class='list-group'>";

    for (let i = 0; i < 10; i++) {

        fila+="<li class='list-group-item'> " +
            "<div class='img-lista'><img src='"+objetosDemeter.objetos[i].fotos+"' alt=''></div>" +
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

        fila+="<div id="+i+" class='col-sm'>"+
            "<div class='img-lista'><img src='"+objetosDemeter.objetos[i].fotos+"' alt=''></div>"+

            "<div id='nombre-grid'>"+objetosDemeter.objetos[i].nombre+"</div>" +
            "" +
            "</div>";

        fila+= "</div>";
        document.getElementById("cuadritos").innerHTML+= fila;
    }

}