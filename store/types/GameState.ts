import {Game, User} from "../../types/Types";

export interface GameState {
	leaderBoard: User[],
	game?: Game,
	user?: User,
	leaderBoardLoading: boolean
}
