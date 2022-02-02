import {Game, User} from "../../types/Types";

export interface GameState {
	leaderBoard: User[],
	game?: {
		game: Game,
		compChoice: string,
		res:number
	},
	user?: User,
	leaderBoardLoading: boolean
}
