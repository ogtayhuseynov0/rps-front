import React from "react";
import Loader from "./Loader";
import Leader from "./Leader";
import {User} from "../types/Types";
import {useDispatch, useSelector} from "react-redux";
import {GameState} from "../store/types/GameState";
import {UpdateLeaderBoard} from "../store/reducers/Game/GameFunctions";
function LeaderBoard() {
	const dispatch = useDispatch()

	// @ts-ignore
	const gameState = useSelector<GameState, GameState>(state => state.gameReducer)
	return <div className={'flex flex-col  '}>
		<div className={'flex justify-between px-5 items-center font-bold mt-2'}>
			<h1 className={'text-2xl'}>LeaderBoard</h1>
			<button
				disabled={gameState.leaderBoardLoading}
				onClick={() => dispatch(UpdateLeaderBoard())}
				className="bg-gray-300 hover:bg-gray-400 flex justify-around text-gray-darkest font-bold py-2 px-2 rounded inline-flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
					 stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
				</svg>
			</button>
		</div>
		{gameState.leaderBoardLoading && <Loader/>}
		{!gameState.leaderBoardLoading && <div id={'board'} className={'flex flex-col flex-grow mx-2 my-2'}>
			{gameState.leaderBoard.map((a,i) => (<Leader key={a.id} Leader={a} place={i+1}/>))}
        </div>}

	</div>

}
export default LeaderBoard
