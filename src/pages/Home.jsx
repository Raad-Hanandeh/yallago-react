import Nav from '../components/nav'
import Cheap from '../components/Cheap'
import Discount from '../components/Discount'




function Home(){

    const slider =[
        {
            id:1,
            img:"./img/jaapan1.png",
            text:"Seigantoji Temple",
            span:"Wakayama, Japan"
        },
        {
            id:2,
            img:"./img/japann2.png",
            text:"Seigantoji Temple",
            span:"Wakayama, Japan"
        },
        {
            id:3,
            img:"./img/japann3.png",
            text:"Seigantoji Temple",
            span:"Wakayama, Japan"
        },
    ]
    const sliderTravel = [
        {
            id:1,
            img:"./img/tr-1.svg",
            text:"Travel Regulations",
            p:"Get the latest policy info and practical a-z travel tips",
            a:"Read more"
        },
        {
            id:2,
            img:"./img/tr-2.svg",
            text:"Check Visa",
            p:"Check your visa whether it can still be used or not, because you need",
            a:"Read more"
        },
        {
            id:3,
            img:"./img/tr-3.svg",
            text:"Safe Travels",
            p:"our health and wellbeing are our number one priority",
            a:"Read more"
        },
    ]
    const sliderOur =[
        {
            id:1,
            img:"./img/our-img1.png",
            text:"Choosing a Travel Backpack: A Comprehensive Guide!",
          
        },
        {
            id:2,
            img:"./img/our-img2.png",
            text:"Choosing a Travel Backpack: A Comprehensive Guide!",
          
        },
        {
            id:3,
            img:"./img/our-img3.png",
            text:"Choosing a Travel Backpack: A Comprehensive Guide!",
          
        },
    ]
    const ourServices=[
        {
            id:1,
            img:"./img/travel-and-tourism.svg",
            text:"Packages",
            p:"Discover our amazing packages tours"
        },
        {
            id:2,
            img:"./img/plane-ticket.svg",
            text:"Flight Tickets",
            p:"Let’s book your next trip"
        },
        {
            id:3,
            img:"./img/hotel.svg",
            text:"Booking Hotels",
            p:"Let’s book your next stay"
        },
        {
            id:4,
            img:"./img/connected-car.svg",
            text:"Transportations",
            p:"Let’s book your transportation and Tour Guide"
        },
        {
            id:5,
            img:"./img/visa.svg",
            text:"Apply Visa",
            p:"Let’s prepare and apply your Visa"
        },
        {
            id:6,
            img:"./img/life-insurance.svg",
            text:"Apply Insurance",
            p:"Let’s prepare and apply your Insurance"
        },
       
    ]
    const sliderChose = [
        {
            id:1,
            img:"./img/us.svg",
            text:"12M Users",
            p:"We have 12 million satisfied clients worldwide",
        },
        {
            id:2,
            img:"./img/rating2svg.svg",
            text:"4.8/5 Rating",
            p:"Our app got very satisfactory reviews across multiple platforms",
        },
        {
            id:3,
            img:"./img/city1.svg",
            text:"200K Cities",
            p:"Enjoy the convenience of accessing our website and applications anywhere",
        },
    ]
    return(

        <main className='font-inter'>
        <section className="bg-cover h-screen bg-top pb-32" style={{backgroundImage: "url(./img/bagir-bahana.png)"}}>
        <Nav />
            <div className="flex  h-screen text-white justify-center items-center pb-12">
                <div className="text-center w-11/12 md:w-7/12 xl:w-3/5">
                    <h2 className=" text-3xl md:text-4xl xl:text-7xl font-semibold mb-6 leading-normal sm:leading-normal  xl:leading-normal">Explore unforgettable places around the world</h2>
                    <p className="text-base sm:text-lg xl:text-2xl font-normal text-gray-lighter mb-14 ">Take a break from the stress of everyday life, plan trips and explore your favorite destinations</p>
                    <div className=" space-x-4">
                        <button className=" rounded-full bg-red-soft py-4 px-8 lg:px-10 lg:py-3.5 text-base lg:text-xl " type="button">Guide me</button>
                        <button className="border border-white rounded-full  py-4 px-8 lg:px-10 lg:py-3.5 text-base lg:text-xl" type="button">Downoad app</button>
                    </div>
                </div>
            </div>
        </section> 
        <section className="bg-gray-lighte py-7 px-2 xl:px-0 " >
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-start lg:justify-between gap-6 sm:gap-6">
            <div className="flex space-x-6">
                <div className="w-16 h-16 bg-white rounded-full flex  items-center justify-center">
                    <img src="./img/walleettsvg.svg" alt="walet"/>
                </div>
               <div >
                    <h5 className="lg:text-2xl sm:text-xl text-lg font-medium text-black-soft">Affordable price</h5>
                    <span className="lg:text-lg sm:text-base text-sm font-normal text-gray-dark ">We have affordable offers for<br/> you</span>
               </div>
            </div>
            <div className="flex space-x-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <img src="./img/users.svg" alt="users"/>
                </div>
                <div>
                    <h5 className="lg:text-2xl sm:text-xl text-lg font-medium text-black-soft">Affordable price</h5>
                    <span className="lg:text-lg sm:text-base text-sm font-normal text-gray-dark">We have a team of guides to<br/> accompany your journey</span>
               </div>
            </div>
            <div className="flex space-x-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <img className="w-8 h-8" src="./img/easy.svg" alt="walet"/>
                </div>
                <div>
                    <h5 className="lg:text-2xl sm:text-xl text-lg font-medium text-black-soft">Affordable price</h5>
                    <span className="lg:text-lg sm:text-base text-sm font-normal text-gray-dark">We provide convenience in<br/> making orders</span>
               </div>
            </div>
            
        </div>
        </section>
        <section>
            <div className="max-w-screen-xl mx-auto px-2 xl:px-0 mt-16 xl:mt-20">
                <h2 className=" text-3xl sm:text-4xl xl:text-5xl font-semibold mb-6  px-2 sm:px-2 lg:px-0 text-black-soft ">Popular destination</h2>
                <div className="flex justify-between px-2 sm:px-2 lg:px-0">
                    <p className=" text-base sm:text-xl xl:text-2xl font-normal text-gray-dark">{"Discover today's popular travel destinations and start your journey now"}</p>
                    <button className="capitalize text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-8 py-3  text-white lg:flex hidden">Explore more</button>
                </div>
            </div>
        </section>
        <section className="max-w-screen-xl mx-auto mt-14 px-1 xl:px-0 xl:pb-2">
            <ul className="grid  grid-cols-1 sm:grid-cols-3 place-items-center gap-6 sm:gap-4 lg:gap-8 mt-12 px-2 lg:px-0">
                {slider.map((item)=>{
                    return(
                    <>
                    <li key={item.id} className="lg:w-full sm:w-full w-full h-426 sm:h-340 xl:h-484 bg-cover bg-no-repeat rounded-xl" style={{backgroundImage:`url(${item.img})` }}>
                        <a href="./pulau.html">
                            <div className="flex flex-col justify-end h-426 sm:h-340 xl:h-484 ">
                                <div className="pb-6 pl-6  xl:pl-8 xl:pb-7">
                                    <p className="font-medium text-2xl sm:text-xl xl:text-2xl text-white mb-3">Seigantoji Temple</p> 
                                    <span className="font-medium text-base xl:text-xl  text-gray-lighter">Wakayama, Japan</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    </>
                    )
                })}
            </ul>
        </section>
        <Cheap />
        <Discount />
        <section className="max-w-screen-xl mx-auto mt-16 xl:pb-1">
            <div className="text-center">
                <h2 className="lg:text-5xl text-3xl sm:text-4xl font-medium mb-6 text-black-soft">Things to know before traveling</h2>
                <p className="lg:text-2xl text-base sm:text-lg font-normal text-gray-dark">A few things you need to know before starting your journey</p>
            </div>
            <ul className="grid sm:grid-cols-3 grid-cols-1 gap-8 sm:gap-4 lg:gap-8 px-2 xl:px-0 mt-14">
                {sliderTravel.map((item)=>{
                    return(
                    <>
                        <li className=" text-center border rounded-2xl border-gray-lighter shadow-md py-7">                   
                            <div className="flex justify-center mb-5">
                                <img className="lg:w-auto lg:h-auto  h-20" src={item.img} alt="travel"/>
                            </div>
                            <h5 className="lg:text-2xl text-lg font-medium mb-3 text-black-soft">{item.text}</h5>
                            <p className="lg:text-lg text-base font-normal xl:px-16 px-8 sm:px-2 mb-12 text-gray-dark">{item.p}</p>
                            <a href="#" className="text-lg font-medium text-red-soft">{item.a}</a>
                        </li>
                    </>
                    )
                })}
            </ul>
        </section>
        <section  className="max-w-screen-xl mx-auto mt-24 px-1 xl:px-0">
            <div className="text-center">
                <h2 className="xl:text-5xl sm:text-4xl text-3xl font-medium mb-4 text-black-soft">Our latest articles about travel</h2>
                <p className="xl:text-2xl sm:text-lg text-base font-normal text-gray-dark">Know the latest articles about travel</p>
            </div>
            <ul className="grid  grid-cols-1 sm:grid-cols-3 place-items-center gap-6 sm:gap-4 lg:gap-8 mt-14 px-2 lg:px-0">
                {sliderOur.map((item)=>{
                    return(
                        <>
                        <li key={item.id} className="w-full sm:w-full  max-h-96 bg-cover bg-no-repeat rounded-xl" style={{backgroundImage:`url(${item.img})` }}>
                            <a href="./travel.html">
                                <div className="flex flex-col justify-end h-96 ">
                                    <div className="py-8  pl-6 sm:pl-4 xl:pl-6">
                                        <p className="font-medium text-lg sm:text-base xl:text-2xl text-white ">{item.text}</p> 
                                    </div>
                                </div>
                            </a>
                        </li>
                        </>
                    )
                })}
            </ul>
            <div className=" text-center mt-14">
                <button className="capitalize text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-8 py-3  text-white ">view more</button>

            </div>

        </section>
        <section className="px-2 xl:px-0 xl:pb-1">
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-48 rounded-2xl px-2 sm:px-0 bg-red-soft" >
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center">
                <div className="py-6 lg:py-0">
                    <h5 className="lg:text-5xl text-3xl font-semibold text-white mb-8 lg:text-left text-center">Get spesial offers<br/> in the app!</h5>
                    <p className="lg:text-2xl text-lg font-normal text-white mb-8 lg:text-left text-center lg:w-462">With this application offer, you will save even more on your travel expenses</p>
                    <div className="flex lg:space-x-4 space-x-2 mb-6 lg:mb-0 justify-center lg:justify-start">
                        <a href="#">
                            <img  src="./img/App-Store1.png"  alt="#" className="w-36 h-11 lg:w-44 lg:h-14"/>
                        </a>
                        <a href="#">
                            <img src="./img/Google-Play.png" alt="#" className="w-36 h-11 lg:w-44 lg:h-14"/>
                        </a>
                    </div>
                </div>
                
            
                <div className="md:-mt-20 -mt-0 " >
                    <div>
                        <img className="w-80 h-96 lg:w-462 lg:h-551 mt-2"  src="./img/iphone_images.png" alt="###"/>
                    </div>
                </div>
            </div>
        </section>
        </section>
        <section className="max-w-screen-xl mx-auto mt-24">
            <div className="text-center max-w-screen-xl mx-auto">
                <h2 className="lg:text-5xl sm:text-3xl text-2xl font-semibold mb-6 text-black-soft">Our Services</h2>
                <p className="lg:text-2xl sm:text-lg text-base font-normal px-2 xl:px-32 text-gray-dark">our customers around the world say</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 mt-14 gap-8 sm:gap-4 xl:gap-8 px-2 xl:px-0">
                {ourServices.map((item)=>{
                    return(
                        <>
                    <a href="#">
                        <li className="text-center border border-gray-lighter shadow-md pt-7 pb-14 rounded-2xl">
                            <div className="flex justify-center ">
                                <img src={item.img} alt="travel-touism"/>
                            </div>
                            <h5 className="text-lg sm:text-base xl:text-lg font-semibold my-4 text-black-soft">{item.text}</h5>
                            <p className="text-lg sm:text-xs font-normal xl:text-lg text-gray-dark">{item.p}</p>
                        </li>
                    </a>

                        </>
                    )
                })}
                
            </ul>

        </section>
        <section className="px-2 xl:px-0 xl:pb-1">
            <section className="max-w-screen-xl mx-auto mt-24 rounded-2xl px-2 sm:px-0 bg-gray-lighte py-8 lg:py-14" >
                <div className="text-center ">
                    <h2 className="xl:text-5xl sm:text-4xl text-3xl font-semibold mb-6 text-black-soft">Why choose us?</h2>
                    <p className="xl:text-2xl sm:text-lg text-base font-normal px-4 text-gray-dark">{"We can ensure that you don't choose us wrong"}</p>
                </div>
                <ul className="grid sm:grid-cols-3 grid-cols-1 mt-14">
                    {sliderChose.map((item)=>{
                        return(
                        <>
                            <li className=" text-center">                   
                                <div className="flex justify-center mb-6">
                                    <img className="lg:w-24 w-20 lg:h-24 h-20" src={item.img} alt="travel"/>
                                </div>
                                <h5 className="lg:text-2xl sm:text-xl text-lg font-medium mb-4 text-black-soft">{item.text}</h5>
                                <p className=" text-sm sm:text-base lg:text-lg  font-normal px-8 sm:px-2 lg:px-6 mb-5 text-gray-dark">{item.p}</p>
                            </li>
                        </>
                        )
                    })}
                    
            </ul>

            </section>

        </section>
        <section className="px-2 xl:px-0">
            <section className="mx-auto max-w-screen-xl xl:mt-24 mt-14">
                <div className="bg-cover py-16 px-3 xl:px-14 rounded-2xl"
                    style={{backgroundImage:" url(./img/desert.png)"}}>
                    <div className="flex justify-center sm:justify-end rounded-lg w-full px-2 md:px-0">
                        <div className="w-full sm:w-4/6 xl:w-1/2">
                            <h3 className="font-semibold text-white xl:text-5xl text-3xl mb-4 ">Want to Stay Up to Date?</h3>
                            <p className=" text-white  text-lg font-normal ">From our epic backpacking guides to in-depth gear reviews and
                                our team is always on assignment, out in the world, writing new
                                and exciting content for you guys.</p>
                            <div className="flex items-center justify-between bg-white xl:w-11/12 w-full sm:w-5/6 h-12 rounded-full sm:mt-6 mt-8 px-1.5 sm:px-1">
                                <input type="email" placeholder="enter your email" className="font-normal sm:text-base text-sm text-gray-dark sm:ml-6 ml-3 w-32"/>
                            <button className="bg-red-soft font-inter text-white text-sm rounded-full sm:px-6 sm:py-2.5 py-2 px-4 ">Subscrib</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </main>
    )
}

export default Home;