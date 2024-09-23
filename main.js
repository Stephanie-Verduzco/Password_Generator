let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let cleanBoton = document.getElementById('limpiar');
let mensajeValidacion = document.getElementById('mensajeValidacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }

    contraseña.value = password;
    validacion(password);

}

function limpiar() {
    
    cantidad.value = '';
    contraseña.value = '';
    mensajeValidacion.textContent = '';
    mensajeValidacion.style.backgroundColor = '';
}

function validacion(contraseña) {

    const siTieneMayusculas = /[A-Z]/.test(contraseña);
    const siTieneMinusculas = /[a-z]/.test(contraseña);
    const siTieneNumeros = /[0-9]/.test(contraseña);
    const siTieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contraseña);

    
    if (!siTieneMayusculas || !siTieneMinusculas || !siTieneNumeros || !siTieneCaracteresEspeciales) {

        mensajeValidacion.textContent = "La contraseña no es segura.";
        mensajeValidacion.style.backgroundColor = "red";
    } 
    else {
        mensajeValidacion.textContent = "La contraseña es segura.";
        mensajeValidacion.style.backgroundColor = "green";
    }
}

function copiar() {
    const copiarContraseña = contraseña.value;

    navigator.clipboard.writeText(copiarContraseña).then(() => {
        alert('Contraseña copiada al portapapeles.')
    });
}