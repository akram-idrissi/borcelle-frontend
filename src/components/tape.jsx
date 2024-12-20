'use client'


export default function Tape({sticky=false}) {

    return (
        <div className={`bg-[#ffe4f3] ${sticky && "sticky"} top-0 z-50`}>
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                <p className="flex-1 text-center text-sm font-bold lg:flex-none">
                    Livraison Gratuite à partir de 350 DH
                </p>
            </div>
        </div>
    )
}
