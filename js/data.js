
let contenedor=document.getElementById("servicios");
const productos = [
    {id: 1, nombre: "Unidad de Estado Solido", descripcion: "Unidad en estado solido Kingston NV2 NVMe PCIe 4.0 240GB  (SNV2S/240GB)", precio: "S/.125", img: "img/producto1.jpg", etiqueta: ""},
    {id: 2, nombre: "Monitor Teros", descripcion: "flat Teros TE-2412S, 23.8 IPS, 1920x1080 Full HD, HDMI, VGA , SPEAKER", precio: "S/.350", img: "img/producto2.jpg", etiqueta: "Sale", rating: 5},
    {id: 3, nombre: "Unidad de estado solido Western ",descripcion: "Unidad de estado solido Western Digital Green, WDS240G3G0A, 240GB, SATA 6Gb/s, 2.5, 7mm", precio: "S/.75", descuento: "S/.75", img: "img/producto3.jpg", etiqueta: "Sale"},
    {id: 4, nombre: " Ryzen 5 3500X",descripcion: "El Ryzen 5 3500X de AMD es una gran manera de (re)descubrir el rendimiento de gama alta para los juegos", precio: "S/.370", img: "img/ryzen5_3500x.png", rating: 5},
    {id: 5, nombre: "Case Gamer Teros TE1163N",descripcion: "Panel lateral Vidrio templado, puertos USB 3.0", precio: "S/.190", img: "img/case_gamer.jpg", rating: 5},
    {id: 6, nombre: "PC GAMER RYZEN 5 4600G",descripcion: "A520-A PRO MSI MAINBOARD - 250GB PANTER STORAGE - 8GB DDR4 RAM....", precio: "S/.1170", img: "img/combo_gamer.png", rating: 5},
    {id: 7, nombre: "MEMORIA RAM ",descripcion: "MEMORIA RAM GEIL EVO POTENZA 8GB 3200MHZ DDR4 NEGRO", precio: "S/.70", img: "img/memoria_ram.png", rating: 5},
    {id: 8, nombre: "GEFORCE DUAL GTX 1650 ",descripcion: "VGA ASUS NVIDIA GEFORCE DUAL GTX 1650 4GB GDDR6 EVO", precio: "S/.670", img: "img/gtx_1650.png", rating: 5}


];







const crearTarjetaProducto= (productos) =>   {

const template = document.getElementById("producto-template").content;


const clone= template.cloneNode(true);
const etiqueta=clone.querySelector(".etiqueta");
const nombre=clone.querySelector(".nombre");
const img=clone.querySelector("img");
const descripcion=clone.querySelector(".descripcion");
const precio=clone.querySelector(".precio");
const descuento = clone.querySelector(".descuento");

if(productos.etiqueta)  {

    etiqueta.textContent = productos.etiqueta;
} else  {

    etiqueta.style.display = "none"; // Ocultar si no hay etiqueta

}
img.src = productos.img;
//img.alt = productos.nombre;
nombre.textContent = productos.nombre;
descripcion.textContent = productos.descripcion;
precio.textContent = productos.precio;


contenedor.appendChild(clone);

}

productos.forEach(crearTarjetaProducto);











