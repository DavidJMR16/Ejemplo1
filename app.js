
const productos = [
    { id: 1, nombre: 'Pizza', precio: 10 },
    { id: 2, nombre: 'Hamburguesa', precio: 8 },
    { id: 3, nombre: 'Soda', precio: 2 }
];

const carrito = [];


const divProductos = document.getElementById('productos');

productos.forEach(producto => {
    const div = document.createElement('div');
    div.textContent = `${producto.nombre} - $${producto.precio}`;
    const boton = document.createElement('button');
    boton.textContent = 'Añadir al Carrito';
    boton.onclick = () => añadirAlCarrito(producto.id);
    div.appendChild(boton);
    divProductos.appendChild(div);
});

function añadirAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    const itemCarrito = carrito.find(item => item.id === id);
    
    if (itemCarrito) {
        itemCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
}


   const listaCarrito = document.getElementById('lista-carrito');
   const total = document.getElementById('total');

   function actualizarCarrito() {
       listaCarrito.innerHTML = '';
       let totalCompra = 0;

       carrito.forEach(item => {
           const li = document.createElement('li');
           li.textContent = `${item.nombre} - $${item.precio} x ${item.cantidad}`;
           listaCarrito.appendChild(li);
           totalCompra += item.precio * item.cantidad;
       });

       total.textContent = totalCompra;
   }  

   const botonVaciar = document.getElementById('vaciar-carrito');

   botonVaciar.onclick = () => {
       carrito.length = 0;
       actualizarCarrito();
   };
