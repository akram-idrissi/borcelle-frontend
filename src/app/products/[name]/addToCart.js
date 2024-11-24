'use client'

import { HeartIcon } from '@heroicons/react/24/outline'


export default function AddToCart() {

  return (
    <form className="mt-6">
      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to card
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
