function generateRandomInt(max) {
	return Math.floor(Math.random() * max);
}

let contador = 25,
	$counter = document.querySelector(".counter"),
	intCursos = 34,
	idRamdon = generateRandomInt(intCursos),
	linkHref,
	templateLinks;

if (document.getElementById("index")) {
	console.log("index")
	if (idRamdon <= 0) {
		idRamdon = 01;
	} else if (idRamdon <= 9) {
		idRamdon = `0${idRamdon}`;
	}
	linkHref = `https://web-free.vercel.app/course/?id=c_${idRamdon}`;
	templateLinks = `
			<a class="link" href="${linkHref}">Curso ramdon</a>
			<a class="linkHome" href="https://web-free.vercel.app/">Todos cursos</a>
	`;
} else {
	let title = document.querySelector("h1");
	linkHref = `https://web-free.vercel.app/course/?id=c_${title.dataset.id}`;

	templateLinks = `
				<a class="link" href="${linkHref}">Ir al curso </a>
	`;

}
document.querySelector(".links").innerHTML= templateLinks;
setInterval(() => {
	$counter.innerHTML = contador;
	contador--
	if (contador <= 0) {
	let $a = document.createElement("a");
	$a.href= linkHref;
	$a.click()
	}
}, 1000)