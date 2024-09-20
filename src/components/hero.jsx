export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 sm:flex sm:items-center lg:px-8 lg:pt-12 lg:py-40">
        <div className=":mt-0 mx-auto max-w-7xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="font-abhaya capitalize text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 lg:text-7xl">
            Premium, <br />
            Abordable <br />
            Soins de Beauté.
          </h1>
          <p className="mt-2 sm:mt-6 text-sm sm:text-base lg:text-lg sm:leading-8 text-[#797979] sm:font-medium">
            Mua Cosmetics est la marque <span className='text-[#FF80C8]'>#1</span> qui offre des produits de beauté de haute qualité à petits prix.
          </p>
          <div className="mt-5 sm:mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#FF80C8] px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="mx-auto flex lg:items-center max-w-lg mt-10 sm:mt-0 sm:ml-5 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-3xl flex-1 sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 p-2 lg:-m-4 lg:p-4">
              <img
                alt="App screenshot"
                src="hero.png"
                width={2432}
                height={1442}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
