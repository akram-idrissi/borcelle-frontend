export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="font-abhaya mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Premium, <br />
            Abordable <br />
            Soins de Beauté.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#797979] 0 font-medium">
            Mua Cosmetics est la marque <span className='text-[#FF80C8]'>#1</span> qui offre des produits de beauté de haute qualité à petits prix.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl lg:ml-10 sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="max-w-3xl flex-1 lg:flex-none sm:max-w-5xl lg:max-w-none">
            <div>
              <img
                alt="App screenshot"
                src="/hero.png"
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
