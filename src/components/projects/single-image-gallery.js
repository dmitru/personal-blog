import Img from "gatsby-image"
import React, { useState } from "react"
import ReactBnbGallery from "react-bnb-gallery"
import "react-bnb-gallery/dist/style.css"
import "./projects.css"

export const SingleImageGallery = ({ imgs, index, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
        className="img-gallery-btn w-full"
      >
        <Img
          fixed={imgs[index || 0].fixed}
          imgStyle={{
            objectFit: "contain",
          }}
          {...props}
        />
      </button>
      <ReactBnbGallery
        keyboard
        show={isOpen}
        photos={imgs.map(({ fixed, title }) => ({
          photo: fixed.src,
          caption: title,
        }))}
        onClose={() => setIsOpen(false)}
        activePhotoIndex={index || 0}
      />
    </>
  )
}
