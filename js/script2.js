const productos = [
    {id: 1, nombre: "Unidad de Estado Solido", descripcion: "Unidad en estado solido Kingston NV2 NVMe PCIe 4.0 240GB  (SNV2S/240GB)", precio: "S/.125", img: "img/producto1.jpg", etiqueta: ""},
    {id: 2, nombre: "Monitor Teros", descripcion: "flat Teros TE-2412S, 23.8 IPS, 1920x1080 Full HD, HDMI, VGA , SPEAKER", precio: "S/.350", img: "img/producto2.jpg", etiqueta: "Sale", rating: 5},
    {id: 3, nombre: "Unidad de estado solido Western ",descripcion: "Unidad de estado solido Western Digital Green, WDS240G3G0A, 240GB, SATA 6Gb/s, 2.5, 7mm", precio: "$25.00", descuento: "$50.00", img: "img/producto3.jpg", etiqueta: "Sale"},
    {id: 4, nombre: "Popular Item",descripcion: "", precio: "$40.00", img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg", rating: 5}
];



const servicios = [
    {id: 1, nombre: "Mantenimiento de Equipo",etiqueta: "",descuento: "$0.00",  descripcion: "Realizamos mantenimientos preventivos y correctivos de sus computadoras", img: "img/servicio1.jpg", precio: "", rating:""},
    {id: 2, nombre: "Reparación de equipos",etiqueta: "",descuento: "$0.00", descripcion: "Realizamos reparación de equipos de computo a domicilio", img: "img/servicio2.jpg", precio: "", rating:""},
    {id: 3, nombre: "Instalación de Cámaras de Seguridad",etiqueta: "",descuento: "$0.00", descripcion: "Realizamos instalación de cámaras de seguridad a domicilio", img: "img/servicio3.jpg", precio: "", rating:""},
    {id: 4, nombre: "Instalación de Windows + Office",etiqueta: "",descuento: "$0.00", descripcion: "Formateo e instalación de windows + paquete Office original  a domicilio ", img: "img/servicio4.png", precio: "", rating:""},
    {id: 5, nombre: "Repotenciación de equipo",etiqueta: "",descuento: "$0.00", descripcion: "Repotenciamos tu maquina con la finalidad de que puedas seguir operando tus equipos con la mayor rapidez", img: "img/servicio5.jpg", precio: "", rating:""}
];

// Función para crear una tarjeta de producto
function crearTarjetaServicio(servicios) {
    const ServicioDiv = document.createElement('div');
    ServicioDiv.className = 'col-md-3';

    let etiquetaHTML = servicios.etiqueta ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${servicios.etiqueta}</div>` : "";
    let descuentoHTML = servicios.descuento ? `<span class="text-muted text-decoration-line-through">${servicios.descuento}</span> ` : "";
    let ratingHTML = servicios.rating ? `<div class="d-flex justify-content-center small text-warning mb-2">${'★'.repeat(servicios.rating)}</div>` : "";

    ServicioDiv.innerHTML = `
        <div class="card h-100">
            ${etiquetaHTML}
            <img class="card-img-top" src="${servicios.img}" alt="${servicios.nombre}" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${servicios.descripcion}</h5>
                   ${ratingHTML}
                    ${servicios.descripcion}${servicios.precio}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Contactar Servicio</a></div>
            </div>
        </div>
    `;

    document.getElementById('servicios').appendChild(ServicioDiv);
}

function crearTarjetaProducto(productos) {
    const ProductoDiv = document.createElement('div');
    ProductoDiv.className = 'col-md-3';

    let etiquetaHTML = productos.etiqueta ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${productos.etiqueta}</div>` : "";
    let descuentoHTML = productos.descuento ? `<span class="text-muted text-decoration-line-through">${productos.descuento}</span> ` : "";
    let ratingHTML = productos.rating ? `<div class="d-flex justify-content-center small text-warning mb-2">${'★'.repeat(productos.rating)}</div>` : "";
  
    ProductoDiv.innerHTML = `
    <div class="card h-100">
        ${etiquetaHTML}
        <img class="card-img-top" src="${productos.img}" alt="${productos.nombre}" />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${productos.nombre}</h5>
               ${ratingHTML}
                ${productos.descripcion} <br>  <h2>Precio  </h2>  <h4> ${productos.precio}  </h4>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Contactar Servicio</a></div>
        </div>
    </div>
`;

    document.getElementById('productos').appendChild(ProductoDiv);
}

// Agregar productos al DOM
servicios.forEach(crearTarjetaServicio);

productos.forEach(crearTarjetaProducto);

