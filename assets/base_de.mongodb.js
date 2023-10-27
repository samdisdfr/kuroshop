use("kuroshop")
/**USUARIOS
 * db.getCollection("usuario").insertMany(
    [
        {
            "id":1,
            "nombre": "Diego",
            "apellido": "Hernández",
            "correo": "diego.hernandes@example.com",
            "username": "dhernandez",
            "dni": 98761234
        },
        {
            "id":2,
            "nombre": "Laura",
            "apellido": "Martínez",
            "correo": "laura.martinez@mail.com",
            "username": "lmartinez",
            "dni": 78906543
        },
        {
            "id":3,
            "nombre": "Carlos",
            "apellido": "López",
            "correo": "carlos.lopez@example.com",
            "username": "clopez",
            "dni": 43215678
        },
        {
            "id":4,
            "nombre": "María",
            "apellido": "Gómez",
            "correo": "maria@gomezmail.com",
            "username": "mgomez",
            "dni": 67890123
        },
        {
            "id":5,
            "nombre": "Sofía",
            "apellido": "Ramírez",
            "correo": "sofia.ramirez@example.com",
            "username": "sramirez",
            "dni": 54327890
         },
         {
            "id":6,
            "nombre": "Pedro",
            "apellido": "Sánchez",
            "correo": "pedro.sanchez@example.com",
            "username": "psanchez",
            "dni": 65432187
         },
         {
            "id":7,
            "nombre": "Isabel",
            "apellido": "Lara",
            "correo": "isabel.l@example.com",
            "username": "ilara",
            "dni": 45678901
         },
         {
            "id":8,
            "nombre": "Javier",
            "apellido": "Fernández",
            "correo": "javier.f@example.com",
            "username": "jfernandez",
            "dni": 34567812
         },
         {
            "id":9,
            "nombre": "Luisa",
            "apellido": "García",
            "correo": "luisa.garcia@mail.com",
            "username": "lgarcia",
            "dni": 87654321
         },
         {
            "id":10,
            "nombre": "Andrés",
            "apellido": "Torres",
            "correo": "andres.torres@mail.com",
            "username": "atorres",
            "dni": 76543218
          }
          
         
    ]
);
 * Buscar Datos o leer datos
 * db.getCollection("usuario").find();
 * 
 * db.getCollection("usuarios").find(
    {
        "id" : {
            "$eq":"1"
        }
    }
    );

 * Actualizar Datos
 * db.getCollection("usuario").updateOne(
    {
        "id":4
    },
    {
        "$set": {
            "dni": 12345678
        }
    }
);
 * Eliminar Datos
 db.getCollection("usuario").deleteOne({
    
        "id":"1"
    
});


MARCAS
db.getCollection("marcas").insertMany([
    {
        "nombre": "Samsung",
        "paisOrigen": "Corea del Sur",
        "fundacion": 1938,
        "sitioWeb": "https://www.samsung.com"
    },
    {
        "nombre": "Apple",
        "paisOrigen": "Estados Unidos",
        "fundacion": 1976,
        "sitioWeb": "https://www.apple.com"
    },
    {
        "nombre": "Huawei",
        "paisOrigen": "China",
        "fundacion": 1987,
        "sitioWeb": "https://consumer.huawei.com"
    },
    {
        "nombre": "Google",
        "paisOrigen": "Estados Unidos",
        "fundacion": 1998,
        "sitioWeb": "https://store.google.com"
    },
    {
        "nombre": "Xiaomi",
        "paisOrigen": "China",
        "fundacion": 2010,
        "sitioWeb": "https://www.mi.com"
    }
]);




PRODUCTOS
db.getCollection("productos").insertMany([
    {
        "_id":1,
        "nombre": "Samsung Galaxy S22",
        "marca": "Samsung",
        "categorias": ["Smartphones", "Android", "Flagship"],
        "precio": 899.99,
        "descripcion": "El último buque insignia de Samsung con un rendimiento impresionante y una pantalla de alta resolución.",
        "imagen": "https://example.com/images/samsung_s22.jpg"
    },
    {
        "_id":2,
        "nombre": "iPhone 13 Pro",
        "marca": "Apple",
        "categorias": ["Smartphones", "iOS", "Flagship"],
        "precio": 999.99,
        "descripcion": "El último iPhone Pro con potentes capacidades de fotografía y rendimiento excepcional.",
        "imagen": "https://example.com/images/iphone_13_pro.jpg"
    },
    {
        "_id":3,
        "nombre": "Huawei P50",
        "marca": "Huawei",
        "categorias": ["Smartphones", "Android", "Cámara"],
        "precio": 799.99,
        "descripcion": "El Huawei P50 destaca por su innovadora tecnología de cámara y diseño elegante.",
        "imagen": "https://example.com/images/huawei_p50.jpg"
    },
    {
        "_id":4,
        "nombre": "Google Pixel 6",
        "marca": "Google",
        "categorias": ["Smartphones", "Android", "Cámara"],
        "precio": 749.99,
        "descripcion": "El Pixel 6 de Google es conocido por su calidad de cámara y experiencia de Android pura.",
        "imagen": "https://example.com/images/pixel_6.jpg"
    },
    {
        "_id":5,
        "nombre": "Xiaomi Mi 11",
        "marca": "Xiaomi",
        "categorias": ["Smartphones", "Android", "Flagship"],
        "precio": 699.99,
        "descripcion": "El Xiaomi Mi 11 ofrece un gran rendimiento y una relación calidad-precio excepcional.",
        "imagen": "https://example.com/images/mi_11.jpg"
    }
]);
db.getCollection("productos").insertMany([
    {
        "_id":6,
        "nombre": "OnePlus 9",
        "marca": "OnePlus",
        "categorias": ["Smartphones", "Android", "Flagship"],
        "precio": 749.99,
        "descripcion": "El OnePlus 9 ofrece un rendimiento potente y una experiencia de Android fluida.",
        "imagen": "https://example.com/images/oneplus_9.jpg"
    },
    {
        "_id":7,
        "nombre": "Sony Xperia 5 III",
        "marca": "Sony",
        "categorias": ["Smartphones", "Android", "Cámara"],
        "precio": 799.99,
        "descripcion": "El Sony Xperia 5 III se destaca por su calidad de cámara y pantalla OLED de alta calidad.",
        "imagen": "https://example.com/images/sony_xperia_5.jpg"
    },
    {
        "_id":8,
        "nombre": "Nokia 8.3",
        "marca": "Nokia",
        "categorias": ["Smartphones", "Android", "Gama Media"],
        "precio": 399.99,
        "descripcion": "El Nokia 8.3 ofrece un rendimiento sólido a un precio asequible.",
        "imagen": "https://example.com/images/nokia_8.3.jpg"
    },
    {
        "_id":9,
        "nombre": "LG Velvet",
        "marca": "LG",
        "categorias": ["Smartphones", "Android", "Diseño"],
        "precio": 499.99,
        "descripcion": "El LG Velvet combina diseño elegante con características sólidas.",
        "imagen": "https://example.com/images/lg_velvet.jpg"
    },
    {
        "_id":10,
        "nombre": "Asus ROG Phone 6",
        "marca": "Asus",
        "categorias": ["Smartphones", "Android", "Gaming"],
        "precio": 899.99,
        "descripcion": "El Asus ROG Phone 6 es ideal para juegos móviles de alto rendimiento.",
        "imagen": "https://example.com/images/asus_rog_6.jpg"
    }
]);




CATEGORIAS
db.getCollection("categorias").insertMany([
    {
        "_id":11,
        "nombre": "Smartphones"
    },
    {
        "_id":22,
        "nombre": "Android"
    },
    {
        "_id":33,
        "nombre": "iOS"
    },
    {
        "_id":44,
        "nombre": "Flagship"
    },
    {
        "_id":55,
        "nombre": "Cámara"
    },
    {
        "_id":66,
        "nombre": "Gama Media"
    },
    {
        "_id":77,
        "nombre": "Diseño"
    },
    {
        "_id":88,
        "nombre": "Gaming"
    }
]);**/

