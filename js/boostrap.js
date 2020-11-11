var matriz= [[],[],[],[],[],[]];

var objetosDemeter={

    "objetos":[

        {"nombre":"Tu","tipo":"Puta","caracteristicas":"Madre","fotos":"Miguel","precio":"Angel","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""},
        {"nombre":"","tipo":"","caracteristicas":"","fotos":"","precio":"","web":""}
    ]
    };

for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < 7; j++) {

        matriz[i][j]= objetosDemeter;
    }
}

for (let i = 0; i < matriz.length; i++) {

    let fila="<div class='row'>";

    for (let j = 0; j < matriz[i].length; j++) {

        fila+="<div id="+i+"-"+j+" class='col'>"+matriz[i][j]+"</div>";

    }

    fila+= "</div>";
    document.getElementById("objetos").innerHTML+=fila;
}