import CheapDetails from "../components/CheapDetails"
import HeroDetails from "../components/HeroDetails"
import NavDark from "../components/NavDark"
import Regester from "../components/Regester"
import Stay from "../components/Stay"


function Details3() {
  return (
    <>
        <main>
        <section>
           <NavDark />
        </section>
        <HeroDetails />
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-end  px-2 xl:px-0">
                    <div className=" px-2 lg:px-0  col-start-1"  >
                        <div className="flex  justify-between mb-3">
                            <a href="./details.html"><button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg  font-medium text-purple-soft">Description</button></a>
                            <a href="./details2.html"><button className="  hidden sm:block py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg font-medium text-purple-soft">Trip Plan</button></a>
                            <a href="./details3.html"><button className=" py-2 px-8  xl:py-3.5 xl:px-10 bg-purple-dark rounded-full text-base sm:text-xs xl:text-xl font-medium text-white">Facility</button></a>
                            <a href="./details4.html"><button className=" hidden lg:block  py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg font-medium text-purple-soft">Terms</button></a>
                        </div>
                    <div>
                        <h3 className="text-xl xl:text-2xl font-semibold text-black-soft my-10">Facility for you</h3>
                        <div className="bg-gray-lighte rounded-2xl p-6">
                            <h5 className="text-2xl font-semibold text-black-soft">Include:</h5>
                            <div className="space-y-8 mt-7 ">
                                <div className="flex items-center gap-4">
                                
                                        <img src="./img/done.svg" alt="done"/>
                                   
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">4 nights hotel</p>
                                
                                </div>
                                <div className="flex items-center gap-4">
                                    
                                        <img src="./img/done.svg" alt="done"/>
                                   
                                    <div className="">
                                        <p className="text-lg xl:text-xl font-normal text-black-soft  ">Private air-conditioned car includes driver and fuel for tours & return airport transfer </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  
                                        <img src="./img/done.svg" alt="done"/>
                                  
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">Driver cum guide (2-4 pax) & english speaking tour guide</p>
                                </div>
                                <div className="flex items-center gap-4">
                                   
                                        <img src="./img/done.svg" alt="done"/>
                                  
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">All entrance ticket/admission fees, parking fees</p>
                                </div>
                                <div className="flex items-center gap-4">
                                  
                                        <img src="./img/done.svg" alt="done"/>
                                  
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">Mineral water</p>
                                </div>
                                <div className="flex items-center gap-4">
                                 
                                        <img src="./img/done.svg" alt="done"/>
                                 
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">Breakfast at the hotel</p>
                                </div>
                            </div>
                            <hr className="my-8"/>
                            <div className="space-y-8">
                                <h5 className="text-2xl font-semibold text-black-soft">Exclude:</h5>
                                <div className="flex items-center gap-4">
                                        <img src="./img/erroredit.svg" alt="error"/>
                                    <p className="text-lg xl:text-xl font-norma text-black-soft">Personal expenses at the hotel (Mini bar, Room services, laundry, telephone, etc).</p>
                                </div>
                                
                            </div>

                        </div>
                        <div className="bg-gray-lighte rounded-2xl p-6 mt-8">
                            <div className="flex justify-between">
                                <h5 className="text-2xl font-semibold text-black-soft">Extra:</h5>
                            <a href="#">
                                <div className="flex ">
                                    <span><img src="./img/Edit.svg" alt="edit"/></span>
                                    <span className="text-xl text-purple-soft font-normal">Edit</span>
                                </div>
                            </a>
                            </div>
                            <div className="space-y-8 mt-7">
                                <div className="flex justify-between items-center ">
                                <div className="flex gap-4">
                                        <img src="./img/done.svg" alt="done"/>
                                    <div className="flex space-x-8">
                                        <p className="text-lg xl:text-xl font-norma text-black-soft">2 Nights Hotel</p>
                                        <span className="text-xl font-normal text-gray-text">4</span>
                                    </div>
                                
                                </div>
                                <div>
                                    <span className="text-xl font-norma text-black-soft">$20.0</span>
                                </div>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <div className="flex gap-4">
                                        <img src="./img/done.svg" alt="done"/>
                                    <div className="flex space-x-8">
                                        <p className="text-lg xl:text-xl font-norma text-black-soft">Mineral water</p>
                                        <span className="text-xl font-normal text-gray-text">3</span>
                                    </div>
                                
                                    </div>
                                    <div>
                                    <span className="text-xl font-norma text-black-soft">$20.0</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <div className="flex gap-4">
                                        <img src="./img/done.svg" alt="done"/>
                                    <div className="flex space-x-8">
                                        <p className="text-lg xl:text-xl font-norma text-black-soft">Breakfast at the hotel</p>
                                        <span className="text-xl font-normal text-gray-text">5</span>
                                    </div>
                                
                                    </div>
                                    <div>
                                    <span className="text-xl font-norma text-black-soft">$20.0</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <div className="flex gap-4">
                                        <img src="./img/done.svg" alt="done"/>
                                    <div className="flex space-x-8">
                                        <p className="text-lg xl:text-xl font-norma text-black-soft">Flight ticket</p>
                                        <span className="text-xl font-normal text-gray-text">1</span>
                                    </div>
                                
                                    </div>
                                    <div>
                                    <span className="text-xl font-norma text-black-soft">$20.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> 
                            <button className="bg-gray-buttondark text-purple-soft rounded-full text-base sm:py-3.5 sm:px-10 py-4 px-14 mt-6 sm:mt-8 flex">
                                <img src="./img/add.svg" alt="add"/>Add more
                            </button>
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

export default Details3