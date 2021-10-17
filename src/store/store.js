import { ref, computed } from 'vue'

const ipify = ref('')
export function useIpify() {
    const setIpify = (value) => {
        ipify.value = value
    }

    const loadIpify = async () => {
        const response = await fetch(`https://api.ipify.org?format=json`)
        const data = await response.json()
        ipify.value = data.ip 
    }

    return {
        ipify: computed(() => ipify.value),
        loadIpify,
        setIpify,
    }
}

const geolocation = ref({})
const loading = ref(true)
export function useGeolocation() {
    const loadGeolocationDetails = async () => {
        loading.value = true

        const ipifyValue = ipify.value
        const apiKey = import.meta.env.VITE_GEOLOCATION_API_KEY

        const isIp = isCharacterALetter(ipify.value.charAt(0))
        const query = isIp ? `domain=${ipifyValue}` : `ipAddress=${ipifyValue}`

        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${query}`)
            const data = await response.json()
            geolocation.value = formatGeolocationDetails(data)
        } catch(error) {
            return false
        }
        
        loading.value = false
        return true
    }

    const isCharacterALetter = (char) => {
        return char.toLowerCase() != char.toUpperCase()
    }

    const formatGeolocationDetails = (geolocationDetails) => {
        const ip = geolocationDetails.ip
        const location = geolocationDetails.location
        const formattedLocation = `${location.region}, ${location.country} ${location.postalCode}`.trim()
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