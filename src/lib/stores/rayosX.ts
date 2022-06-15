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
}

const practicaRayosX = writable({
	corriente: undefined,
	tiempo: undefined,
	tension_arranque: undefined,
	angulo_arranque: undefined,
	tension_parada: undefined,
	tension_incremento: undefined,
	angulo_parada: undefined,
	angulo_incremento: undefined
});

function verificarPractica(practica: PracticaRayosX): boolean {
	let verificacion = true;
	for (const [elemento, valor] of Object.entries(practica)) {
		verificacion =
			verificacion &&
			(elemento === 'tension_parada' || elemento === 'tension_incremento' || valor !== undefined);
	}
	return verificacion;
}

export { practicaRayosX, verificarPractica };
