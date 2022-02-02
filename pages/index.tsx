import type { NextPage } from 'next'
import LeaderBoard from "../components/LeaderBoard";
import Game from "../components/Game";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {UpdateLeaderBoard} from "../store/reducers/Game/GameFunctions";

const Home: NextPage = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(UpdateLeaderBoard())
    }, [])
  return (
    <div className={"flex flex-col h-screen"}>
      <div className={"h-16 flex justify-around bg-gray-800 text-gray-100 items-center shadow-xl"}>
          <h1 className={'text-4xl'}>Rock Paper Scissors</h1>
      </div>
      <div className={"flex-grow flex"}>
          <div className={'flex-grow '}>
              <Game/>
          </div>
          <div className={'w-96 bg-gray-200 text-gray-900'}>
              <LeaderBoard/>
          </div>
      </div>
    </div>
  )
}

export default Home
