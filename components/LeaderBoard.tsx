import React from "react";
import Loader from "./Loader";
import Leader from "./Leader";
import {User} from "../types/Types";
function LeaderBoard() {
	const leaders : User[]= [
		{id: 1, score: 22, uid: '221d1-d1-d1-d1-d'}
	]

	return <div className={'flex flex-col  '}>
		<div className={'flex justify-around items-center font-bold'}>
			<h1 className={'text-2xl'}>LeaderBoard</h1>
		</div>
		{leaders.length==0 && <Loader/>}
		<div id={'board'} className={'flex flex-col flex-grow mx-2 my-2'}>
			{leaders.map((a,i) => (<Leader key={a.id} Leader={a} place={i+1}/>))}
		</div>
	</div>

}
export default LeaderBoard
