import {AnyAction} from "redux";
import {GameState} from "../../types/GameState";
const defGlobalGame :GameState={leaderBoard: []}
export const gameReducer = (state: GameState = defGlobalGame, action: AnyAction) => {
	switch (action.type) {
		case  'BOARD_STATE_CHANGE':
			return {...state, leaderBoard: [...action.payload]}
		default:
			return state;
	}
};
