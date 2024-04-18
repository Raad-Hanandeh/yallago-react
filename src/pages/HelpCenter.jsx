import Nav from '../components/nav'

function HelpCenter() {
    const helpData = [
        {
          id:1,
          icon:"./img/list-center.svg",
          title:"General information",
          text:"Guidelines and best practices to make the most out of shortwave",
        },
        {
          id:2,
          icon:"./img/Groupp.svg",
          title:"Profile and security",
          text:"Guidelines and best practices to make the most out of shortwave",
        },
        {
          id:3,
          icon:"./img/wallet.svg",
          title:"Payment",
          text:"Some of the topics that are frequently asked to us",
        },
        {
          id:4,
          icon:"./img/ccalender.svg",
          title:"Booking",
          text:"Guidelines and best practices to make the most out of shortwave",
        },
        {
          id:5,
          icon:"./img/building.svg",
          title:"Hotels",
          text:"Guidelines and best practices to make the most out of shortwave",
        },
        {
          id:6,
          icon:"./img/svg6.svg",
          title:"Transportation",
          text:"Guidelines and best practices to make the most out of shortwave",
        },
      ]
    
      const question = [
        {
          id:1,
          image:"./img/nigative-center.svg",
          text:"How to change account here?", 
        },
        {
          id:2,
          paragragh:"Modern and elegant designs make customers love our products, so that we become number 1 in furniture modern and elegant designs make customers love our products, so that we become number 1 in furnituremodern and elegant designs make customers love our products, so that we become number 1 in furniture....", 
        },
        {
          id:3,
          image:"./img/plus-center.svg",
          text:"Can we change the current location with another location?", 
        },
        {
          id:4,
          image:"./img/plus-center.svg",
          text:"an I cancel an order that has already been ordered?", 
        },
        {
          id:5,
          image:"./img/plus-center.svg",
          text:"Is the account I use here safe?", 
        },
        {
          id:6,
          image:"./img/plus-center.svg",
          text:"How to change account here?", 
        },
        {
          id:7,
          image:"./img/plus-center.svg",
          text:"Can we change the current location with another location?", 
        },
        {
          id:8,
          image:"./img/plus-center.svg",
          text:"Can I cancel an order that has already been ordered?", 
        },
        
        {
          id:9,
          image:"./img/plus-center.svg",
          text:"Is the account I use here safe?", 
        },
        {
          id:10,
          image:"./img/plus-center.svg",
          text:"How to change account here?", 
        },
      ]
  return (
   <>
    <main className='font-inter'>
    <section className="bg-cover no-repeats h-600 sm:h-screen lg:h-600 bg-center " style={{backgroundImage: "url(./img/center-bg.png)"}}>
    <Nav />
       <div className=" flex flex-col justify-center  h-full">
           <div>
           <div className="flex  text-white justify-center ">
                <div className="text-center">
                    <h2 className=" text-3xl sm:text-5xl lg:text-7xl  font-semibold mb-9  px-6">Help Center</h2>
                    <p className="text-base sm:text-lg lg:text-2xl font-normal px-8 xl:px-52 mb-14">Yallabook can help answer your questions</p>
                    
                    
                </div>
                
            </div>
           </div>
        <div className="flex justify-center">
            <div className="w-4/5 h-12 sm:w-3/6 xl:w-2/5 xl:h-16 bg-white rounded-full flex items-center justify-between px-1 xl:px-3">
                <div className="flex  space-x-3">
                    <img src="./img/Search-center.svg" alt="Search"/>
                    <input className="w-36 xl:w-56 placeholder:text-xs xl:placeholder:text-xl placeholder:text-gray-dark font-medium" type="text" placeholder="Search for a questions" />
                </div>
                <button className="py-2 px-4 xl:py-2 xl:px-8 bg-red-soft rounded-full text-base md:text-lg xl:text-xl font-medium text-white ">Search</button>
            </div>
        </div>
       </div>
    </section>
    <section className="max-w-screen-xl mx-auto mt-16 xl:mt-28">
        <div className="text-center max-w-screen-xl mx-auto">
            <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-6 text-black-soft">All Help Topics</h2>
            <p className="lg:text-xl sm:text-lg text-sm font-normal px-1 xl:px-32 text-gray-dark"></p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 mt-24 gap-8 px-2 lg:px-0">
          {helpData.map((item)=>{
            return(
              <li key={item.id} className="text-center border pt-11 pb-14 rounded-2xl">
                <div className="flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-lighte flex justify-center items-center rounded-full mb-8 ">
                        <img src={item.icon} alt="list"/>
                    </div>
                </div>
                <h5 className="text-lg sm:text-xl xl:text-2xl font-medium mb-3 text-black-soft">{item.title}</h5>
                <p className="text-xs sm:text-base xl:text-lg font-medium px-16 sm:px-1 xl:px-14 text-gray-dark">{item.text}</p>
              </li>
            )
          })}
        </ul>
    </section>
    <section className="max-w-screen-xl mx-auto mt-28">
        <div className="text-center">
            <h2 className="lg:text-5xl sm:text-3xl text-2xl font-medium mb-14 text-black-soft">Most Question</h2>
        </div>
        <ul  className="px-4">
          {question.map((question)=>{
            return(
              <>
              <li key={question.text} className=" flex justify-between"><p className="text-lg sm:text-xl xl:text-2xl font-medium  xl:font-semibold text-black-soft max-w-60 sm:max-w-72 md:max-w-full">{question.text}</p><a href='#'><img src={question.image} alt=""/></a></li>
              <li className="sm:pr-24 xl:pr-36"><span className="text-sm sm:text-lg xl:text-xl font-medium xl:font-normal text-gray-dark ">{question.paragragh}</span></li>
              <hr className=' my-6'/>
              </>
                  )
            
          })}
        </ul>
    </section>
    <section className="px-2 xl:px-0">
        <section className="max-w-screen-xl mx-auto  bg-cover bg-center  bg-no-repeat  flex justify-center mt-28 rounded-2xl px-2 sm:px-0 " style={{backgroundImage:"url(./img/camel.png)"}}>
            <div className="py-20 lg:py-14  lg:px-32 text-center ">
                <h5 className=" text-2xl sm:text-4xl lg:text-5xl font-medium text-white">{"Didn't find your question?"}</h5>
                <p className="text-base sm:text-lg  lg:text-2xl  font-normal text-white mt-2 lg:mt-6 mb-6 lg:mb-14 px-9">Our customer service is ready to serve you</p>
                <button className="capitalize text-xl font-medium rounded-full bg-red-soft lg:px-10 lg:py-3.5 px-8 py-3  text-white ">Get started</button>
            </div>
        </section>
    </section>
</main>

   </>

  )
}

export default HelpCenter