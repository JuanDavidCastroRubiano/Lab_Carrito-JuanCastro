var botones = document.querySelectorAll(".btn-agregar");

var lista = document.querySelector("#lista-carrito");

var mensajeVacio = document.querySelector("#msg-vacio");

var totalTexto = document.querySelector("#total");

var badge = document.querySelector("#badge");

var btnVaciar = document.querySelector("#btn-vaciar");

var total = 0;

var contador = 0;

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        var nombre = boton.dataset.nombre;
        var precio = boton.dataset.precio;

        agregarAlCarrito(nombre, precio);

    });

});

function agregarAlCarrito(nombre, precio) {

    if (mensajeVacio) {

        mensajeVacio.remove();

        mensajeVacio = null;

    }

    var li = document.createElement("li");

    li.classList.add("list-group-item");

    li.textContent = nombre + " - $" + precio + " ";

    var btnEliminar = document.createElement("button");

    btnEliminar.textContent = "❌";

    btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "float-end");

    li.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", function () {

        total = total - Number(precio);

        totalTexto.textContent = formatearDinero(total);

        contador--;

        badge.textContent = contador;

        li.remove();

        if (contador === 0) {

            var nuevoMensaje = document.createElement("li");

            nuevoMensaje.classList.add("list-group-item");

            nuevoMensaje.id = "msg-vacio";

            nuevoMensaje.textContent = "Tu carrito está vacío";

            lista.appendChild(nuevoMensaje);

            mensajeVacio = nuevoMensaje;

        }

    });

    lista.appendChild(li);

    total = total + Number(precio);

    totalTexto.textContent = formatearDinero(total);

    contador++;

    badge.textContent = contador;

}

btnVaciar.addEventListener("click", function () {

    lista.innerHTML = "";

    var li = document.createElement("li");

    li.classList.add("list-group-item");

    li.id = "msg-vacio";

    li.textContent = "Tu carrito está vacío";

    lista.appendChild(li);

    total = 0;

    totalTexto.textContent = total;

    contador = 0;

    badge.textContent = contador;

});

function formatearDinero(numero) {

    return numero.toLocaleString("es-CO");

}