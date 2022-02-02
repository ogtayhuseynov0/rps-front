import axios from "axios";
import {User} from "../../../types/Types";
export function UpdateLeaderBoard() {
	return function (dispatch: (arg0: any) => void) {
		dispatch({type: 'SET_LOAD', payload: true})
		axios.get(process.env.API + 'user').then(res => {
			dispatch({type: 'BOARD_STATE_CHANGE', payload: res.data})
			dispatch({type: 'SET_LOAD', payload: false})
		})
	}
}

export function createUser(username: string) {
	return function (dispatch: (arg0: any) => void) {
		axios.post(process.env.API + 'user', {userName: username}).then(res => {
			dispatch({type: 'SET_USER', payload: res.data})
			localStorage.setItem('user',JSON.stringify(res.data))
			dispatch(UpdateLeaderBoard())
		})
	}
}
export function updateUser(username: string, uid: string) {
	return function (dispatch: (arg0: any) => void) {
		axios.patch(process.env.API + 'user/'+uid, {userName: username}).then(res => {
			dispatch({type: 'SET_USER', payload: res.data})
			localStorage.setItem('user',JSON.stringify(res.data))
		})
	}
}

export function createGame(user: User|undefined, choice: string|null, gameID: string| undefined) {
	const data= {
		gameID: gameID,
		userChoice: {
			type: choice,
			userID: user?.uid
		}
	}
	return function (dispatch: (arg0: any) => void) {
		axios.post(process.env.API + 'game/choice', data).then(res => {
			console.log('gameData: ', res.data);
			dispatch({type: 'SET_GAME', payload: res.data})
		})
	}
}
