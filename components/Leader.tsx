import React from "react";
import {User} from "../types/Types";
function Leader({Leader, place}: {Leader: User, place:number}) {
	return <dd className="mt-1 text-sm text-gray-900  mx-2 bg-white rounded-md">
		<ul role="list" className="border border-gray-300 rounded-md divide-y divide-gray-200">
			<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
				<div className="w-0 flex-1 flex items-center">
					<span className={'font-bold'}>{place}.</span>
                    <span className="ml-2 flex-1 w-0 truncate">
					  {Leader.uid}
					</span>
				</div>
				<div className="ml-4 flex-shrink-0">
					<button className="font-medium text-indigo-600 hover:text-indigo-500">
						{Leader.score}
					</button>
				</div>
			</li>
		</ul>
	</dd>
}
export default Leader
