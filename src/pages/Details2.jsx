
import HeroDetails from '../components/HeroDetails'
import CheapDetails from '../components/CheapDetails'
import Stay from "../components/Stay"
import Regester from '../components/Regester'
import NavDark from '../components/NavDark'

function Details2() {
  return (
   <>
        <main className='font-inter' >
            <NavDark />
            <HeroDetails />
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-20">
           <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-end  px-2 xl:px-0">
                <div className=" px-2 lg:px-0 w-full" >
                    <div className="flex justify-between mb-3">
                        <a href="./details.html"><button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Description</button></a>
                        <a href="./details2.html"><button className="py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-purple-dark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-white ">Trip Plan</button></a>
                        <a href="./details3.html"><button className=" hidden sm:block py-2 px-8  xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Facility</button></a>
                        <a href="./details4.html"><button className=" hidden lg:block  py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Terms</button></a>
                    </div>
                    <div className="flex  justify-between mt-10">
                        <button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-8 bg-red-soft rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-white">Day 1</button>
                        <button className="py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-8 bg-gray-lighte rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-gray-dark ">Day 2</button>
                        <button className="  py-2 px-8  xl:py-3.5 xl:px-8 bg-gray-lighte  rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-gray-dark">Day 3</button>
                        <button className="hidden lg:block py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-8 bg-gray-lighte  rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-gray-dark">Day 4</button>
                        <button className=" hidden lg:block  py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-8 bg-gray-lighte  rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-gray-dark">Day 5</button>
                    </div>
                    
                   <div>
                    <div className="flex  space-x-2 mt-20">
                          <div className="text-nowrap text-sm font-semibold text-black-soft">08:00 - 12:00</div>
                         <div>
                            <svg width="12" height="131" viewBox="0 0 12 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#E7E7E9"/>
                                <path d="M6 12V131" stroke="#E7E7E9" stroke-dasharray="4 4"/>
                            </svg>                                
                         </div>                    
                         <div className="space-y-2 w-full">
                             <p className="text-base text-black-soft font-semibold">Soekarno Hatta Airport</p>
                             <div className="flex items-center border border-gray-grayborder shadow-lg p-4 gap-4 rounded-lg ">
                                 <img src="./img/travel-detail2.svg" alt="travel"/>
                                 <p className="text-xs text-gray-text font-normal">Departure by plane to the tourist site, at exactly 08:00 am you must be ready.</p>
                             </div>
                         </div>
                     </div>
                     <div className="flex  space-x-2">
                          <div className="text-nowrap text-sm font-semibold text-black-soft">12:00 - 13:00</div>
                         <div>
                            <svg width="12" height="131" viewBox="0 0 12 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#E7E7E9"/>
                                <path d="M6 12V131" stroke="#E7E7E9" stroke-dasharray="4 4"/>
                            </svg>                                     
                         </div>
                         <div className="space-y-2 w-full">
                             <p className="text-base text-black-soft font-semibold">Picked up</p>
                             <div className="flex items-center border border-gray-grayborder shadow-lg p-4 gap-4 rounded-lg ">
                                 <img src="./img/car-details.svg" alt="car"/>
                                 <p className="text-xs text-gray-text font-normal">Picked up by driver from airport</p>
                             </div>
                         </div>
                     </div>
                     <div className="flex  space-x-2 ">
                          <div className="text-nowrap text-sm font-semibold text-black-soft">13:00 - 15:00</div>
                         <div>
                            <svg width="12" height="131" viewBox="0 0 12 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#E7E7E9"/>
                                <path d="M6 12V131" stroke="#E7E7E9" stroke-dasharray="4 4"/>
                                </svg>                                
                         </div>
                         <div className="space-y-2 w-full">
                             <p className="text-base text-black-soft font-semibold">AlBaik Restaurant</p>
                             <div className="flex items-center border border-gray-grayborder shadow-lg p-4 gap-4 rounded-lg ">
                                 <img src="./img/home-details.svg" alt="home"/>
                                 <p className="text-xs text-gray-text font-normal">Departure by plane to the tourist site, at exactly 08:00 am you must be ready.</p>
                             </div>
                         </div>
                     </div>
                     <div className="flex  space-x-2 ">
                          <div className="text-nowrap text-sm font-semibold text-black-soft">15:00 - 16:00</div>
                         <div>
                            <svg width="12" height="131" viewBox="0 0 12 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#E7E7E9"/>
                                <path d="M6 12V131" stroke="#E7E7E9" stroke-dasharray="4 4"/>
                                </svg>                                
                         </div>
                         <div className="space-y-2 w-full">
                             <p className="text-base text-black-soft font-semibold">Picked up</p>
                             <div className="flex items-center border border-gray-grayborder shadow-lg p-4 gap-4 rounded-lg ">
                                 <img src="./img/car-details.svg" alt="car"/>
                                 <p className="text-xs text-gray-text font-normal">Picked up by driver from Restaurant</p>
                             </div>
                         </div>
                     </div>
                     <div className="flex  space-x-2">
                          <div className="text-nowrap text-sm font-medium text-black-soft">16:00 - 18:00</div>
                         <div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#E7E7E9"/>
                            </svg>                                                          
                         </div>
                         <div className="space-y-2 w-full">
                             <p className="text-base text-black-soft font-semibold">Soekarno Hatta Airport</p>
                             <div className="flex items-center border border-gray-grayborder shadow-lg p-4 gap-4 rounded-lg ">
                                 <img src="./img/home-details.svg" alt="home"/>
                                 <p className="text-xs text-gray-text font-normal">Departure by plane to the tourist site, at exactly 08:00 am you must be ready.</p>
                             </div>
                         </div>
                     </div> 
                   </div>
                    
                </div>
              <Regester />
            </div>
           <div className="px-2 xl:px-0">
            <div className="flex flex-wrap justify-center sm:justify-between items-center bg-gray-lighte rounded-xl py-6 px-6 mt-14">
                <div ><p className="text-base xl:text-lg font-medium text-black-soft ">Do you want to customize this package?</p></div>
                <div> <button className="bg-red-500 text-white rounded-full text-base sm:py-3.5 sm:px-10 py-4 px-14 mt-6 sm:mt-0">Customize</button></div>
            </div>
           </div>
        </section>
       <CheapDetails />
       <Stay />
        <section className="max-w-screen-xl mx-auto mt-24 px-2 xl:px-0">
            <div className="flex flex-wrap justify-center xl:justify-between items-center bg-gray-lighte rounded-xl py-6 px-8">
                <div><p className="text-base xl:text-lg font-medium text-black-soft mb-6 sm:mb-4 lg:mb-0 max-w-4xl">We use cookies and Inspectlet. By using this website, you accept the use of cookies which helps us provide you more interesting and adapted content.</p></div>
                <div> <button className="bg-red-500 text-white rounded-full text-base sm:py-3.5 sm:px-10 py-4 px-14 ">Accept</button></div>
            </div>
        </section>

    </main>
   </>
  )
}

export default Details2