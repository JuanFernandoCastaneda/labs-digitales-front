import { writable } from 'svelte/store';

interface PracticaRayosX {
	corriente: number | undefined;
	tiempo: number | undefined;
	tension_arranque: number | undefined;
	angulo_arranque: number | undefined;
	tension_parada: number | undefined;
	tension_incremento: number | undefined;
	angulo_parada: number | undefined;
	angulo_incremento: number | undefined;
	tension_constante: boolean;
}

const practicaRayosX = writable<PracticaRayosX>({
	corriente: undefined,
	tiempo: undefined,
	tension_arranque: undefined,
	angulo_arranque: undefined,
	tension_parada: undefined,
	tension_incremento: undefined,
	angulo_parada: undefined,
	angulo_incremento: undefined,
	tension_constante: true
});

function verificarPractica(practica: PracticaRayosX): boolean {
	if (practica.tension_constante) {
		practica.tension_incremento = undefined;
		practica.tension_parada = undefined;
	}
	let verificacion = true;
	for (const [elemento, valor] of Object.entries(practica)) {
		verificacion =
			verificacion &&
			(elemento === 'tension_parada' ||
				elemento === 'tension_incremento' ||
				(valor !== undefined && valor !== null));
	}
	return verificacion;
}

export { practicaRayosX, verificarPractica };
