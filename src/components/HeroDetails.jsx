

function HeroDetails() {
  return (
    <>
    <section className="max-w-screen-xl mx-auto px-2 xl:px-0 mt-16 lg:mt-24">
        <div className="flex justify-between items-end lg:items-center">
            <div>
                <h2 className="text-xl sm:text-3xl xl:text-3xl font-semibold text-black-soft mb-2">Holiday packages to Dubai (5 Days 4 Nights)</h2>
                <p className="text-xs sm:text-base xl:text-lg font-medium text-gray-dark ">Dubai City in the United Arab Emirates</p>
            </div>
            <div className="flex space-x-2 lg:space-x-7 px-2 xl:px-0">
                <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src="./img/sharereact.svg" alt="share" />
                        </a>
                </div>
                <div className="flex items-center space-x-2">
                        <a href="#">
                            <img src="./img/savereact.svg" alt="save" />
                        </a>
                </div>
            </div>
        </div>
        <div className="bg-cover h-544 rounded-lg bg-center px-2 lg:px-0 mt-7" style={{backgroundImage: "url(./img/Image-detail.png)"}}></div>
    </section>
    </>
  )
}

export default HeroDetails