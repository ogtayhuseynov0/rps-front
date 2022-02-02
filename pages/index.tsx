import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={"flex flex-col h-screen"}>
      <div className={"h-16 flex justify-around bg-gray-800 text-gray-100 items-center shadow-xl"}>
          <h1 className={'text-4xl'}>Rock Paper Scissors</h1>
      </div>
      <div className={"flex-grow flex"}>
          <div className={'flex-grow'}>

          </div>
          <div className={'w-96 flex flex-col  bg-gray-700 text-gray-100'}>
              <div className={'flex justify-around items-center'}>
                  <h1 className={'text-2xl'}>LeaderBoard</h1>
              </div>
              <div id={'board'} className={'flex flex-grow border-2 rounded-md mx-2 border-gray-500 my-2'}></div>
          </div>
      </div>
    </div>
  )
}

export default Home
