import Nav from "../components/nav"

function Travel() {
    const icons =[
        {
            id:1,
            img:"./img/trend.svg",
            text:"Trending"
        },
        {
            id:2,
            img:"./img/beach.svg",
            text:"Beach"
        },
        {
            id:3,
            img:"./img/mountan.svg",
            text:"Mountan"
        },
        {
            id:4,
            img:"./img/snow.svg",
            text:"Snow"
        },
        {
            id:5,
            img:"./img/island.svg",
            text:"Island"
        },
        {
            id:6,
            img:"./img/desert.svg",
            text:"Desert"
        },
        {
            id:7,
            img:"./img/cruise.svg",
            text:"Cruise"
        },
        {
            id:8,
            img:"./img/sport2.svg",
            text:"Sport"
        },
        {
            id:9,
            img:"./img/umrah.svg",
            text:"Umrah"
        },
        {
            id:10,
            img:"./img/couple.svg",
            text:"Honey Moon"
        },
    ]
    const slidercard=[
        {
            id:1,
            img:"./img/travelone.png",
            text:"Bali",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:2,
            img:"./img/traveltwo.png",
            text:"Maldive Island",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:3,
            img:"./img/travelthree.png",
            text:"Santorini",
            span:"$99/night",
            p:"Detailed information about destination",
            
        },
        {
            id:4,
            img:"./img/travelone.png",
            text:"Bali",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:5,
            img:"./img/traveltwo.png",
            text:"Maldive Island",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:6,
            img:"./img/travelthree.png",
            text:"Santorini",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        
        {
            id:7,
            img:"./img/travelone.png",
            text:"Bali",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:8,
            img:"./img/traveltwo.png",
            text:"Maldive Island",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:9,
            img:"./img/travelthree.png",
            text:"Santorini",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:10,
            img:"./img/travelone.png",
            text:"Bali",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:11,
            img:"./img/traveltwo.png",
            text:"Maldive Island",
            span:"$99/night",
            p:"Detailed information about destination"
        },
        {
            id:12,
            img:"./img/travelthree.png",
            text:"Santorini",
            span:"$99/night",
            p:"Detailed information about destination"
        },
    ]
  return (
<>
<main className="font-inter">
        <section className=" h-490 sm:h-screen lg:h-490 bg-cover bg-center" style={{backgroundImage: "url(./img/bg-travel.png)"}}>
            <Nav/>
                <div className="flex  h-2/3 text-white justify-center items-center">
                    <div className="text-center ">
                        <h2 className=" text-3xl sm:text-5xl lg:text-7xl  font-semibold mb-6  px-6">Find your travel destination</h2>
                        <p className="text-base sm:text-lg xl:text-2xl font-normal px-4 xl:px-52 text-gray-lighter md:leading-normal">Choose the destination of the trip you want</p>
                        
                    </div>
                </div>
                <div className="px-4 xl:px-0 hidden md:block">
                    <div className="max-w-screen-xl mx-auto w-full h-16 bg-white rounded-full flex justify-between items-center px-2 sm:px-1 xl:px-1">
                        <div className="flex justify-between items-center w-full md:w-1/3 px-2 mx-2 border-r-2" >
                        <a href="#">
                            <div className="flex justify-between gap-2 ">
                                <img src="./img/Location-travel.svg" alt="location"/>
                            <div>
                                <p className="text-xs font-normal text-gray-textsoft">Going to</p>
                                <span className="text-sm text-gray-dark font-normal">Dubai, UAE</span>
                            </div>
                            </div>
                        </a>
                        <a href="#">
                            <img src="./img/Arrow-Down-travel.svg" alt="arrow"/>
                        </a>
                        </div>
                        <div className="flex justify-between items-center gap-2 w-full md:w-1/3 px-2 mx-2 border-r-2" >
                            <a href="#">
                                <div className="flex justify-between gap-2">
                                    <img src="./img/Calendaredit-travel.svg" alt="calender"/>
                                <div>
                                    <p className="text-xs font-normal text-gray-textsoft">Select Date</p>
                                    <span className="text-sm text-gray-dark font-normal">Mon, Apr 8</span>
                                   </div>
                                </div>
                            </a>
                            <a href="#">
                                <img src="./img/Arrow-Down-travel.svg" alt="arrow"/>
                            </a>
                            </div>
                         <div className="flex justify-between items-center gap-2 w-full md:w-1/3 px-2 mr-3" >
                            <a href="#">
                                <div className="flex justify-between gap-2">
                                    <img src="./img/Profileedit-travel.svg" alt="location"/>
                                   <div>
                                    <p className="text-xs font-normal text-gray-textsoft">Guests</p>
                                    <span className="text-sm text-gray-dark font-normal">2 Adults, 1 Child</span>
                                   </div>
                                </div>
                            </a>
                            <a href="#">
                                <img src="./img/Arrow-Down-travel.svg" alt="arrow"/>
                            </a>
                            </div>
                     <button className=" py-3.5 px-5 bg-red-soft rounded-full text-base md:text-lg xl:text-xl font-semibold text-white ">Search</button>
                    </div>
                </div>
                <div className="flex justify-center gap-4 md:hidden">
                    <button>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
                            <path d="M18.8333 22.1667H20.5V23.8334H18.8333V22.1667ZM30.5 18.0001V29.6667C30.5 30.5834 29.75 31.3334 28.8333 31.3334H17.1667C16.2417 31.3334 15.5 30.5834 15.5 29.6667L15.5083 18.0001C15.5083 17.0834 16.2417 16.3334 17.1667 16.3334H18V14.6667H19.6667V16.3334H26.3333V14.6667H28V16.3334H28.8333C29.75 16.3334 30.5 17.0834 30.5 18.0001ZM17.1667 19.6667H28.8333V18.0001H17.1667V19.6667ZM28.8333 29.6667V21.3334H17.1667V29.6667H28.8333ZM25.5 23.8334H27.1667V22.1667H25.5V23.8334ZM22.1667 23.8334H23.8333V22.1667H22.1667V23.8334Z" fill="#323232"/>
                            </svg>
                    </button>
                    <div className="w-3/5 h-12 bg-white rounded-full flex items-center justify-between px-1">
                        <div className="flex space-x-2 px-2">
                            <button><img className="" src="./img/Search-travel.svg" alt="Search"/></button>
                            <input className="block md:hidden w-20 placeholder:text-xs xl:placeholder:text-xl placeholder:text-gray-dark font-medium" type="text" placeholder="Find location" />
                        </div>
                      <button className="py-2 px-3 bg-red-soft rounded-full text-base md:text-lg xl:text-xl font-medium text-white ">Search</button>
                    </div>
                    <button>
                    <img src="./img/calenderreact.svg" alt="trend"/>
                    </button>
                </div>
        </section>
        <section className="max-w-screen-xl mx-auto  mt-14">
            <div className="flex justify-between w-full px-2 xl:px-0">
                {icons.map((item)=>{
                    return(
                        <>
                            <a href="#">
                                <div className="flex flex-col items-center gap-3">
                                    <img src={item.img} alt="trend"/>
                                    <span className="text-sm font-medium text-purple-dark">{item.text}</span>
                                </div>
                            </a>
                        </>
                    )
                })}
            </div>
            <div>
               
            <div className=" mt-10 px-2 xl:px-0">
               
                <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-range rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                <div className="flex justify-between mt-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400 ">$1000</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ">$100,000</span>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-between px-2 xl:px-0 mt-14 xl:mt-10">
                <p className="text-lg md:text-xl xl:text-2xl font-medium text-black-soft" >Found <span className="text-lg md:text-xl xl:text-2xl font-medium text-blue-500 lg:text-red-soft">376 </span> results for destination</p>
                <button className="py-3 px-4 md:py-4 md:px-6  bg-gray-lighte flex justify-center items-center rounded-full gap-x-2 "><span className=" md:block hidden text-sm md:text-lg font-normal text-gray-dark ">Sorted by</span><span className=" text-sm md:text-lg  font-medium text-black-soft"> Featured</span> <img src="./img/arrow-travel2.svg" alt="arrow"/></button>
            </div>

            <ul className="mt-9 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 lg:gap-8 space-y-6 sm:space-y-0 px-2 lg:px-0">
                {slidercard.map((item)=>{
                    return(
                        <>
                        <a href="#">
                        <li>
                                <img className="w-full" src={item.img} alt="##"/>
                                <div className="shadow-md pt-6 pl-6 pb-5 lg:pb-4 pr-0 lg:pr-8 rounded-b-2xl">
                                    <h5 className="lg:text-3xl md:text-xl text-2xl font-medium mb-2 text-black-soft">{item.text}</h5>
                                    <span className="lg:text-2xl  text-lg font-normal text-red-soft">{item.span}</span>
                                    <p className="lg:text-xl text-base font-normal mt-3 lg:mt-4 text-gray-dark xl:max-w-64">{item.p}</p>
                                </div>
                        </li>
                        </a>

                        </>
                    )
                })}
            </ul>

        </section>
    </main>

</>
  )
}

export default Travel