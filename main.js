const mensajeInicial = "Ingresa la letra de lo que queres cotizar \n"+
                        "a)Casas \n "+
                        "b)Vehiculos \n "+
                        "c)Objetos \n "
let mensajeCosto = ""
let nuevaCotizacion = true
function cotizar(){
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
        if(seleccion !== "a" && seleccion !== "b" && seleccion !== "c"){
            alert("Ingrese un codigo valido")
            return
        }else{
            switch(seleccion){
                case "a": 
                    mensajeCosto = "el seguro de la propiedad es 100$ por metro cuadrado por mes"
                    break
                case "b":  
                    mensajeCosto = "el seguro del vehiculo es 100$ por mes"
                    break
                case "c":
                    mensajeCosto = "el seguro del objeto es 50$ por mes"
                    break
                default:
                    mensajeCosto = "Algo salio mal, intente nuevamente"
        }
        alert(mensajeCosto)
    }  
}   

function cotizaciones(){
    while(nuevaCotizacion){
        cotizar()
        nuevaCotizacion= confirm("¿desea seguir cotizando otros productos?")

    }
}