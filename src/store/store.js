import { ref, computed } from 'vue'

const ip = ref('')
export function useIp() {
    const setIp = (ipValue) => {
        ip.value = ipValue
    }

    const loadIp = async () => {
        const response = await fetch(`https://api.ipify.org?format=json`)
        const data = await response.json()
        ip.value = data.ip 
    }

    return {
        ip: computed(() => ip.value),
        loadIp,
        setIp,
    }
}

const geolocation = ref({})
const loading = ref(true)
export function useGeolocation() {
    const loadGeolocationDetails = async () => {
        loading.value = true

        const ipAddress = ip.value
        const apiKey = import.meta.env.VITE_GEOLOCATION_API_KEY

        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
            const data = await response.json()
            const details = formatGeolocationDetails(data)
            geolocation.value = details
            loading.value = false
        } catch(error) {
            return false
        }        

        return true
    }

    const formatGeolocationDetails = (geolocationDetails) => {
        const ip = geolocationDetails.ip
        const location = geolocationDetails.location
        const formattedLocation = `${location.region}, ${location.country} ${location.postalCode}`
        const timezone = `UTC${location.timezone}`
        const isp = geolocationDetails.isp
        const latlng = [location.lat, location.lng]

        return {
            ipAddress: ip,
            location: formattedLocation,
            timezone: timezone,
            isp: isp,
            latlng: latlng
        }
    }

    return {
        geolocation: computed(() => geolocation.value),
        loading: computed(() => loading.value),
        loadGeolocationDetails,
    }
}