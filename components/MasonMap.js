'use client'
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function MasonMap() {

  return (
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.2109833911427!2d-84.32016240669888!3d39.30614079851494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405744b09179a9%3A0xe5246dd7b35632fe!2sTruva%20Turkish%20Kitchen%20%7C%20Mason!5e0!3m2!1str!2str!4v1743866069759!5m2!1str!2str"
          width="300" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}
