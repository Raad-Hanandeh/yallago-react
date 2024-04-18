
import Nav from "../components/nav"
import Cheap from '../components/Cheap'
import Discount from '../components/Discount'

function Packages() {
  const sliderTravel = [
    {
      id:1,
      img:"./img/img-one.png",
      span:"Couples"
    },
    {
      id:2,
      img:"./img/img-tow.png",
      span:"Cultural Heritage"
    },
    {
      id:3,
      img:"./img/img-three.png",
      span:"Family"
    },
    {
      id:4,
      img:"./img/img-four.png",
      span:"Sunseeker"
    },
  ]

  const sliderMost=[
    {
      id:1,
      img:"./img/R.png",
      text:"$99/night",
      span:"Bali",
      p:"Detailed information about destination",
    },
    {
      id:2,
      img:"./img/Rectangle2.png",
      text:"$99/night",
      span:"Maldive Island",
      p:"Detailed information about destination",
    },
    {
      id:3,
      img:"./img/rectangle3.png",
      text:"$99/night",
      span:"Santorini",
      p:"Detailed information about destination",
    },
   
  ]
  const sliderCompare =[
    {
      id:1,
      img:"./img/compare-1.png",
      text:"Flights to",
      span:"Dubai"
    },
    {
      id:2,
      img:"./img/compare-2.png",
      text:"Flights to",
      span:"Greece"
    },
    {
      id:3,
      img:"./img/compare-3.png",
      text:"Flights to",
      span:"Bali"
    },
    {
      id:4,
      img:"./img/compare-4.png",
      text:"Flights to",
      span:"Portugal"
    },
  ]
  return (
    <>
     <main className="font-inter">
        <section className="bg-cover h-svh sm:h-screen bg-bottom" style={{backgroundImage: "url(./img/bagir-bahana.png)"}}>
          <Nav />
            <div className="text-white h-svh sm:h-screen flex items-center sm:items-start lg:items-center max-w-screen-xl mx-auto mt-0 sm:mt-6 lg:mt-0">
                <div className="px-4 sm:px-8 w-11/12 md:w-7/12 lg:w-7/12 ">
                    <h2 className="text-3xl  md:text-4xl xl:text-7xl font-semibold mb-8 sm:mb-3 lg:mb-8  ">Find the tour package you want</h2>
                    <p className="text-base md:text-lg lg:text-2xl font-normal text-gray-lighter ">Explore further into a citys sights, culture, and experiences with a captivating</p>
                    <button className=" rounded-full bg-red-soft px-10 py-3.5 capitalize text-base md:text-xl font-medium mt-14  mb-36 sm:my-10 xl:mt-14 xl:mb-14" type="button">explore more</button>
                    <p className="text-sm sm:text-xs xl:text-lg font-normal text-gray-lighter ">Padar Island, located in eastern Indonesia. Exotic, thats the comment of many people who have ever set foot on the island. </p>
                
                </div>
            </div>
        </section>
        <section className="max-w-screen-xl mx-auto mt-12">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl  lg:text-5xl  font-semibold mb-4 text-black-soft">Find your travel style</h2>
                <p className="text-sm sm:text-lg lg:text-2xl  font-medium sm:font-normal text-gray-dark">You can travel according to your style</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-2 lg:gap-8 mt-12 ">
              {sliderTravel.map((item)=>{
                return(
                  <>
                  <a href="#">
                    <li key={item.id} className=" w-44 sm:w-40 lg:w-48 xl:w-72  h-48 lg:h-60 xl:h-80  bg-cover flex flex-col justify-end text-center rounded-2xl"  style={{backgroundImage: `url(${item.img})`}}>
                        <div className="pb-6">
                            <span className="text-lg md:text-xl  lg:text-3xl font-medium md:font-semibold  text-white">{item.span}</span>
                        </div>
    
                    </li>
                </a>
                  </>
                )
              })}
               
            </ul>
        </section>
        <section className="max-w-screen-xl mx-auto mt-28">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl  lg:text-5xl  font-semibold mb-4 text-black-soft">Most popular destination</h2>
                <p className="text-sm sm:text-lg lg:text-2xl  font-medium sm:font-normal text-gray-dark">Destinations you can travel to now</p>
            </div>
            <div className="flex justify-center gap-4 mt-12">
                <button className="py-3.5 px-10 bg-red-soft rounded-full text-base sm:text-lg lg:text-xl font-medium text-white ">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark hidden sm:block">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark hidden md:block">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark hidden lg:block">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark hidden xl:block">Popular</button>
                <button className="py-3.5 px-10 bg-gray-lighte rounded-full text-base sm:text-lg lg:text-xl font-medium text-gray-dark hidden xl:block">Popular</button>
            </div>
            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 lg:gap-8 space-y-6 sm:space-y-0 px-2 lg:px-0">
              {sliderMost.map((item)=>{
                return(
                  <>
                  <a href="#">
                  <li>
                      <img className="w-full" src={item.img} alt="##"/>
                      <div className="shadow-md pt-6 pl-6 pb-4 pr-0 lg:pr-8 rounded-b-2xl">
                          <h5 className="lg:text-3xl md:text-xl text-2xl font-medium mb-2 text-black-soft">{item.span}</h5>
                          <span className="lg:text-2xl  text-lg font-normal text-red-soft">{item.text}</span>
                          <p className="lg:text-xl text-base font-normal mt-4 text-gray-dark ">{item.p}</p>
                      </div>
                  </li>
                </a>
                  </>
                )
              })}
            </ul>
            <div className=" text-center mt-14">
                <button className="capitalize text-base lg:text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-14 py-4  text-white ">view more</button>
            </div>
        </section>
        <Cheap />
        <Discount />
        <section className="max-w-screen-xl mx-auto mt-28">
                <div className="flex lg:justify-between justify-center items-center px-2 sm:px-2 lg:px-0 mt-14 text-center lg:text-start ">
                    <h2 className="text-3xl sm:text-4xl  lg:text-5xl mb-4 md:mb-0  font-semibold  text-black-soft lg:px-0">Find and compare cheap flights</h2>
                    <button className="capitalize text-base lg:text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-14 py-4  text-white hidden lg:flex">explore more</button>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-2 lg:gap-8 mt-11 ">
                  {sliderCompare.map((item)=>{
                    return(
                    <>
                      <a href="#">
                        <li className=" w-44 sm:w-40 lg:w-60 xl:w-72  h-56 lg:h-72 xl:h-96 bg-cover flex flex-col justify-end text-start rounded-2xl" style={{backgroundImage: `url(${item.img})`}}>
                            <div className=" flex flex-col ml-3.5 pb-3 lg:ml-6 lg:pb-5">
                                <span className="text-xs lg:text-2xl font-normal text-white mb-3">{item.text}</span>
                                <span className="text-lg font-medium lg:text-3xl md:font-semibold  text-white ">{item.span}</span>
                            </div>
                        </li>
                      </a>
                    </> 
                    )
                  })}
                </ul>
                <div className=" block sm:hidden text-center mt-8">
                    <button className="capitalize text-xl font-medium rounded-full bg-red-soft  px-14 py-4  text-white ">explore more</button>
                </div>
        </section>
    </main>
    </>
  )
}

export default Packages