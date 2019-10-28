// Dado el siguiente diagrama de clases... deseamos modelar el sistema utilizando objetos literales.
// Para el problema actual solo vamos a requerir 1 instancia de cada uno de los tipos de objetos, con lo cual
// vamos a poder definir la estructura de los objetos y asignarles valores al mismo tiempo.
// 1 Crear las tres variables e igualarlas a objetos literales vacios
// 2 Agregar las propiedades a los tres objetos correspondientes con valores iniciales
// 3 Agregar las funciones correspondientes por el momento vacias pero con los parametros correctos
// 4 Comencemos con la logica de incrementarSaldo del objeto Cuenta.
// 5 Armemos la logica del metodo validarAcceso del objeto Autorizador:
//     - Utilizemos forEach para recorrer las cuentas recibidas
//     - Validemos que coincidan tanto el nroCuenta, el usuario y la clave
//     - Si esto es verdadero, guardemos la cuenta en una variable local y devolvamos la cuenta encontrada al final
//     - O devolvamos null si no existe ninguna cuenta que coincida con la busqueda
// 6 Ahora, la logica del metodo depositarPlata del objeto Cajero:
//     - Primero validar el acceso utilizando el Autorizador interno y guardar la cuenta encontrada en una variable
//     - Si existe una cuenta, invocar al metodo incrementarSaldo de la misma. Y luego en consola mostrar el saldo actual.
//     - Si no, hacer console log de un mensaje de error
// 7 Finalicemos implementando disminuirSaldo de Cuenta y retirarPlata de Cajero
//     - La cuenta esta encargada de revisar que la disminucion sea valida, sino no modificar el saldo y avisar al cajero si el retiro fue exitoso o no.
//     - El Cajero debe hacer console log si el retiro fue exitoso o no y el estado actual de la cuenta luego del retiro (solo si fue exitoso).



// Ejercicios extra:
// Poner en el html 4 inputs: nroCuenta, usuario, clave, monto
// Poner 2 botones: retirar, depositar
// Bindear el click de ambos botones para que interactuen con los metodos del cajero (asi como estan)

// Proximos desafios:
// Cuenta con limite al descubierto
// Autorizador para administradores
// Cajero para administradores (sin cambiar su logica)
