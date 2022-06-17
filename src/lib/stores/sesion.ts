import { writable } from 'svelte/store';
import { browser } from '$app/env';

interface Sesion {
	nombreDeUsuario: string;
	token: string;
}

function loginDesdeLocalStorage(): Sesion | undefined {
	if (!browser) return;
	const sesion = localStorage.getItem('sesion');
	if (sesion !== null) return JSON.parse(sesion);
}

const sesion = writable<Sesion | undefined>(loginDesdeLocalStorage());

export { sesion };
