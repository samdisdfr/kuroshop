const url="http://localhost:5000/api/usuarios"

function registrar() {
    const datos = JSON.stringify({
        nombre:nombre.value,
        correo:correo.value,
        contrasena:contrasena.value,
        direccion:direccion.value,
    });

    axios.post(url, datos, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function (response) {
        alert(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}
//login
const url_login="http://localhost:5000/api/login"

function enviar(){
    const datos_login = JSON.stringify({
        correo:correo_1.value,
        contrasena:contraseña_1.value,
    });
    axios.post(url_login, datos_login, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function (response) {
        alert(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}