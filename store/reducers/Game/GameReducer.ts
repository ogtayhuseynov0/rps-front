import {AnyAction} from "redux";
import {GameState} from "../../types/GameState";
import axios from "axios";
let localUser = undefined
if (typeof window !== 'undefined') {
	localUser = localStorage.getItem('user')
}
const user = localUser?JSON.parse(localUser): undefined
const defGlobalGame :GameState={leaderBoard: [], user: user, leaderBoardLoading: false}
export const gameReducer = (state: GameState = defGlobalGame, action: AnyAction) => {
	switch (action.type) {
		case  'BOARD_STATE_CHANGE':
			return {...state, leaderBoard: [...action.payload]}
		case  'SET_USER':
			return {...state, user: {...action.payload}}
		case  'SET_GAME':
			return {...state, game: action.payload}
		case  'SET_LOAD':
			return {...state, leaderBoardLoading: action.payload}
		default:
			return state;
	}
};
