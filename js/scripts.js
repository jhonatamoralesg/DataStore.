const productos = [
   {id: 1, nombre: "Disco Sólido SSD 240GB", precio: "S/200.00", garantia: "12 meses", stock: 5, img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"},
   {id: 2, nombre: "Disco Sólido SSD 480GB", precio: "S/250.00", garantia: "12 meses", stock: 5, img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"}
];

const servicios = [
    {id: 1, nombre: "Mantenimiento de Equipo", descripcion: "Mantenimientos preventivos y correctivos", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"},
    {id: 2, nombre: "Reparación de equipos", descripcion: "Reparación a domicilio", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"},
    {id: 3, nombre: "Instalación de Cámaras de Seguridad", descripcion: "Instalación a domicilio", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"},
    {id: 4, nombre: "Instalación de Windows + Office", descripcion: "Formateo e instalación de software", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"},
    {id: 5, nombre: "Repotenciación de equipo", descripcion: "Mejora el rendimiento de tu equipo", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"}
];

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'col-md-4';

    productoDiv.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top" src="${producto.img}" alt="${producto.nombre}" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.nombre}</h5>
                    <p>Precio: ${producto.precio}</p>
                    <p>Garantía: ${producto.garantia}</p>
                    <p>Stock: ${producto.stock}</p>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    `;

    document.getElementById('productos').appendChild(productoDiv);
}

// Función para crear una tarjeta de servicio
function crearTarjetaServicio(servicio) {
    const servicioDiv = document.createElement('div');
    servicioDiv.className = 'col-md-4';

    servicioDiv.innerHTML = `
    <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
        <img class="card-img-top" src="${servicio.img}" alt="${servicio.nombre}" />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${servicio.nombre}</h5>
                <p>${servicio.descripcion}</p>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
    </div>
</div>
    `;

    document.getElementById('servicios').appendChild(servicioDiv);
}

// Agregar productos al DOM


// Agregar servicios al DOM
servicios.forEach(crearTarjetaServicio);
productos.forEach(crearTarjetaProducto);
