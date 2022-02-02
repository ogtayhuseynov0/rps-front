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
