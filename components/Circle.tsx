import React from "react";

function Circle({done}:{done:boolean}) {
	return (<div>{!done && <div className={'h-8 w-8 ml-2 rounded-full border-4 border-red-400 bg-green'}></div>}
			{done && <div className={'h-8 w-8 ml-2 rounded-full border-4 border-green-300 bg-green-500'}></div>}</div>)
}
export default Circle
