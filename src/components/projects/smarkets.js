import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "react-bnb-gallery/dist/style.css"
import { FaFacebook, FaLink, FaReddit } from "react-icons/fa"
import ReactPlayer from "react-player"
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./projects.css"
import { SingleImageGallery } from "./single-image-gallery"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Parallax])

export const SmarketsProject = () => {
  const data = useStaticQuery(graphql`
    query {
      appDemo1: file(absolutePath: { regex: "/projects/smarkets-0.jpg/" }) {
        childImageSharp {
          fixed(width: 1600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appDemo2: file(absolutePath: { regex: "/projects/smarkets-1.jpg/" }) {
        childImageSharp {
          fixed(width: 1140) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          title
          author {
            name
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const galleryImgs = [
    {
      fixed: data.appDemo1.childImageSharp.fixed,
    },
    { fixed: data.appDemo2.childImageSharp.fixed },
  ]

  return (
    <div
      className="slider-dark w-full text-white"
      style={{
        background: "linear-gradient(-45deg, #296536 0%, #031d05 100%)",
      }}
    >
      <Swiper navigation parallax pagination={{ clickable: true }} keyboard>
        <SwiperSlide>
          <div className="flex flex-row mx-12 lg:mx-24 my-8">
            <div className="max-w-sm mr-3">
              <h2 className="text-6xl inline-block mr-4 mt-0 mb-0">Smarkets</h2>
              <p className="text-xl">
                Real-time betting exchange for mobile and web.
              </p>
              <p className="mt-8 mb-2">
                <strong>My roles:</strong> <br />
                Front-end development, web and react-native
              </p>
              <p className="mt-0">
                <strong>Tech stack:</strong> <br />
                React, Redux, react-native
              </p>
              <div className="mt-8">
                <a
                  href="https://smarkets.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mr-4"
                >
                  <FaLink className="mr-2 inline-block" />
                  Website
                </a>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex">
              <SingleImageGallery
                imgs={galleryImgs}
                style={{
                  height: "400px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        {/* My roles */}
        <SwiperSlide>
          <div className=" mx-12 lg:mx-24 my-10">
            <h3 className="text-4xl  inline-block mr-4  mt-0 mb-0">My roles</h3>
            <p className="text-lg max-w-xl">
              It's my pet project, where I did everything myself – from product
              and UX design to implementing and deploying a complete SaaS
              product.
            </p>

            <p className="text-lg">A few highlights:</p>
            <ul className="text-lg max-w-lg">
              <li>
                Reverse-engineered a few existing solutions, figured out a good
                greedy algorithm to fill the shape with words
              </li>
              <li>
                Efficiently implemented this algorithm in Rust / WebAssembly
                running in a WebWorker to keep the UI responsive.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Gallery */}
        {galleryImgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center my-6">
              <SingleImageGallery
                index={index}
                imgs={galleryImgs}
                style={{
                  height: "400px",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
