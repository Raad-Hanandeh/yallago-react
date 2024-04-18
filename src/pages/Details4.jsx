import CheapDetails from "../components/CheapDetails"
import HeroDetails from "../components/HeroDetails"
import NavDark from "../components/NavDark"
import Regester from "../components/Regester"
import Stay from "../components/Stay"


function Details4() {
  return (
    <>
         <main>
        <section>
            <NavDark />
        </section>
        <HeroDetails />
        <section className="max-w-screen-xl mx-auto mt-16 xl:mt-20">
           <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-end  px-2 xl:px-0">
                <div className=" px-2 lg:px-0" >
                    <div className="flex  justify-between mb-3">
                       <a href="./details.html"><button className=" py-2 px-8 sm:py-2 sm:px-6 xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Description</button></a>
                       <a href="./details2.html"> <button className=" hidden lg:block py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft ">Trip Plan</button></a>
                       <a href="./details3.html"> <button className=" hidden sm:block py-2 px-8  xl:py-3.5 xl:px-10 bg-gray-buttondark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-purple-soft">Facility</button></a>
                        <a href="./details4.html"><button className="   py-2 px-8 sm:py-2 sm:px-6   xl:py-3.5 xl:px-10 bg-purple-dark rounded-full text-base sm:text-xs xl:text-lg lg:text-xl font-medium text-white">Terms</button></a>
                    </div>
                    
                    <div className="flex flex-col mt-10 ">
                        <h5 className="text-xl xl:text-2xl text-black-soft font-semibold mb-2">General Terms</h5>
                        <p className="text-base font-normal text-gray-text mb-8">By accessing and placing an order with Laksita, you confirm that you are in agreement with and bound by the terms of service outlined below. These terms apply to the entire website and any email or other type of communication between you and Laksita. </p>
                        <p className="text-base font-normal text-gray-text">Under no circumstances shall Laksita team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Laksita team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</p>
                        <h5 className="text-xl xl:text-2xl text-black-soft font-semibold mt-8 mb-2">License</h5>
                        <p className="text-base font-normal text-gray-text">Laksita grants you a revocable, non-exclusive, non-transferable, limited license to download, use the website strictly in accordance with the terms of this Agreement.</p>
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

export default Details4