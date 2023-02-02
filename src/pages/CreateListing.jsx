import React from 'react'
import Button from '../components/Button'

export default function CreateListing() {
  return (
    <section className='max-w-md mx-auto px-3'>
        <h1 className='text-3xl font-bold text-center mt-6'>
            Create a Listing
        </h1>

        <p className='mt-6 text-lg font-semibold'>Sell / Rent</p>
        <div className='flex space-x-4'>
            <Button title='Sell' back='bg-white' text='text-black' />
            <Button title='Rent' back='bg-slate-600' />
        </div>

        <p className='text-lg font-semibold'>Name</p>
        <input 
            type="text"
            className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            placeholder='Name'
        />

        <div className='flex'>
            <div className=''>
            <p className='mt-6 text-lg font-semibold'>Beds</p>
            <input 
                type="number"
                value="1"
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>

            <div className=''>
            <p className='mt-6 text-lg font-semibold'>Bathrooms</p>
            <input 
                type="number"
                value="1"
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>
        </div>

        <p className='mt-6 text-lg font-semibold'>Parking Spot</p>
        <div className='flex space-x-4'>
            <Button title='Yes' back='bg-white' text='text-black' />
            <Button title='No' back='bg-slate-600' />
        </div>

        <p className='mt-6 text-lg font-semibold'>Furnished</p>
        <div className='flex space-x-4'>
            <Button title='Yes' back='bg-white' text='text-black' />
            <Button title='No' back='bg-slate-600' />
        </div>

        <p className='text-lg font-semibold'>Address</p>
        <textarea 
            type="text"
            className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            placeholder='Address'
        >
        </textarea>

        <p className='text-lg font-semibold'>Description</p>
        <textarea 
            type="text"
            className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            placeholder='Description'
        >
        </textarea>

        <p className='mt-6 text-lg font-semibold'>Offer</p>
        <div className='flex space-x-4'>
            <Button title='Yes' back='bg-white' text='text-black' />
            <Button title='No' back='bg-slate-600' />
        </div>

    </section>
  )
}
