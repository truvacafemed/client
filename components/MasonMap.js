'use client'
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function MasonMap() {

    const mapRef = React.useRef(null);

    useEffect(()=> {
        const initMap = async () => {
          const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
            version: 'weekly',
          });
        
          const google = await loader.load();
        
          const position = {
            lat: 39.306290301652005,
            lng: -84.31525931641593
          };
        
          const mapOptions = {
            center: position,
            zoom: 17,
            mapId: 'MY_NEXTJS_MAPID'
          };
        
          const map = new google.maps.Map(mapRef.current, mapOptions);
        };
        
        initMap();
      },[])

  return (
    <div style={{ height:'600px' }} ref={mapRef} className='mt-12' />
  )
}
