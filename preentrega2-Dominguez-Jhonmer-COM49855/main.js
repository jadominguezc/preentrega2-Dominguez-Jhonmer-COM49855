const Visitante = function(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

let visita1 = new Visitante("LUIS", "ROMERO", 25)
let visita2 = new Visitante("MARIA", "SUAREZ", 32)
let visita3 = new Visitante("ISABEL", "ZAMBRANO", 36)
let visita4 = new Visitante("REBECA", "SALAS", 33)
let visita5 = new Visitante("JOSUE", "INFANTE", 20)
let visita6 = new Visitante("MARCOS", "TORRES", 31)
let visita7 = new Visitante("LIZ", "RIVEROS", 28)
let listaDeVisitantes = [visita1, visita2, visita3, visita4, visita5, visita6, visita7]

function mostrarMenu() {
    return prompt(
        "¿Qué deseas hacer?\n" +
        "(1) Realizar el registro de un nuevo visitante.\n" +
        "(2) Filtrar por el nombre de algún visitante.\n" +
        "(3) Finalizar."
    )
}

function filtrarVisitante(){
    let claveDeBusqueda = prompt("Ingresa el nombre de la persona que deseas consultar:").toUpperCase()
    let personaEncontrada = listaDeVisitantes.filter(persona => persona.nombre.toUpperCase().includes(claveDeBusqueda))
    if (personaEncontrada.length > 0) {
        console.table(personaEncontrada)
    } else {
        alert("La persona que buscas no se encuentra en la lista de visitantes.")
    }
}

function registrarVisita() {
    let nombre = prompt("Ingresa tu nombre:").toUpperCase()
    let apellido = prompt("Ingresa tu apellido:").toUpperCase().trim()
    let edad = parseInt(prompt("Ingresa tu edad:"))
    
    if (nombre === "" || apellido === '' || isNaN(edad)) {
        alert("Se ingresó algún dato de forma incorrecta, intente nuevamente.")
        return
    }

    let nuevaVisita = new Visitante(nombre, apellido, edad)

    listaDeVisitantes.push(nuevaVisita)
    console.table(listaDeVisitantes)

    alert(`Registro realizado satisfactoriamente. \n${nombre}, deseamos que puedas disfrutar el evento.`)
}

let inicio

do {
    inicio = prompt("¿Nos visitas por primera vez (Responde SI o NO)?").toUpperCase()

    if (inicio !== "SI" && inicio !== "NO") {
        alert("Opción incorrecta, inténtelo nuevamente.")
    }
} while (inicio !== "SI" && inicio !== "NO")

if (inicio === "SI") {
    registrarVisita()
    do {
        let opcion = mostrarMenu()
        if (opcion === "1") {
            registrarVisita()
        } else if (opcion === "2") {
           filtrarVisitante()
        } else if (opcion === "3") {
            alert("Disfruta el Evento.")
            break
        } else {
            alert("La opción ingresada no es correcta, inténtelo nuevamente.")
        }
    } while (true)
} else if (inicio === "NO") {
    alert("Bienvenido, deseamos que disfrutes el evento.")
}