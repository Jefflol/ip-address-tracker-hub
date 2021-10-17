# [IP Address Tracker Hub](https://ip-address-tracker-hub-jefflol.vercel.app/)
IP Address Tracking web application based on [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)

## Demo
[https://ip-address-tracker-hub-jefflol.vercel.app/](https://ip-address-tracker-hub-jefflol.vercel.app/)

## Features
* View the optimal layout for each page depending on their device's screen size
* See their own IP address on the map on the initial page load
* Search for any IP addresses or domains and see the key information and location
* State management with Vue composition API

## Running locally
To run this webapp locally, you will need a Mapbox API Key from [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/) to use Leaflet map and a Ipify API Key from [https://www.ipify.org](https://www.ipify.org). You can then set the VITE_ACCESS_TOKEN for Leaflet and VITE_GEOLOCATION_API_KEY for Ipify in a `.env.local` file.