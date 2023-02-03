import React from 'react'
import Button from '../components/Button'

export default function CreateListing() {
  return (
    <section className='max-w-md mb-6 mx-auto px-3'>
        <h1 className='text-3xl font-bold text-center mt-6'>
            Create a Listing
        </h1>

        <div className='mb-4'>
            <p className='mt-6 text-lg font-semibold'>Sell / Rent</p>
            <div className='flex space-x-4'>
                <Button title='Sell' back='bg-white' text='text-black' />
                <Button title='Rent' back='bg-slate-600' />
            </div>
        </div>
        

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Name</p>
            <input 
                type="text"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Name'
            />
        </div>

        <div className='flex mb-4'>
            <div className=''>
            <p className='text-lg font-semibold'>Beds</p>
            <input 
                type="number"
                value="1"
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>

            <div className=''>
            <p className='text-lg font-semibold'>Bathrooms</p>
            <input 
                type="number"
                value="1"
                className='text-center w-2/3 rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
            />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Parking Spot</p>
            <div className='flex space-x-4'>
                <Button title='Yes' back='bg-white' text='text-black' />
                <Button title='No' back='bg-slate-600' />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Furnished</p>
            <div className='flex space-x-4'>
                <Button title='Yes' back='bg-white' text='text-black' />
                <Button title='No' back='bg-slate-600' />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Address</p>
            <textarea 
                type="text"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Address'
            >
            </textarea>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Description</p>
            <textarea 
                type="text"
                className='w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'
                placeholder='Description'
            >
            </textarea>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Offer</p>
            <div className='flex space-x-4'>
                <Button title='Yes' back='bg-white' text='text-black' />
                <Button title='No' back='bg-slate-600' />
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='flex  items-center space-x-4'>
                <input type="number" 
                    value="1"
                    className='text-center w-full rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'                    
                />
                <p className='w-full'>$ / Month</p>
            </div>
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Discounted Price</p>
            <input type="number" 
                value="1"
                className='text-center w-[50%] rounded text-lg px-4 py-2 border-gray-400 focus:border-gray-400 outline-none'                    
            />
        </div>

        <div className='mb-4'>
            <p className='text-lg font-semibold'>Images</p>
            <p className='text-gray-600 text-sm'>The first image will be the cover (Max 6).</p>
            <input
                type="file"
                className="w-full bg-white px-3 py-2 text-gray-600 border-gray-400 border rounded focus:border-gray-400 active:border-gray-400"
                accept='.jpg,.png,.jpeg'
                multiple
            />
        </div>

        <div className='mb-4 mt-8'>
            <Button title="Create Listing" back="bg-blue-600" />
        </div>

    </section>
  )
}
