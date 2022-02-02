export interface User {
	id: number;
	uid: string;
	score: number;
	userName?: string;
	created_at?: Date;
	updated_at?: Date;
}
export interface Choice {
	text: string,
	type: string
}
export interface Game {
	id: number;
	uid: string;
	userPoint: number;
	computerPoint: number;
	user: string;
	status: number;
	created_at: Date;
	updated_at: Date;
}
