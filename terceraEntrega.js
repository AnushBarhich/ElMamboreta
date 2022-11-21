//Manipulacion del DOM
//getElement
const mainTittle = document.getElementById('mainTittle1')

//inner.text
mainTittle.innerText = 'Bienvenidos al Mamboreta!!'


//Creacion de la tienda virtual desde el DOM

const botonAgregar = document.getElementById('agregar')
const botonFinalizar = document.getElementById('finalizar')


const productos=[]
    class Producto{
        constructor(id,name,price,stock){
            this.id=id
            this.name=name
            this.price=price
            this.stock=stock
        }
    }

    const producto1= new Producto (1,'Libreta Anotador',1200,50)
    productos.push(producto1)
    const producto2= new Producto (2,'Libreta Docente',2500,25)
    productos.push(producto2)
    const producto3= new Producto (3,'Pizarra Infantil',1800,100)
    productos.push(producto3)
    const producto4= new Producto (4,'Calendarios',1000,50)
    productos.push(producto4)
    const producto5= new Producto (5,'Stickers - kit 20 planchas',800,1000)
    productos.push(producto5)
    const producto6= new Producto (6,'Marionetas de cuentos',1200,50)
    productos.push(producto6)
    const producto7= new Producto (7,'Marionetas de Animales',1200,50)
    productos.push(producto7)
    const producto8= new Producto (8,'Paneles didacticos',1200,50)
    productos.push(producto8)
    const producto9= new Producto (9,'Figuras de madera',1200,50)
    productos.push(producto9)
    const producto10= new Producto (10,'Rompecabezas',1200,50)
    productos.push(producto10)

    const selectTag = document.getElementById('lista')
    productos.forEach(producto => {
        const optionTag = document.createElement('option')
        optionTag.innerText=`${producto.name}:$${producto.price}`
        selectTag.append(optionTag)        
    });


//Manejo del formulario con datos del cliente

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const botonDatos = document.getElementById('botonDatos')

formulario.onsubmit = () =>{
    const usuario = {
        nombre: nombre.value,
        apellido: apellido.value
    }
    nombre.value=''
    apellido.value=''
    console.log(usuario)

    localStorage.setItem('infoUsuario',JSON.stringify(usuario))
}







