export interface Maquina {
	id: number;
	departamento: number;
	nombre: string;
	materia: string;
	descripcion: string;
	foto: string;
	fecha: Date | undefined;
}

export interface Tension {
	constante: number;
	minima: number;
	maxima: number;
	incremento: number;
}
