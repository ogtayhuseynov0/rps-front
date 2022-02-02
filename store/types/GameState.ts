import {LeaderType} from "../../types/LeaderType";

export interface GameState {
	leaderBoard: LeaderType[],
	game?: string,
	user?: string
}
