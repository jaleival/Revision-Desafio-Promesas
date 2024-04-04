const verTitulos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        data.forEach((items) => {
            if (items.id <= 20) {
                console.log(items.title);
            }
        });
    } catch (error) {
        console.log(error);
    }
};
verTitulos();

// Requerimiento 5
const message = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información enviada");
        }, 3000);
    });
};

// Requerimiento 6
const llamarMensaje = async () => {
    const mensaje = await message();
    console.log(mensaje);
};
llamarMensaje();