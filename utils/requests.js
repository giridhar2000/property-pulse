const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
async function fetchProperties() {
    try {
        if(!apiDomain){
            return []
        }
        const res = await fetch(`${apiDomain}/properties`, {cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}

async function fetchProperty(id) {
    try {
        if(!apiDomain){
            return []
        }
        const res = await fetch(`${apiDomain}/properties/${id}`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (err) {
        throw new Error(err)
    }
}
export { fetchProperties, fetchProperty }