

function Stay() {
  return (
    <>
      <section className="px-2 xl:px-0 ">
            <section className="mx-auto max-w-screen-xl lg:mt-28 mt-14">
                <div className="bg-cover py-16 px-3 xl:px-14 rounded-2xl"
                    style={{backgroundImage: "url(./img/desert.png)"}}>
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
    </>
  )
}

export default Stay