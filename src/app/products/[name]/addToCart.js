'use client'

import { addToCart } from '@/services/cart';
import { HeartIcon } from '@heroicons/react/24/outline'


const handleCart = (event, product, size) => {
  event.preventDefault();
  let p = { 'id': product._id, 'href': `/products/${product._id}`, 'title': product.title, 'image': product.imageSrc[0], 'category': product.category, 'price': 45, 'size': size }
  addToCart(product._id, p)
};

export default function AddToCart({ product, size="Small" }) {

  return (
    <form className="mt-6">
      <div className="mt-10 flex">
        <button
          onClick={(event) => handleCart(event, product, size)}
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to cart
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
  )
}
