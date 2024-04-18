import Nav from '../components/nav'

export default function AboutUs() {
    const slideOur =[
        {
            id:1,
            img:"./img/bg-our.png"
        },
        {
            id:2,
            img:"./img/bg-our-one.png"
        },
    ]
    const slideValues=[
        {
            id:1,
            img:"./img/values.png"
        },
        {
            id:2,
            img:"./img/values-res.png"
        },
        {
            id:3,
            img:"./img/values-tow.png"
        },
    ]
    const slideTeam =[
        {
            id:1,
            img:"./img/team.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:2,
            img:"./img/team-one.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:3,
            img:"./img/team-tow.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:4,
            img:"./img/team-three.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:5,
            img:"./img/team.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:6,
            img:"./img/team-one.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:7,
            img:"./img/team-tow.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
        {
            id:8,
            img:"./img/team-three.png",
            text:"James Sullivan",
            span:"President & CEO"
        },
    ]
    const slidePartners = [
        {
            id:1,
            img:"./img/hello-design.svg"
        },
        {
            id:2,
            img:"./img/huobi.svg"
        },
        {
            id:3,
            img:"./img/cambrex.svg"
        },
    
        {
            id:4,
            img:"./img/blockchain-academy.svg"
        },
        {
            id:5,
            img:"./img/chase.svg"
        },
        {
            id:6,
            img:"./img/binance-edit.svg"
        },
        {
            id:7,
            img:"./img/cambrex.svg"
        },
        {
            id:8,
            img:"./img/blockchain-academy.svg"
        },
        {
            id:9,
            img:"./img/chase.svg"
        },
        {
            id:10,
            img:"./img/binance-edit.svg"
        },
        {
            id:11,
            img:"./img/hello-design.svg"
        },
        {
            id:12,
            img:"./img/huobi.svg"
        },
    
    ]
  return (
    <>
     <main className='font-inter'>
        <section className="bg-cover no-repeats h-600 sm:h-screen lg:h-600 bg-center " style={{backgroundImage: "url(./img/bg-about.png)"}}>
         <Nav />
            <div className="flex h-551  text-white justify-center items-center">
                <div className="text-center ">
                    <h2 className=" text-3xl sm:text-5xl lg:text-7xl  font-semibold mb-6  px-6">History Of Yallabook</h2>
                    <p className="text-base sm:text-lg xl:text-2xl font-normal px-4 xl:px-52  text-gray-lighter md:leading-normal">Yallabook is cultural authenticity meets modernity; where the sand meets the sea; where people gather to experience unique offerings in culture, sports, business and family entertainment.</p>
                    
                </div>
            </div>
        </section>
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-28">
            <div className="text-center">
                <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-6 text-black-soft">Our Story</h2>
                <p className="lg:text-xl sm:text-lg text-base font-normal px-4 xl:px-32 text-gray-dark ">modern and elegant designs make customers love our products, so that we become number 1 in furniture modern and elegant designs make customers love our products, so that we become number 1 in furnituremodern and elegant designs make customers love our products, so that we become number 1 in furniture....</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 px-2 lg:px-0">
                {slideOur.map((item)=>{
                    return(
                        <>
                    <li key={item.id}>
                        <img className="w-full h-auto" src={item.img} alt="#"/>
                    </li>
                        </>
                    )
                })}
            </ul>
        </section>
        <section className="max-w-screen-xl mx-auto mt-20">
            <div className="text-center">
                <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-6 text-black-soft">Our Values</h2>
                <p className="lg:text-xl sm:text-lg text-base font-normal px-4 xl:px-32 text-gray-dark">modern and elegant designs make customers love our products, so that we become number 1 in furniture modern and elegant designs make customers love our products, so that we become number 1 in furnituremodern and elegant designs make customers love our products, so that we become number 1 in furniture....</p>
            </div>
            <ul className="grid grid-cols-1  sm:grid-cols-3 gap-4 lg:gap-6 mt-16 px-2 lg:px-0">
                {slideValues.map((item)=>{
                    return(
                        <>
                        <li>
                            <img className="w-full " src={item.img} alt="values"/>
                        </li>
                        </>
                    )
                })}
            </ul>

        </section>
        <section className="max-w-screen-xl mx-auto mt-20">
            <div className="text-center">
                <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-6 text-black-soft">Our Team</h2>
                <p className="lg:text-xl sm:text-lg text-base font-normal px-4 xl:px-32 text-gray-dark">modern and elegant designs make customers love our products, so that we become number 1 in furniture modern and elegant designs make customers love our products, so that we become number 1 in furnituremodern and elegant designs make customers love our products, so that we become number 1 in furniture....</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-8 mt-16 px-2 sm:px-0">
                {slideTeam.map((item)=>{
                    return(
                        <>
                        <a href="#">
                        <li className=" w-40 lg:w-52 xl:w-72  h-48 sm:h-52 lg:h-60  xl:h-96 bg-cover flex flex-col justify-end  rounded-2xl shadow-gray-950 bg-gray-light " style={{backgroundImage: `url(${item.img})`}}>
                            <div className="pb-4 ps-4">
                                <p className="text-lg font-medium lg:text-2xl md:font-semibold mb-1  text-white ">{item.text}</p>
                                <span className="text-base font-medium lg:text-lg md:font-semibold  text-white">{item.span}</span>
                            </div>
                        </li>
                        </a>
                        </>
                    )
                })}
            </ul>
        </section>
        <section className="mt-20">
            <div className="text-center max-w-screen-xl mx-auto">
                <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-6 text-black-soft">Our Partners</h2>
                <p className="lg:text-xl sm:text-lg text-base font-normal px-4 xl:px-32 text-gray-dark">Trusted by 100+ popular brands</p>
            </div>
            <div className="grid grid-cols-6 place-items-center  mt-12 xl:mt-14">
                {slidePartners.map((item)=>{
                    return(
                        <>
                        <img  src={item.img} alt="img-partnar"/>
                        </>
                    )
                })}
            </div>
        </section>
    </main>
    </>
    )
}

