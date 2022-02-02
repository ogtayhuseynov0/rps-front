import React, {useEffect, useState} from "react";
import Circle from "./Circle";
import {Choice} from "../types/Types";
import {useDispatch, useSelector} from "react-redux";
import {createGame, UpdateLeaderBoard} from "../store/reducers/Game/GameFunctions";
import {GameState} from "../store/types/GameState";

function Game() {
	const dispatch = useDispatch()
	const arr  = [1,2,3]
	// @ts-ignore
	const gameState = useSelector<GameState, GameState>(state => state.gameReducer)
	const [userChoice, setUserChoice] = useState<string|null>(null)
	const [count, setCount] = useState<number>(0)
	const [anim, setAnim] = useState<boolean>(false)
	const [serverChoice, setServerChoice] = useState<string|null|undefined>(null)
	const [text, setText] = useState('')
	const [bDisable, setBDisable] = useState(false)
	const countStart = () => {
		if (count!==null)
			if (count + 1==3){
				setCount(0)
			}else{
				setCount(count+1)
			}
	}

	const handleSubmit = () => {
		setAnim(true)
		setBDisable(true)
		setText('')
		setTimeout(() => {
			if (gameState.game){
				dispatch(createGame(gameState.user, userChoice,gameState.game.game.uid))
			}else{
				dispatch(createGame(gameState.user, userChoice,undefined))
			}
		}, 2000)

	}
	useEffect(()=> {
		if (anim){
			setTimeout(countStart, 200)
			setServerChoice(choices[count].type)
		}
	}, [count,anim])
	useEffect(()=> {
		setAnim(false)
		setUserChoice(null)
		setBDisable(false)
		if (gameState.game){
			if (gameState.game.game?.status===0){
				setServerChoice(null)
				setText(gameState.game.game.userPoint>gameState.game.game.computerPoint? 'You won GAME!!! 🎉🎉🎉': 'You lost GAME!!! 😢😢😢😢')
				dispatch({type: 'SET_GAME', payload: undefined})
				dispatch(UpdateLeaderBoard())
			}else{
				setText((gameState.game.res===1? 'You won!!! 🎉🎉🎉' :(gameState.game.res===-1? 'You lost!!! 😢😢😢😢' : 'Draw!!')))
				setServerChoice(gameState.game?.compChoice)
			}
		}

	}, [gameState.game])
	const choices: Choice[] = [{type: 'rock', text: '🤜'},{type: 'paper', text: '✋'},{type: 'scissors', text: '✌️'}]
	return <div className={'flex flex-col p-12 items-center justify-around h-full w-full'}>
			<div className={'flex justify-between items-center w-full'}>
				<div className={'flex flex-col mb-4'}>
					<span className={'text-2xl text-center mb-2 '}>
						You 🤟
					</span>
					<span className={'flex'}>
						{arr.reverse().map(a => <Circle key={a} done={a <= (gameState.game?.game?.userPoint || 0)}/>)}
					</span>
				</div>
				<div className={'flex flex-col mb-4'}>
					<span className={'text-2xl text-center mb-2 '}>
						Computer 💻
					</span>
					<span className={'flex'}>
						{arr.reverse().map(a => <Circle key={a} done={a <= (gameState.game?.game?.computerPoint || 0)}/>)}
					</span>
				</div>
			</div>

			<div id={'server'} className={'flex flex-col flex-grow w-full'}>

				<div className={'flex justify-around mb-2'}>
					{choices.map( a=> {
						return <button key={a.type}
									   className={`w-full mr-2 h-32 w-32 text-5xl px-6 ${serverChoice === a.type? 'bg-indigo-800': 'bg-gray-200'} transition-colors duration-150  rounded-lg `} >
							{a.text}
						</button>
					})}
				</div>
				<div className={'flex-grow flex items-center mx-auto text-3xl'}>
					{text}
				</div>
			</div>

			<div id={'user'} className={'flex flex-col w-full'}>
				<div className={'flex justify-around mb-2'}>
					{choices.map( a=> {
						return <button key={a.type}
									   onClick={() => setUserChoice(a.type)}
							className={`w-full mr-2 h-32 w-32 text-5xl px-6 ${userChoice === a.type? 'bg-indigo-800': 'bg-gray-200'} transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-indigo-800`} >
							{a.text}
						</button>
					})}
				</div>
				<div className={'flex'}>
					<button
						onClick={() => handleSubmit()}
						className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 disabled:bg-gray-400"
						disabled={userChoice===null || bDisable}>
						Submit
					</button>
				</div>
			</div>
	</div>
}
export default Game
