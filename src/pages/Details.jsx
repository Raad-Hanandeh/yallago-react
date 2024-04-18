import CheapDetails from "../components/CheapDetails"
import HeroDetails from "../components/HeroDetails"
import NavDark from "../components/NavDark"
import Regester from "../components/Regester"
import Stay from "../components/Stay"


function Details() {
  return (
    <>
     <main className="font-inter">
     <NavDark />
       <HeroDetails />
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-20">
           <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-end  px-2 xl:px-0">
                <div className=" px-2 lg:px-0" >
                    <div className="flex  justify-between">
                       <a href="./details.html"> <button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-purple-dark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-white">Description</button></a>
                        <a href="./details2.html"><button className="py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Trip Plan</button></a>
                        <a href="./details3.html"><button className=" hidden sm:block py-2 px-8  xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Facility</button></a>
                        <a href="./details4.html"><button className=" hidden lg:block  py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Terms</button></a>
                    </div>
                    <div className=" mt-10 mb-12 ">
                        <div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-black-soft mb-4">Your vacation details</h3>
                            <p className="text-sm xl:text-xl text-gray-dark">Dubai is the most populous city in the United Arab Emirates and is the capital of the Emirate of Dubai. The city is located along the southeastern coast of the Arabian Peninsula and south of the Persian gulf, the Municipality of Dubai is called <span className="text-red-soft">Learn more...</span></p>
                        </div>
                    </div>
                    <hr className="block sm:hidden lg:block"/>
                    <div className="mt-7">
                        <a href="#">
                            <div className="flex items-center space-x-4">
                                <img src="./img/hashtegedit.svg" alt="hashtag"/>
                            <div>
                                <p className="text-xl lg:text-2xl font-medium text-black-soft ">Trip ID</p>
                                <span className="text-sm xl:text-lg text-gray-dark font-normal">MR-20231212</span>
                            </div>
                        </div>
                        </a>
                       <a href="#">
                        <div className="flex space-x-4 my-6">
                            <div className="w-12 h-12 bg-gray-lighte rounded-full flex justify-center items-center">
                                <img src="./img/user-detail.svg" alt="user"/>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-medium text-black-soft ">Guests</p>
                                <span className="text-sm xl:text-lg text-gray-dark font-normal">Mini guests 2, Max guests 4 </span>
                            </div>
                        </div>
                       </a>
                       <a href="#">
                        <div className="flex space-x-4">
                            <div className="w-12 h-12 bg-gray-lighte rounded-full flex justify-center items-center">
                                <img src="./img/clock-detail.svg" alt="clock"/>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-medium text-black-soft ">Tour duration</p>
                                <span className="text-sm xl:text-lg text-gray-dark font-normal">Duration of your trip 5 days 4 nights</span>
                            </div>
                        </div>
                       </a>
                       <a href="#">
                        <div className="flex space-x-4 my-6">
                            <div className="w-12 h-12 bg-gray-lighte rounded-full flex justify-center items-center">
                                <img src="./img/location-detail.svg" alt="location"/>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-medium text-black-soft ">Destination</p>
                                <span className="text-sm xl:text-lg text-gray-dark font-normal">Dubai: 2 Nights, Kuala Lumpur: 2 Nights<br/> 
                                    Bali: 2 Nights, Dubai: 2 Nights </span>
                            </div>
                        </div>
                       </a>
                       <a href="#">
                        <div className=" flex justify-between items-center">
                            <div className="flex space-x-4">
                                <div className="w-12 h-12 bg-gray-lighte rounded-full flex justify-center items-center">
                                    <img src="./img/visa-detail.svg" alt="visa"/>
                                </div>
                                <div>
                                    <p className="text-xl lg:text-2xl font-medium text-black-soft ">Visa</p>
                                    <span className="text-sm xl:text-lg text-red-dark font-normal">e-visa Required</span>
                                </div>
                            </div>
                            <div>
                                <button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Apply</button>
                            </div>
                        </div>
                       </a>
                       <a href="#">
                        <div className=" flex justify-between items-center mt-6 mb-14">
                            <div className="flex space-x-4">
                                <div className="w-12 h-12 bg-gray-lighte rounded-full flex justify-center items-center">
                                    <img src="./img/check-detail.svg" alt="check"/>
                                </div>
                                <div>
                                    <p className="text-xl lg:text-2xl font-medium text-black-soft ">Insurance</p>
                                    <span className="text-sm xl:text-lg text-red-dark font-normal">Insurance Required</span>
                                </div>
                            </div>
                            <div>
                                <button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Apply</button>
                            </div>
                        </div>
                        </a>
                        <div className="bg-gray-lighte border border-gray-lighter rounded-xl p-6 mb-12">
                            <div className="">
                                <p className="text-xl lg:text-2xl font-medium text-black-soft mb-6">Guests Offers</p>
                                <div className="bg-white rounded-full flex justify-between items-center p-4">
                                    <input className="placeholder:text-sm placeholder:font-normal placeholder:text-black-dark" type="text" placeholder="2 Guests - $360 per person"/>
                                    <a href="#"><img className="" src="./img/arrow-travel.svg" alt="arrow"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Regester />
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

export default Details