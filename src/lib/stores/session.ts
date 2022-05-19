import { writable } from 'svelte/store';
import { browser } from '$app/env';

interface Session {
	username: string;
	token: string;
}

function loginFromLocalStorage(): Session | undefined {
	if (!browser) return;
	const session = localStorage.getItem('session');
	if (session !== null) return JSON.parse(session);
}

const session = writable(loginFromLocalStorage());

export { session };
