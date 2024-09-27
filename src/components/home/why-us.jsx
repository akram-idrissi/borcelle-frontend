import Image from 'next/image'
import { CheckBadgeIcon, CurrencyDollarIcon, TruckIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'Haute qualité:',
        description: 'Nos produits sont fabriqués avec des ingrédients de qualité, garantissant des résultats durables et impeccables.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Abordable:',
        description: 'Nous proposons des cosmétiques de premier choix à des prix accessibles à tous, sans compromis sur l\'excellence.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Livraison rapide:',
        description: 'Recevez vos produits préférés rapidement à votre porte, afin de ne jamais attendre pour améliorer votre routine beauté.',
        icon: TruckIcon,
    },
]

export default function Whyus() {
    return (
        <div className="overflow-hidden bg-white pb-32 sm:pb-40">
            <div className="flex pb-10 sm:pb-14 items-center sm:justify-center px-4 sm:px-6 lg:px-0">
                <h2 id="trending-heading" className="font-abhaya capitalize text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a]">
                    Ce qui nous distingue
                </h2>
            </div>

            <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <div className='flex items-center mb-16'>
                                <Image src="/star.svg" width={35} height={37} alt='why us icon' />
                                <p className="font-abhaya capitalize ml-3 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Votre référence de Beauté</p>
                            </div>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline text-lg font-semibold text-[#1a1a1a]">
                                            <feature.icon aria-hidden="true" className="absolute left-0 h-7 w-7 text-[#FFCAE8]" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline text-[#666]">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="lg:flex items-start justify-end lg:order-first">
                        <img
                            alt="Product screenshot"
                            src="/why-us.png"
                            width={2432}
                            height={1442}
                            className="w-full max-w-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
