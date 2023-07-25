"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StreakButton = ({streakData, handleCallBack}) => {
    const [patchInput, setPatchInput] = useState(streakData)
    let status = true
        
    const router = useRouter()
    function handleIncreaseStreak(e) {       
        e.preventDefault()
        setPatchInput(patchInput)        
        for( let [key, value] of Object.entries(patchInput)){
            if(key === "streak"){
                patchInput.streak = value + 1
            }
            
            }
            setPatchInput(patchInput)                 
        
        axios.patch("http://localhost:3000/api/post/" + streakData.id, patchInput).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            status = false
            handleCallBack(status)
            router.refresh();
        });
    }
    function handleIncomplete(e) {
        e.preventDefault()
        setPatchInput(patchInput)        
        for( let [key, value] of Object.entries(patchInput)){
            if(key === "streak"){
                patchInput.streak = value * 0
            }
            
            }
            setPatchInput(patchInput)                 
        
        axios.patch("http://localhost:3000/api/post/" + streakData.id, patchInput).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            router.refresh();
        });
    }

    return ( 
        <div className="w-full flex flex-row gap-5 pb-3 lg:flex-col">
                <button className="px-4 py-2 text-white text-sm font-semibold rounded-2xl bg-blue-600 hover:animate-pulse hover:shadow-inner hover:shadow-blue-500 " onClick={handleIncreaseStreak}>Completed</button>
                <button className="px-4 py-2 text-white text-sm font-semibold rounded-2xl bg-red-600 hover:animate-pulse hover:shadow-inner hover:shadow-red-500 " onClick={handleIncomplete}>Incompleted</button>
            </div>
            
        
     );
}
 
export default StreakButton;