const tiendas = [
    { id: 1, nombre: "Variedades Andrea", tipo: "barrio" },
    { id: 2, nombre: "Supermercado Pocho", tipo: "barrio" },
    { id: 3, nombre: "Víveres y Abarrotes", tipo: "barrio" },
    { id: 4, nombre: "Merca Super", tipo: "mediana" },
    { id: 5, nombre: "Surtimax", tipo: "mediana" },
    { id: 6, nombre: "Líder", tipo: "mediana" },
    { id: 7, nombre: "Éxito", tipo: "grande" },
    { id: 8, nombre: "Carulla", tipo: "grande" },
    { id: 9, nombre: "Jumbo", tipo: "grande" }
]

function mostrarTiendas(tipo) {
    if (tipo === "barrio") {
        const tiendasBarrio = tiendas.filter(tienda => tienda.tipo === "barrio");
        console.log(tiendasBarrio);

        const contenedor1 = document.getElementById("lista-barrio");

        tiendasBarrio.forEach(tienda => {
            const itemB = document.createElement("li");

            itemB.textContent = tienda.nombre;
            contenedor1.appendChild(itemB);
        })
    }

    if (tipo === "mediana") {
        const tiendasMedianas = tiendas.filter(tienda => tienda.tipo === "mediana");
        console.log(tiendasMedianas);

        const contenedor2 = document.getElementById("lista-mediana");

        tiendasMedianas.forEach(tienda => {
            const itemM = document.createElement("li");

            itemM.textContent = tienda.nombre;
            contenedor2.appendChild(itemM)
        })
    }
    if (tipo === "grande") {
        const tiendasGrandes = tiendas.filter(tienda => tienda.tipo === "grande");
        console.log(tiendasGrandes);

        const contenedor3 = document.getElementById("lista-grande");

        tiendasGrandes.forEach(tienda => {
            const itemG = document.createElement("li");

            itemG.textContent = tienda.nombre;
            contenedor3.appendChild(itemG)
        })
    }
}

mostrarTiendas("barrio");
mostrarTiendas("mediana");
mostrarTiendas("grande");
