

function CheapDetails() {
    const Cheapdetails =[
        {
            id:1,
            img:"./img/cheap1.png",
            text:"Bali",
            span:"$99/night"
        },
        {
            id:2,
            img:"./img/cheap2.png",
            text:"Bali",
            span:"$99/night"
        },
        {
            id:3,
            img:"./img/cheap3.png",
            text:"Bali",
            span:"$99/night"
        },
        {
            id:4,
            img:"./img/cheap4.png",
            text:"Bali",
            span:"$99/night"
        },
    ]
  return (
    <>
      <section className="max-w-screen-xl mx-auto mt-20">
            <div className="text-center sm:text-start sm:px-4 lg:px-0 ">
                <h2 className="text-3xl  xl:text-5xl mb-4 md:mb-0  font-semibold  text-black-soft leading-normal sm:leading-normal xl:leading-normal">Related travel packages<br/> for you</h2>
                <div className="flex sm:justify-between justify-center items-center ">
                    <p className="text-sm sm:text-lg xl:text-2xl  font-medium sm:font-normal text-gray-dark">Destinations you can travel to now</p>
                    <div className="hidden sm:flex space-x-4">
                        <button className="w-14 h-14 rounded-full bg-white border border-gray-lighter flex justify-center items-center "><img src="./img/arrow-left.svg" alt="arrow"/></button>
                        <button className="w-14 h-14 rounded-full bg-red-soft flex justify-center items-center "><img src="./img/arrow-right.svg" alt="arrow"/></button>
                    </div>
                </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-2 lg:gap-8 mt-10 ">
                {Cheapdetails.map((item)=>{
                    return(
                        <>
                        <a href="#">
                        <li className=" w-44  lg:w-60 xl:w-72  h-56 lg:h-80 xl:h-96 bg-cover flex flex-col justify-end text-start rounded-2xl" style={{backgroundImage: `url(${item.img})`}}>
                        <div className=" flex flex-col ml-3.5 pb-3 lg:ml-6 lg:pb-5">
                                <span className="text-lg font-medium lg:text-2xl md:font-semibold  text-white mb-2">{item.text}</span>
                                <span className="text-xs lg:text-2xl font-normal text-white">{item.span}</span>
                        </div>
                        </li>
                        </a>
                        </>
                    )
                })}
            </ul>
            <div className=" block sm:hidden text-center mt-16">
                <button className="capitalize text-xl font-medium rounded-full bg-red-soft  px-14 py-4  text-white ">explore more</button>
            </div>
        </section>
    </>
  )
}

export default CheapDetails