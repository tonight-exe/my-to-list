// Función para añadir un nuevo elemento a la lista
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Sumamos 1 porque getMonth devuelve un valor entre 0 y 11
    var año = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();

    // Formateamos la fecha
    var fechaFormateada = `${dia}/${mes}/${año} ${hora}:${minutos}`;

    // Si el campo de texto no está vacío, añade el nuevo elemento
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var texto = `${inputValue} - ${fechaFormateada}`;
        var t = document.createTextNode(texto);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    }
    
    // Limpia el campo de texto después de agregar el elemento
    document.getElementById("myInput").value = "";

    // Crea un botón para eliminar el elemento
    var span = document.createElement("span");
    var txt = document.createTextNode("Delete");
    span.className = "btn btn-danger espacio";
    span.appendChild(txt);
    li.appendChild(span);

    // Asigna la función de eliminar cuando se haga clic en el botón "Delete"
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}