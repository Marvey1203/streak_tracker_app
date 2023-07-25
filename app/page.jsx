import StreakButton from "./comps/StreakButtons"
import StreakCards from "./comps/StreakCards"

async function GetData() {
  const res = await fetch("http://localhost:3000/api/post", { cache: 'no-store'})
  if(!res.ok){
      throw new Error("failed to fetch data")
  } 
  return res.json()
  
}



export default async function Home() {

  const streaks = await GetData()
  
  
  

  return (
    
    <>
    <h3 className="text-4xl font-bold text-black pb-10">Streak List</h3>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

      {streaks.map(streak => {
        return (
          <StreakCards key={streak.id} streak={streak} />
          
            
          
        )
      })}

    </div>
    </>

  )
}
