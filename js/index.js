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
var Cuenta = {
  nro: 1,
  usuario: 'asd',
  clave: 'asd',
  saldo: 1000,

  incrementarSaldo: function(monto) {
    this.saldo += monto;
  },

  disminuirSaldo: function(monto) {
    if (this.saldo - monto < 0) {
      return false;
    } else {
      this.saldo -= monto;
      return true;
    }
  }
};

var Autorizador = {
  validarAcceso: function(cuentas, nroCuenta, usuario, clave) {
    var cuentaBuscada = null;

    cuentas.forEach(function(cuenta) {
      if (cuenta.nro === nroCuenta && cuenta.usuario === usuario && cuenta.clave === clave) {
        cuentaBuscada = cuenta;
      }
    });

    return cuentaBuscada;
  }
};

var Cajero = {
  cuentas: [Cuenta],
  autorizador: Autorizador,
  
  depositarPlata: function(nroCuenta, usuario, clave, monto) {
    var autorizado = this.autorizador.validarAcceso(this.cuentas, nroCuenta, usuario, clave);
    if (autorizado) {
      autorizado.incrementarSaldo(monto);
      console.log('El nuevo saldo de su cuenta es: ' + autorizado.saldo);
    } else {
      console.log('No ingresaste un nro de cuenta o clave correcta');
    }
  },

  retirarPlata: function(nroCuenta, usuario, clave, monto) {
    var autorizado = this.autorizador.validarAcceso(this.cuentas, nroCuenta, usuario, clave);
    if (autorizado) {
      var exito = autorizado.disminuirSaldo(monto);
      if (exito) {
        console.log('Tu retiro fue exitoso. El nuevo saldo de su cuenta es: ' + autorizado.saldo);
      } else {
        console.log('No es posible retirar ese monto de tu cuenta.');
      }
    } else {
      console.log('No ingresaste un nro de cuenta o clave correcta');
    }
  }
};


// Ejercicios extra:
// - Poner en el html 4 inputs: nroCuenta, usuario, clave, monto
// - Poner 2 botones: retirar, depositar
// - Bindear el click de ambos botones para que interactuen con los metodos del cajero (asi como estan)

// Proximos desafios:
// Cuenta con limite al descubierto:
// 1 - Armar un nuevo Objeto literal CuentaConDescubierto con las mismas propiedades y metodos que Cuenta
// 2 - Agregar/Modificar lo necesario para que esta cuenta permita "girar en descubierto" limitando a un valor maximo definido por la cuenta
// 3 - Agregar esta nueva cuenta al listado de cuentas del Cajero e interactuar con ambas cuentas y ver como funciona

// Autorizador para administradores
// 4 - Armar un nuevo Objeto literal AutorizadorAdmin con las mismas propiedades y metodos que Autorizador
// 5 - Agregar/Modificar lo necesario para que este autorizador permita utilizando un usuario y clave maestra acceda a la cuenta buscada segun el nroCuenta
// 6 - Cambiar el Autorizador que utiliza el Cajero e interactuar con ambas cuentas y ver como funciona

// Hasta aca vimos que el codigo del Cajero fue 100% reutilizable, sin embargo las cuentas y los autorizadores no. Hagamos que sea mas reutilizable el codigo de las Cuentas.
// 7 - Crear una funcion llamada crearCuenta que reciba por parametro: nro, usuario, clave y saldo.
// 8 - Hacer que esta funcion cree un objeto literal de tipo Cuenta, asigne los valores recibidos y agregue la cuenta a la lista de cuentas del Cajero.
// 9 - Desde la consola, crear un par de cuentas y luego intentar interactuar con ellas.

// Preguntas:
// - Quien tiene actualmente la responsabilidad de crear cuentas?
// - Quien deberia tener la responsabilidad de crear cuentas?
// - Como actualizarian el Diagrama de Clases para incluir estos cambios?

// Ejercicios extra:
// - Codear estos ultimos cambios en el diagrama
// - Poner 1 boton mas: crear cuenta
// - Bindear el click del boton para que cree una nueva cuenta utilizando los valores de los inputs y la agregue al cajero (utilizar lo que ya esta codeado)
