import Hero from "@/components/Hero"
import Infoboxes from "@/components/Infoboxes"
import PropertiesListing from "@/components/PropertiesListing"

const HomePage = async() => {
  return (
    <>
      <Hero />
      <Infoboxes />
      <PropertiesListing />
    </>
  )
}

export default HomePage