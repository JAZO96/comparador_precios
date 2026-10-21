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

const tiendasBarrio = tiendas.filter(tienda => tienda.tipo === "barrio");
console.log(tiendasBarrio);

const contenedor = document.getElementById("lista-barrio");

tiendasBarrio.forEach(tienda => {
    const item = document.createElement("li");

    item.textContent = tienda.nombre;
    contenedor.appendChild(item);
})