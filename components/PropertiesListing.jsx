import { fetchProperties } from '@/utils/requests'
import PropertyCard from './PropertyCard'
import Link from 'next/link'

const PropertiesListing = async () => {
    let properties = await fetchProperties()
    const recentProperties = properties?.sort(() => Math.random() - Math.random()).slice(0, 5)
    return (
        <>
            <div className="flex flex-col justify-center items-center my-7">
                <h1 className='text-blue-500 text-5xl mb-3 font-bold py-5'>Recent Properties</h1>
                <div className='flex justify-center items-center'>
                    {recentProperties?.map((value, index) => (
                        <PropertyCard values={value} key={index} />
                    ))}
                </div>
            </div>
            <Link href={'/properties'} className='text-white opacity-80 w-fit p-3 rounded-md hover:opacity-100 bg-black mx-auto my-0 flex mb-5'>View all properties</Link>
        </>
    )
}

export default PropertiesListing