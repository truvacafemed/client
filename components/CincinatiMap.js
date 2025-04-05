'use client'
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function CincinatiMap() {
  return (
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8058870297746!2d-84.37383762289241!3d39.20185927166077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884053a10cae0229%3A0xbb21b4b0a545b037!2sTruva%20Turkish%20Kitchen%20%7C%20Kenwood!5e0!3m2!1str!2str!4v1743866195863!5m2!1str!2str"
          width="300" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}
