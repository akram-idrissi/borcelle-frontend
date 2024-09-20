'use client'

import { ChevronDownIcon } from '@heroicons/react/20/solid'


const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']


export default function Tape() {

    return (
        <div className="bg-[#ffe4f3] sticky top-0 z-50">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <p className="flex-1 text-center text-sm font-bold lg:flex-none">
                    Livraison Gratuite à partir de 350 DH
                </p>
            </div>
        </div>
    )
}
