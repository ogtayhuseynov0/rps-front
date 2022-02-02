import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";
import {GameState} from "../store/types/GameState";
import {createUser} from "../store/reducers/Game/GameFunctions";

function LoginModal (){
    // @ts-ignore
    const gameState = useSelector<GameState, GameState>(state => state.gameReducer)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [disableButton,setDisableButton] = useState(false)
    const dispatch = useDispatch()

    const handeLogin = () => {
        if (name.length>0){
            setDisableButton(true)
            dispatch(createUser(name))
        }
    }
    const handeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    useEffect(() => {
        setShowModal(!gameState.user)
    }, [gameState.user])

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Choose a Nickname
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto flex flex-col">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                       You need to choose a Nickname in order to Enter.
                                    </p>
                                    <input type="text" id="nickname"
                                           autoFocus={true}
                                           autoComplete={'off'}
                                           onChange={handeName}
                                           onKeyDown={(e) => {
                                               if (e.key === 'Enter') {
                                                   handeLogin()
                                               }
                                           }}
                                           placeholder={"Nickname"}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            required/>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        disabled={disableButton}
                                        className=" w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handeLogin()}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default LoginModal
