
function nav(){
    return(
        <>
        <header className="lg:px-10 px-4 pt-2 text-lg ">
                <nav className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        <a href="/index.jsx">
                            <img src="./img/logonav.svg" alt="logo-light"/>
                        </a>
                    </div>
                    <div
                        className="hidden  lg:flex space-x-4 xl:space-x-8 justify-center items-center text-white text-lg font-medium">
                        <a href="./packages.html">packages</a>
                        <a href="./center.html">Guide Me</a>
                        <a href="./travel.html">Yalla Guide <span className="text-sm font-medium text-red-soft">soon</span></a>
                        <a href="./blog-article.html">Articles & Blogs</a>
                        <a href="./about-us.html">About us</a>
                    </div>
                    <div className="flex space-x-4  justify-center items-center text-white text-lg font-medium">
                        <a className="hidden lg:block" href="#">Countries</a>
                        <a href=""><img src="./img/kingdom.svg" alt="kingdom"/></a>
                        <a href="#"><img src="./img/arrow.svg" alt="arrow"/></a>
                        <a href="#"><img src="./img/search.svg" alt="search"/></a>
                        <a className="block lg:hidden" href="#"><img src="./img/menu.svg" alt="menu"/></a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default nav