import Image from "next/image"
import Link from "next/link"
import bed from "@/assets/images/bed.svg"
import bath from "@/assets/images/bath.svg"
import measure from "@/assets/images/measure.svg"

const PropertyCard = ({values}) => {
  return (
    <div className="flex flex-col shadow-md rounded-lg w-3/4 lg:w-2/12 m-4 grow bg-white">
        <div className="relative flex">
            <p className="absolute top-2 right-2 bg-white text-blue-500 p-2 rounded-md">
                {values?.rates?.weekly ? `$${values?.rates?.weekly.toLocaleString()}/wk` : `$${values?.rates?.monthly.toLocaleString()}/mo` }
                </p>
            <Image src={`/properties/${values.images[0]}`} alt="property-img" className="w-full h-auto rounded-t-lg" width={0} height={0} sizes="100vw" priority/>
        </div>
        <div className="flex flex-col m-3">
            <div className="flex flex-col">
                <p className="text-gray-500">{values?.type}</p>
                <h1>{values?.name}</h1>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex items-center justify-center gap-5">
                    <p className="text-gray-500 flex gap-2"><Image src={bed} alt="beg-img" width={15}/>{values?.beds} Beds</p>
                    <p className="text-gray-500 flex gap-2"><Image src={bath} alt="beg-img" width={15}/>{values?.baths} Baths</p>
                    <p className="text-gray-500 flex gap-2"><Image src={measure} alt="beg-img" width={15}/>{values?.square_feet} sqft</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                <p className="text-green-500">{values?.rates?.nightly ? "Nightly" : "" }</p>
                    <p className="text-green-500">{values?.rates?.weekly ? "Weekly" : "" }</p>
                    <p className="text-green-500">{values?.rates?.monthly ? "Monthly" : "" }</p>
                </div>
            </div>
            <hr className="mb-2"/>
            <div className="flex w-full justify-between items-center my-2">
                <p className="text-red-400">{values?.location?.city} {values?.location?.state}</p>
                <Link href={`/properties/${values._id}`} className="bg-blue-500 px-3 py-1 text-white rounded-md opacity-80 hover:opacity-100">Details</Link>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard