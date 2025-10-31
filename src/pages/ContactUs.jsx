'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export  function ContactUs() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-[#fdf6e3]">
      {/* Background Blur Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{ background: 'linear-gradient(to top right, #a47551, #5e4636)' }}
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-[#3b2f2f]">Contact Us</h2>
        <p className="mt-2 text-lg text-[#5e4636]">Have a question or want to work with us? Let’s connect.</p>
      </div>

      {/* Form */}
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {[
            { label: "First name", name: "first-name", autoComplete: "given-name" },
            { label: "Last name", name: "last-name", autoComplete: "family-name" }
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-semibold text-[#3b2f2f]">
                {field.label}
              </label>
              <div className="mt-2.5">
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  autoComplete={field.autoComplete}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#3b2f2f] outline outline-1 outline-[#a47551] focus:outline-2 focus:outline-[#5e4636]"
                />
              </div>
            </div>
          ))}

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-[#3b2f2f]">Company</label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#3b2f2f] outline outline-1 outline-[#a47551] focus:outline-2 focus:outline-[#5e4636]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-[#3b2f2f]">Email</label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#3b2f2f] outline outline-1 outline-[#a47551] focus:outline-2 focus:outline-[#5e4636]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-[#3b2f2f]">Phone number</label>
            <div className="mt-2.5 flex rounded-md bg-white outline outline-1 outline-[#a47551] focus-within:outline-2 focus-within:outline-[#5e4636]">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="appearance-none rounded-l-md py-2 pl-3 pr-8 text-sm text-[#5e4636] bg-white"
                >
                  <option>IN</option>
                  <option>US</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-[#5e4636] pointer-events-none" />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="w-full rounded-r-md py-2 px-3 text-base text-[#3b2f2f] focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-[#3b2f2f]">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[#3b2f2f] outline outline-1 outline-[#a47551] focus:outline-2 focus:outline-[#5e4636]"
                defaultValue={''}
              />
            </div>
          </div>

          {/* Switch */}
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-200 ease-in-out ring-1 ring-inset ring-[#5e4636]"
                style={{ backgroundColor: agreed ? '#a47551' : '#e2e2e2' }}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-[#5e4636] transition group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-[#5e4636]">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#5e4636] hover:text-[#a47551]">privacy&nbsp;policy</a>.
            </Label>
          </Field>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-[#5e4636] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a47551] focus:outline focus:outline-2 focus:outline-[#5e4636]"
          >
            Let’s Talk
          </button>
        </div>
      </form>
    </div>
  )
}
