'use client'

import Stars from "@/helpers/stars"


const trendingProducts = [
    {
        id: 1,
        name: 'Long wear fixing spray',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: '/best-sellers/1.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    {
        id: 2,
        name: 'hyaluronic acid jelly primer',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: '/best-sellers/2.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    {
        id: 3,
        name: 'Powder blush',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: '/best-sellers/3.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    {
        id: 4,
        name: 'Pack pinceaux MUA',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: '/best-sellers/4.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
]


export default function BestSellers() {

    return (
        <>
            <section aria-labelledby="trending-heading" className="bg-white">
                <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
                    <div className="flex pb-10 sm:pb-14 items-center sm:justify-center px-4 sm:px-6 lg:px-0">
                        <h2 id="trending-heading" className="font-abhaya text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a]">
                            Best Sellers
                        </h2>
                    </div>

                    <div className="relative mt-8">
                        <div className="relative w-full overflow-x-auto">
                            <ul
                                role="list"
                                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                            >
                                {trendingProducts.map((product) => (
                                    <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                        <div className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200">
                                                <img
                                                    alt={product.imageAlt}
                                                    src={product.imageSrc}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="mt-1 font-semibold text-lg text-[#1a1a1a]">
                                                    <a href={product.href}>
                                                        <span className="absolute inset-0" />
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <div className="flex justify-center items-center">
                                                    <Stars numbers={[1, 2, 3, 4, 5]} />
                                                    <p className="ml-3 mt-1 text-[#FF80C8] font-semibold text-lg">{product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 px-4 sm:hidden">
                        <a href="#" className="text-sm font-semibold text-[#FF80C8]">
                            See everything
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
