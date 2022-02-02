import React, {useEffect, useState} from "react";
import Circle from "./Circle";
import {Choice} from "../types/Types";

function Game() {
	const arr  = [1,2,3]
	const [userChoice, setUserChoice] = useState<string|null>(null)
	const [count, setCount] = useState<number>(0)
	const [anim, setAnim] = useState<boolean>(false)
	const [serverChoice, setServerChoice] = useState<string|null>(null)
	const countStart = () => {
		if (count!==null)
			if (count + 1==3){
				setCount(0)
			}else{
				setCount(count+1)
			}
	}

	const handleSubmit = () => {
		console.log('handleSubmit');
		setAnim(true)
		setTimeout(() => {
			setAnim(false)
			setServerChoice(null)
			setUserChoice(null)
		}, 2000)

	}
	useEffect(()=> {
		if (anim){
			setTimeout(countStart, 200)
			setServerChoice(choices[count].type)
		}
	}, [count,anim])
	const choices: Choice[] = [{type: 'rock', text: '🤜'},{type: 'paper', text: '✋'},{type: 'scissor', text: '✌️'}]
	return <div className={'flex flex-col p-12 items-center justify-around h-full w-full'}>
			<div className={'flex justify-between items-center w-full'}>
				<div className={'flex flex-col mb-4'}>
					<span className={'text-2xl text-center mb-2 '}>
						You 🤟
					</span>
					<span className={'flex'}>
						{arr.reverse().map(a => <Circle key={a} done={a<=0}></Circle>)}
					</span>
				</div>
				<div className={'flex flex-col mb-4'}>
					<span className={'text-2xl text-center mb-2 '}>
						Computer 💻
					</span>
					<span className={'flex'}>
						{arr.reverse().map(a => <Circle key={a} done={a<=0}></Circle>)}
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
						className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 disabled:bg-gray-400" disabled={userChoice===null}>
						Submit
					</button>
				</div>
			</div>
	</div>
}
export default Game
