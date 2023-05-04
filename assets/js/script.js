// 1.- obtenemos los botones por clases 
let btnSuccess = document.querySelector(".btn-success")
let btnDanger = document.querySelector(".btn-danger")
// 2.- interval = setInterval(loadTimer, 1000) 
let counter = 0
let interval

// 5.- cargamos el intervalo de tiempo en pantalla
function loadTimer () {
	document.getElementById("here").innerHTML = counter

	// el counter tiene el tiempo del input y restamos en 1
	counter--
	if (counter < 0) {
		clearInterval(interval)
		// cargamos un audio guardado en la carpeta assets/audio
		emitSound()
	}
}

// 4.- guardamos el timer
function timer () {
	// function - el tiempo en milisegundos 1000 => 1 segundo
	// el segundo no hay que alterarlo Ex: 1000 + 2 : Erros
	interval = setInterval(loadTimer, 1000)
}

// 8.- detenemos el tiempo
function cancelInterval () {
	clearInterval(interval)
}

// 3.- cargar el boton e imprimir por pantalla
btnSuccess.addEventListener("click", (e) => {
	e.preventDefault()
	// h2 id="seconds"
	let seconds = document.getElementById("seconds").value
	// guardar en counter el valor dado en el input
	counter = seconds
	timer()
})

// 6.- cargamos el audio
function emitSound () {
	let sound = new Audio("./assets/audio/zelda-navi-listen.mp3")
	sound.play()
}

// 7.- creamos el boton cancelar timer
btnDanger.addEventListener("click", (e) => {
	e.preventDefault()
	// limpiamos el h2
	document.getElementById("here").innerHTML = '00'
	// limpiamos el input
	document.getElementById("seconds").value = ""
	// cancelamos el interval
	cancelInterval()
})

document.getElementById("start").addEventListener("click", (e) => {
	e.preventDefault()
	let secondsStart = parseInt(document.getElementById("seconds").value)
	let output = document.getElementById("here")
	function timer () {
		output.innerHTML = ("0" + secondsStart).slice(-2); secondsStart -= 1
		if (secondsStart >= 0) {
			setTimeout(timer, 1000)
		}
	}
	timer()
})