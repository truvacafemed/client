'use client'
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function CincinatiMap() {

    const mapRef = React.useRef(null);

    useEffect(()=> {
        const initMap = async () => {
          const loader = new Loader({
            apiKey: "AIzaSyCqfOcJuT-faeZUpWwQGcie_ahh50M-eIE",
            version: 'weekly',
          });
        
          const google = await loader.load();
        
          const position = {
            lat: 39.20197559851187,
            lng: -84.37125224304803
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
    <div style={{ height:'300px',width:'300px' }} ref={mapRef} className='mt-12' />
  )
}
