import Select from "./Select"

const Hero = () => {
  return (
    <section className="bg-blue-700 flex flex-col">
        <div className="flex items-center flex-col pt-20 pb-10">
            <h1 className="text-6xl text-white font-bold">Find The Perfect Rental</h1>
            <p className="text-white pt-5 pb-5">Discover the perfect property that suits your needs.</p>
        </div>
        <div className="flex pb-10 mx-auto my-0 gap-5 items-center">
          <input className="px-3 py-2 rounded-md outline-none" type="text" placeholder="Enter Loaction (City, State, Country, etc)" />
          <Select options={['Option1', 'Option2']} placeholder={'Select an Option'}/>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md">Search</button>
        </div>
    </section>
  )
}

export default Hero