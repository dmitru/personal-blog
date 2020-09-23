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

export const ApifiniProject = () => {
  const data = useStaticQuery(graphql`
    query {
      appDemo: file(absolutePath: { regex: "/projects/apifini.jpg/" }) {
        childImageSharp {
          fixed(width: 2000) {
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
      fixed: data.appDemo.childImageSharp.fixed,
    },
  ]

  return (
    <div
      className="slider-dark w-full text-white"
      style={{
        background:
          "linear-gradient(135deg, #0cb4ce 0%, #006cff 30%, #fa12fe 145%)",
      }}
    >
      <Swiper navigation parallax pagination={{ clickable: true }} keyboard>
        <div className="parallax-bg" />
        <SwiperSlide>
          <div className="flex flex-row mx-12 lg:mx-24 my-8">
            <div className="max-w-sm mr-3">
              <h2 className="text-6xl inline-block mr-4 mt-0 mb-0">Apifini</h2>
              <p className="text-xl">
                Platform for crowdsourced ICO research (now discontinued).
              </p>
              <p className="mt-8 mb-2">
                <strong>My roles:</strong> <br />
                Front-end development, UX & UI design, cloud deployment.
              </p>
              <p className="mt-0">
                <strong>Tech stack:</strong> <br />
                React, TypeScript, Redux, Node, AWS, MongoDB
              </p>
              <div className="mt-8">
                <a
                  href="https://Apifini.com"
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
      </Swiper>
    </div>
  )
}
