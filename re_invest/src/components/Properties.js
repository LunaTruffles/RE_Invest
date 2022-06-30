import React from 'react'
import { useSelector } from 'react-redux'
import Property from './Property'



export default function Properties() {
  const properties = useSelector((state) => state.properties)

  return (
    <ul>
      { properties.map(property => {
        return <Property property={property} /> 
      })}
    </ul>
  )
}
