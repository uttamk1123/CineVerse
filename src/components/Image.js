import React from 'react'
import placeholder from '../assets/images/placeholder.jpg'
export const Image = ({ src, title }) => {
    return (
        <img
            src={src}
            alt={title}
            onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback fails
                e.target.src = placeholder;
            }}
        />
    )
}
