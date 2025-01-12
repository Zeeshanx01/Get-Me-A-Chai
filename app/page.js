
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex justify-center items-center flex-col bg-gray-7000 h-[90vh]">
      <div className="text-white flex justify-center items-center gap-2 text-5xl">Buy me a chai <span><img width={'70px'} src="/tea.gif" alt="" /></span></div>
      <p className="text-center my-4 mx-10">A crowd funding platform for creators. Get funding by your fans and followers</p>

      <div className="flex">

        <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>
        </Link>
        <Link href={"/about"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Read More</span>
          </button>
        </Link>

      </div>
    </div>





    <div className="bg-white opacity-10 h-1">.</div>









    <div className="text-white flex flex-col justify-center items-center py-5 pb-12 container mx-auto">
      <h1 className="text-2xl m-2 text-center py-4 font-bold">Your fans can buy you a chai</h1>

      <div className="flex justify-evenly w-[100%] bg-gray-8000">

        <div className="flex flex-col items-center w-32 h-32 text-center">
          <img className="bg-slate-700 rounded-full p-2" width={"70px"} src="/man.gif" alt="" />
          <p className="m-3 font-bold">Fund yourself</p>
          {/* <p>Your fans are available for you to help you</p> */}
        </div>

        <div className="flex flex-col items-center w-32 h-32 text-center">
          <img className="bg-slate-700 rounded-full p-2" width={"70px"} src="/coin.gif" alt="" />
          <p className="m-3 font-bold">Fund yourself</p>
          {/* <p>Your fans are available for you to help you</p> */}
        </div>

        <div className="flex flex-col items-center w-32 h-32 text-center">
          <img className="bg-slate-700 rounded-full p-2" width={"70px"} src="/group.gif" alt="" />
          <p className="m-3 font-bold">Fans want to help you</p>
          {/* <p>Your fans are available for you to help you</p> */}
        </div>

      </div>
    </div>











    <div className="bg-white opacity-10 h-1">.</div>










    <div className="text-white flex flex-col justify-center items-center py-5 pb-12 container mx-auto">
      <h1 className="text-2xl m-2 text-center py-4 font-bold">Learn more about us</h1>


      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qHQaLs1nypg?si=jXQeO2OLTRUYrTRk&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}




    </div>











  </>
  );
}
