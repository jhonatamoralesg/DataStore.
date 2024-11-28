const productos = [
    {id: 1, nombre: "Fancy Product", precio: "$40.00 - $80.00", img: "../img/servicio1.jpg", etiqueta: ""},
    {id: 2, nombre: "Special Item", precio: "$18.00", descuento: "$20.00", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", etiqueta: "Sale", rating: 5},
    {id: 3, nombre: "Sale Item", precio: "$25.00", descuento: "$50.00", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", etiqueta: "Sale"},
    {id: 4, nombre: "Popular Item", precio: "$40.00", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", rating: 5}
];

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'col-md-3';

    let etiquetaHTML = producto.etiqueta ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${producto.etiqueta}</div>` : "";
    let descuentoHTML = producto.descuento ? `<span class="text-muted text-decoration-line-through">${producto.descuento}</span> ` : "";
    let ratingHTML = producto.rating ? `<div class="d-flex justify-content-center small text-warning mb-2">${'★'.repeat(producto.rating)}</div>` : "";

    productoDiv.innerHTML = `
        <div class="card h-100">
            ${etiquetaHTML}
            <img class="card-img-top" src="${producto.img}" alt="${producto.nombre}" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.nombre}</h5>
                    ${ratingHTML}
                    ${descuentoHTML}${producto.precio}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    `;

    document.getElementById('productos').appendChild(productoDiv);
}

// Agregar productos al DOM
productos.forEach(crearTarjetaProducto);
