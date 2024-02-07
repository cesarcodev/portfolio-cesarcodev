import React from 'react'

export const Code = (props) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        {...props} 
        strokeWidth="2"
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round"
        strokeLinejoin="round"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
  )
}
