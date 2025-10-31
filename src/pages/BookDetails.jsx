'use client'

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import {books} from '../books' // adjust path if needed

const reviews = { href: '#', average: 4, totalCount: 245 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BookDetails() {
  const { id } = useParams()
  const book = books.find((b) => b.id === id)

  if (!book) {
    return <div className="p-6 text-center text-red-500">Book not found.</div>
  }

  const [selectedFormat, setSelectedFormat] = useState(book.formats[0])

  return (
    <div className="bg-[#fdf6e3]">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {book.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-[#3b2f2f]">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    className="h-5 w-4 text-[#5e4636]"
                    aria-hidden="true"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={book.href} className="font-medium text-[#5e4636] hover:text-[#3b2f2f]">
                {book.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image Gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img src={book.images[0].src} alt={book.images[0].alt} className="hidden w-full rounded-lg object-cover lg:block" />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img src={book.images[1].src} alt={book.images[1].alt} className="aspect-3/2 w-full rounded-lg object-cover" />
            <img src={book.images[2].src} alt={book.images[2].alt} className="aspect-3/2 w-full rounded-lg object-cover" />
          </div>
          <img src={book.images[3].src} alt={book.images[3].alt} className="aspect-4/5 w-full object-cover sm:rounded-lg lg:aspect-auto" />
        </div>

        {/* Product Info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-[#3b2f2f] sm:text-3xl">{book.name}</h1>
          </div>

          {/* Format and Buy */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-[#3b2f2f]">{book.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-[#3b2f2f]' : 'text-[#d9cfc2]',
                      'h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
                <a href={reviews.href} className="ml-3 text-sm font-medium text-[#a47551] hover:text-[#8c5f40]">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Format Selector */}
              <div>
                <h3 className="text-sm font-medium text-[#3b2f2f]">Format</h3>
                <RadioGroup value={selectedFormat} onChange={setSelectedFormat} className="mt-4 flex gap-4">
                  {book.formats.map((format) => (
                    <Radio
                      key={format.name}
                      value={format}
                      className="cursor-pointer rounded-md border border-[#5e4636] px-4 py-2 text-sm font-medium text-[#3b2f2f] hover:bg-[#f0e9db] focus:outline-none"
                    >
                      {format.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 w-full rounded-md bg-[#a47551] px-8 py-3 text-base font-medium text-white hover:bg-[#8c5f40]"
              >
                Add to Bag
              </button>
            </form>
          </div>

          {/* Description */}
          <div className="py-10 lg:col-span-2 lg:pr-8">
            <div className="space-y-6">
              <p className="text-base text-[#5e4636]">{book.description}</p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-[#3b2f2f]">Highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-[#5e4636]">
                {book.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-[#3b2f2f]">Details</h3>
              <p className="mt-4 text-sm text-[#5e4636]">{book.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
