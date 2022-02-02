import axios from "axios";
export function UpdateLeaderBoard() {
	return function (dispatch: (arg0: any) => void) {
		dispatch({type: 'SET_LOAD', payload: true})
		axios.get(process.env.API + 'user').then(res => {
			dispatch({type: 'BOARD_STATE_CHANGE', payload: res.data})
			dispatch({type: 'SET_LOAD', payload: false})
		})
	}
}

