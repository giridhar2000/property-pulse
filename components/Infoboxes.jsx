import Infobox from "./Infobox"

const Infoboxes = () => {
    return (
        <div className="flex items-center mx-auto my-0 gap-4 justify-center mt-5">
            <Infobox heading={'For Renters'} buttonInfo={{
                link: '/properties',
                buttonName: 'Browse Properties',
                bgcolor: 'bg-black'
            }}>
                Find your dream rental property. Bookmark properties and contact owners.
            </Infobox>

            <Infobox heading={'For Property Owners'} buttonInfo={{
                link: '/properties/add',
                buttonName: 'Add Properties',
                bgcolor: 'bg-blue-500'
            }}
                backgroundColor={'bg-blue-200'}>
                List your properties and reach potential tenants. Rent as an Airbnb or long term.
            </Infobox>
        </div>
    )
}

export default Infoboxes