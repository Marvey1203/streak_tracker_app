import Link from "next/link";

const Navbar = () => {

    const navItems = [
        {
            name: "streak",
            url: "/"
        },
        {
            name: "stats",
            url: "/stats"
        },

    ]

    return ( 
        <nav className="w-full flex flex-row py-10">
            <div className="w-1/2 justify-start items-center ">
                <div className="py-3 px-5 bg-gray-700 rounded-2xl flex justify-center items-center w-fit">
                    <h2 className="text-4xl font-bold text-white w-fit">StreakTracker</h2>
                </div>
            </div>
            <div className="w-1/2 flex flex-row gap-5 justify-end items-center">
            {
                navItems.map((item, index) => {
                    return(
                        <Link className="text-lg font-semibold capitalize" href={item.url} key={index} > {item.name} </Link>
                    )
                })
            }
            </div>
        </nav>
     );
}
 
export default Navbar;