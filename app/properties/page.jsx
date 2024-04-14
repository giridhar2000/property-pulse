import { fetchProperties } from '@/utils/requests'
import PropertyCard from "@/components/PropertyCard"

const propertiesPage = async () => {
  const properties = await fetchProperties()
  return (
    <section>
      {properties.length === 0 ?
        <h1>No properties</h1>
        :
        <div className="flex flex-col flex-wrap flex-1 mx-2 mb-2 lg:flex-row">
          {properties?.map((value) => {
            return (
              <PropertyCard values={value} key={value._id} />
            )
          })}
        </div>
      }
    </section>
  )
}

export default propertiesPage