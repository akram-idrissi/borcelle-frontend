'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation';

import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

import Tape from '@/components/tape'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'


const filters = [
  {
    id: 'color',
    name: 'Couleur',
    options: [
      { value: 'blanc', label: 'Blanc' },
      { value: 'beige', label: 'Beige' },
      { value: 'bleu', label: 'Bleu' },
      { value: 'marron', label: 'Marron' },
      { value: 'vert', label: 'Vert' },
      { value: 'violet', label: 'Violet' },
    ],
  },
  {
    id: 'category',
    name: 'Categories',
    options: [
      { value: 'yeux', label: 'Yeux' },
      { value: 'visage', label: 'Visage' },
      { value: 'levres', label: 'Lévres' },
      { value: 'accessoires', label: 'Accéssoires' },
    ],
  },
  {
    id: 'sizes',
    name: 'Tailles',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]
const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '/produits/product-1',
    price: '$256',
    description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: '/categories/yeux.png',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '/produits/product-1',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/categories/visages.png',
    //imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]


export default function CategoryListing() {
  const category = usePathname().split("/").slice(-1).pop();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <Tape />
      <Navbar />

      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure key={section.name} as="div" className="border-t border-gray-200 pb-4 pt-4">
                  <fieldset>
                    <legend className="w-full px-2">
                      <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                        <span className="text-sm font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 rotate-0 transform group-data-[open]:-rotate-180"
                          />
                        </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel className="px-4 pb-2 pt-4">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`${section.id}-${optionIdx}-mobile`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}-mobile`}
                              className="ml-3 text-sm text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="sticky top-0 z-30 bg-white mt-10">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol role="list" className="border-b flex items-center space-x-4 py-4">
              <li>
                <div className="flex items-center">
                  <a href={`/categorie/${category}`} className="capitalize mr-4 text-sm font-medium text-gray-900">
                    categories
                  </a>
                  <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="capitalize font-medium text-gray-500 hover:text-gray-600">
                {category}
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10 pt-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Nouveautés</h1>
          <p className="mt-4 text-base text-gray-500">
            Découvrez nos dernières nouveautés en soins visage, spécialement conçues pour sublimer votre peau avec des formules naturelle et améliorées !
          </p>
        </div>

        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filters</h2>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center lg:hidden"
            >
              <span className="text-sm font-medium text-gray-700">Filtres</span>
              <PlusIcon aria-hidden="true" className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
            </button>

            <div className="hidden lg:block">
              <form className="space-y-10 divide-y divide-gray-200">
                {filters.map((section, sectionIdx) => (
                  <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>

          <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500">{product.options}</p>
                      <p className="text-base font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
