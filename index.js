// Si estás usando módulos ES6


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

//productos

window.onload = async()=> {
  const productList = await(await fetch("http://localhost:5000/api/productos")).json();
  console.log(productList);
  display(productList);
}

function display(productList) {
  let productoHTML = '';


  productList.forEach(element => {
    productoHTML += `
      <div class="col-md-4">
        <div class="card mb-4 product-wap rounded-0">
          <div class="card rounded-0">
            <img class="card-img rounded-0 img-fluid" src="${element.imagenes}">
            <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul class="list-unstyled">
                <li><a class="btn btn-success text-white" href="${element.linkHeart}"><i class="far fa-heart"></i></a></li>
                <li><a class="btn btn-success text-white mt-2" href="${element.linkEye}"><i class="far fa-eye"></i></a></li>
                <li><a class="btn btn-success text-white mt-2" href="${element.linkCart}"><i class="fas fa-cart-plus"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <a href="${element.link}" class="h3 text-decoration-none">${element.nombre}</a>
            <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
              <li class="pt-2">
              <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
              </li>
            </ul>
            <ul class="list-unstyled d-flex justify-content-center mb-1">
              <li>
                ${Array.from({ length: element.rating }, (_, index) => `<i class="text-warning fa fa-star"></i>`).join('')}
                ${Array.from({ length: 5 - element.rating }, (_, index) => `<i class="text-muted fa fa-star"></i>`).join('')}
              </li>
            </ul>
            <p class="text-center mb-0">${element.precio}</p>
          </div>
        </div>
      </div>
    `;
  });

  // Agregar el HTML generado al contenedor deseado
  const container = document.getElementById('productContainer');
  container.innerHTML = productoHTML;
}


