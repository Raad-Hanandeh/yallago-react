

export default function Regester() {

    const price =[
        {
            id:1,
            price:"$168",
            total:"$562.07",
            text:"/person"
        }
    ]
  return (
    <>
      <div className=" mt-14 sm:mt-0">
        <ul>
            {price.map((item)=>{
                return(
                    <>
                        <li className="border border-gray-lighter rounded-xl p-4 xl:p-6">
                    <div>
                    <span className="text-lg lg:text-2xl font-semibold text-black-soft">{item.price}</span>
                    <span className="text-xs lg:text-lg font-medium text-gray-dark">{item.text}</span>
                    <div>
                        <div className="flex border w-full justify-between rounded-xl mt-6">
                            <div className="border-r-2 w-full xl:w-32">
                            <div className="p-2">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xs lg:text-base font-semibold text-black-soft">Adults</p>
                                    <a href="#"><img src="./img/plus.svg" alt="plus"/></a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm lg:text-lg font-normal text-gray-dark">2 </span>
                                    <a href="#"><img src="./img/nigative.svg" alt="nigative"/></a>
                                </div>
                            </div>
                            </div>
                            <div className="border-r-2 w-full xl:w-32">
                            <div className="p-2">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xs lg:text-base font-semibold text-black-soft">Children</p>
                                    <a href="#"><img src="./img/plus.svg" alt="plus"/></a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm lg:text-lg font-normal text-gray-dark" >1</span>
                                    <a href="#"><img src="./img/nigative.svg" alt="nigative"/></a>
                                </div>
                            </div>
                            </div>
                            <div className="w-full xl:w-32">
                            <div className="p-2">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xs lg:text-base font-semibold text-black-soft">Infants</p>
                                    <a href="#"><img src="./img/plus.svg" alt="plus"/></a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm lg:text-lg font-normal text-gray-dark">0</span>
                                    <a href="#"><img src="./img/minus.svg" alt="nigative"/></a>
                                </div>
                            </div>
                            </div>        
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <span className="text-lg lg:text-2xl font-semibold text-black-soft">Total</span>
                        <span className="text-lg lg:text-2xl font-semibold text-black-soft">{item.total}</span>
                    </div>
                    <div className="text-center w-full bg-red-soft rounded-lg mt-6">
                        <button className="py-3.5 px-20 bg-red-soft rounded-lg text-xs  xl:text-base font-semibold text-white">Book now</button>
                    </div>
                    <hr className="mt-6"/>
                    <div className="flex justify-between gap-2 items-center mt-6">
                        <div className="flex space-x-2 xl:space-x-4  items-center">
                            <img src="./img/james.svg" alt="james"/>
                            <div >
                                <p className="text-xs xl:text-sm text-black-soft font-medium mb-1">Guide from England</p>
                                <span className=" text-xs xl:text-sm text-gray-dark font-normal">James Sullivan</span>
                            </div>
                        </div>
                        <div>
                            <button className="py-1.5 px-4 xl:py-3 xl:px-6 border rounded-lg">Ask Guide </button>
                        </div>
                    </div>
                    </div>
            </li>
                    </>
                )
            })}
            
        </ul>
    </div>
    </>
  )
}
