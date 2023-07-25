"use client"
import { useState } from "react";
import StreakButtons from "./StreakButtons";

const StreakCards = ({streak}) => {
    const [currentStatus, setCurrentStatus] = useState(true)

    const CallBack = (status) => {
        setCurrentStatus(status)

    }

    return ( 
        <div className="flex-col flex gap-5 text-white bg-gray-700 py-5 px-4 justify-between rounded-2xl shadow-2xl shadow-blue-300 hover:shadow-blue-500" key={streak.id}>
            {
                currentStatus && 
                <>
                    <div className="w-full flex justify-center items-center h-0">
                        <div className=" w-15 rounded-full bg-blue-600 flex justify-center items-center shadow-black shadow-2xl">
                            <p className="text-white w-fit py-4  px-6 text-xl font-bold">
                                {streak.streak}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-end">
                        <svg className="w-5 stroke-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-semibold text-white">{streak.title}</h3>
                    <p>{streak.description}</p>
                    
                    
                    <StreakButtons streakData={streak} handleCallBack={() => CallBack()} />
                </>
                
            }
        
        {
            !currentStatus &&
            <>
                <div className="w-full flex justify-center items-center h-0">
                    <div className=" w-15 rounded-full bg-blue-600 flex justify-center items-center shadow-black shadow-2xl">
                        <p className="text-white w-fit py-4  px-6 text-xl font-bold">
                            {streak.streak}
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-end">
                    <svg className="w-5 stroke-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                    </svg>
                </div>
                
                <p className="text-white font-bold text-2xl">Congratulations! <span className="font-semibold text-base ">{streak.title} Completed</span></p>
                <p className="text-base">Don't forget about tommorow. Your streak will refresh at midnight</p>
                <Link href={"/stats"} className="px-4 py-2 text-white text-sm font-semibold rounded-2xl bg-blue-600 hover:animate-pulse hover:shadow-inner hover:shadow-blue-500 ">View Stats</Link>
                
            </>
        }
        </div>
    
    );
}
 
export default StreakCards;