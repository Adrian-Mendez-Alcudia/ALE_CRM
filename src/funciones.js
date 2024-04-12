fetch("http://localhost:3000/api/user")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaUsuarios tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(usuario => {
        let fila = document.createElement('tr');
        console.log(usuario)
        Object.values(usuario).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de género:', error);
});

fetch("http://localhost:3000/api/gender")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaGenero tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(genero => {
        let fila = document.createElement('tr');

        Object.values(genero).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de género:', error);
});

fetch("http://localhost:3000/api/direction")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaDireccion tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(direccion => {
        let fila = document.createElement('tr');

        Object.values(direccion).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de direccion:', error);
});

fetch("http://localhost:3000/api/category")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaCategoria tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(categoria => {
        let fila = document.createElement('tr');

        Object.values(categoria).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de categoria:', error);
});

fetch("http://localhost:3000/api/product")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaProducto tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(producto => {
        let fila = document.createElement('tr');

        Object.values(producto).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de producto:', error);
});

fetch("http://localhost:3000/api/client")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaClientes tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(cliente => {
        let fila = document.createElement('tr');

        Object.values(cliente).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de clientes:', error);
});

fetch("http://localhost:3000/api/session")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaSesiones tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(sesiones => {
        let fila = document.createElement('tr');

        Object.values(sesiones).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de sesiones:', error);
});

fetch("http://localhost:3000/api/sessionProduct")
.then(response => response.json())
.then(data => {
    let tablaBody = document.querySelector('#tablaProSesiones tbody');

    // Limpiar el contenido de la tabla antes de agregar nuevos datos
    tablaBody.innerHTML = '';

    // Iterar sobre los datos y agregar filas a la tabla
    data.forEach(sesionesPro => {
        let fila = document.createElement('tr');

        Object.values(sesionesPro).forEach(value => {
            let celda = document.createElement('td');
            celda.textContent = value;
            fila.appendChild(celda);
        });

        tablaBody.appendChild(fila);
    });
})
.catch(error => {
    console.error('Error al obtener los datos de productos sesiones:', error);
});