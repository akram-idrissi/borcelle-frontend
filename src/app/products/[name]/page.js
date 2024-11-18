  'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

import Tape from '@/components/tape'
import Navbar from '@/components/navbar'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'
import { getProductById } from '@/services/api';


import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'



const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]
const categoriesURI = "/categories";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const id = useParams()["name"];
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const result = await getProductById(id);
        setLoading(false);
        if (result.error) {
          setError(result.error);
        } else {
          setProduct(result.data);
        }
      } catch (err) {
        setLoading(false);
        setError("An error occurred while fetching the product.");
      }
    };

    fetchProduct(id);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>; 

  return (
    <div className="bg-white">

      {/*<Tape />*/}
      <Navbar />

          <div className="sticky top-0 z-50 bg-white mt-10">
            <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ol role="list" className="border-b flex items-center space-x-4 py-4">
                  <li>
                    <div className="flex items-center">
                      <a href='/' className="capitalize mr-4 text-sm font-medium text-gray-900">
                        Accueil
                      </a>
                      <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                        <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                      </svg>
                    </div>
                  </li>
                <li className="text-sm">
                  <Link href={`${categoriesURI}/${product.category}`} aria-current="page" className="capitalize font-medium text-gray-500 hover:text-gray-600">
                    {product.category}
                  </Link>
                </li>
                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                        <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                      </svg>
                <li className="text-sm">
                  <span aria-current="page" className="capitalize font-medium text-gray-500 hover:text-gray-600">
                    {product.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>

          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 pt-10">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {/* Product */}
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <TabGroup className="flex flex-col-reverse">
                  {/* Image selector */}
                  <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    <TabList className="grid grid-cols-4 gap-6">
                      {product.imageSrc.map((image, index) => (
                        <Tab
                          key={index}
                          className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        >
                          <span className="sr-only">name</span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img alt="" src={image} className="h-full w-full object-cover object-center" />
                          </span>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-black"
                          />
                        </Tab>
                      ))}
                    </TabList>
                  </div>

                  <TabPanels className="aspect-h-1 aspect-w-1 w-full">
                    {product.imageSrc.map((image, index) => (
                      <TabPanel key={index}>
                        <img
                          alt="image"
                          src={image}
                          className="h-full w-full object-cover object-center sm:rounded-lg"
                        />
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                {/* Product info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>

                  <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">45 MAD</p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-3">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              product.rating > rating ? 'text-black' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0',
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="sr-only">Description</h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className="space-y-6 text-base text-gray-700"
                    />
                  </div>

                  <form className="mt-6">
                    

                    <div className="mt-10 flex">
                      <button
                        type="submit"
                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                      >
                        Add to bag
                      </button>

                      <button
                        type="button"
                        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      >
                        <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
                        <span className="sr-only">Add to favorites</span>
                      </button>
                    </div>
                  </form>

                  <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                      Additional details
                    </h2>

                    
                  </section>
                </div>
              </div>

              <Reviews />

              <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
                <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                  Customers also bought
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  {relatedProducts.map((product) => (
                    <div key={product.id}>
                      <div className="relative">
                        <div className="relative h-72 w-full overflow-hidden rounded-lg">
                          <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="relative mt-4">
                          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                          />
                          <p className="relative text-lg font-semibold text-white">{product.price}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <a
                          href={product.href}
                          className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                        >
                          Add to bag<span className="sr-only">, {product.name}</span>
                        </a>
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
