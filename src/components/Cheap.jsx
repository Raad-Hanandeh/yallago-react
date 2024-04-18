

function Cheap() {
    const slider2=[
        {
            id:1,
            img:"./img/cheap1.png",
            p:"Bali",
            span:"$99/night"
        },
        {
            id:2,
            img:"./img/cheap2.png",
            p:"Bali",
            span:"$99/night"
        },
        {
            id:3,
            img:"./img/cheap3.png",
            p:"Bali",
            span:"$99/night"
        },
        {
            id:4,
            img:"./img/cheap4.png",
            p:"Bali",
            span:"$99/night"
        },
    ]
  return (
   <>
    <section className="max-w-screen-xl mx-auto mt-28">
            <div className="text-center lg:text-start">
                <h2 className="text-3xl sm:text-4xl  lg:text-5xl mb-4 md:mb-0  font-semibold  text-black-soft leading-normal sm:leading-normal lg:leading-normal">Cheap travel package<br/>
                    recommendations for you</h2>
                <div className="flex lg:justify-between justify-center items-center px-2 sm:px-2 lg:px-0 ">
                    <p className="text-sm sm:text-lg lg:text-2xl  font-medium sm:font-normal text-gray-dark">Destinations you can travel to now</p>
                    <button className="capitalize text-base lg:text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-14 py-4  text-white hidden lg:flex">explore more</button>
                </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-2 lg:gap-8 mt-10 ">
                {slider2.map((item)=>{
                    return(
                        <>
                        <a href="#">
                            <li className=" w-44 sm:w-40 lg:w-60 xl:w-72  h-56 lg:h-80 xl:h-96 bg-cover flex flex-col justify-end text-start rounded-2xl" style={{backgroundImage:`url(${item.img})` }}>
                                <div className=" flex flex-col ml-3.5 pb-3 lg:ml-6 lg:pb-5">
                                    <span className="text-lg font-medium lg:text-3xl md:font-semibold  text-white mb-2">{item.p}</span>
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

export default Cheap