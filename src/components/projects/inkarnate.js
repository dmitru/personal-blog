import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "react-bnb-gallery/dist/style.css"
import { FaLink, FaReddit } from "react-icons/fa"
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

export const InkarnateProject = () => {
  const data = useStaticQuery(graphql`
    query {
      inkarnate: file(
        absolutePath: { regex: "/projects/inkarnate-editor.jpg/" }
      ) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inkarnate4: file(
        absolutePath: { regex: "/projects/inkarnate-editor-2.jpg/" }
      ) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inkarnate3: file(
        absolutePath: { regex: "/projects/inkarnate-editor-3.jpg/" }
      ) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inkarnate2: file(
        absolutePath: { regex: "/projects/inkarnate-editor-4.jpg/" }
      ) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inkarnate5: file(
        absolutePath: { regex: "/projects/inkarnate-editor-5.jpg/" }
      ) {
        childImageSharp {
          fixed(width: 1400) {
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
    data.inkarnate.childImageSharp.fixed,
    data.inkarnate2.childImageSharp.fixed,
    data.inkarnate3.childImageSharp.fixed,
    data.inkarnate4.childImageSharp.fixed,
    data.inkarnate5.childImageSharp.fixed,
  ]

  return (
    <div className="w-full bg-gray-800 text-white">
      <Swiper navigation parallax pagination={{ clickable: true }}>
        <div
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://inkarnate.com/static/media/auth-bg.0e19dac7.jpg)",
          }}
        />
        <SwiperSlide>
          <div className="flex flex-row mx-12 lg:mx-24 my-6">
            <div className="max-w-sm">
              <h2 className="text-6xl font-semibold inline-block mr-4 mb-0">
                Inkarnate
              </h2>
              <p className="text-xl">
                Best-in-class online fantasy maps editor, community and art
                platform for D&D and tabletop enthusiasts.
              </p>
              <p className="mt-8 mb-2">
                <strong>My roles:</strong> <br />
                full-stack web engineer, product and UX design.
              </p>
              <p className="mt-0">
                <strong>Tech stack:</strong> <br />
                TypeScript, React, Rust, Rails.
              </p>
              <div className="mt-8">
                <a
                  href="https://inkarnate.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mr-4"
                >
                  <FaLink className="mr-2 inline-block" />
                  Website
                </a>
                <a
                  href="https://www.reddit.com/r/inkarnate"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaReddit className="mr-2 inline-block" />
                  Reddit
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
          <div className=" mx-12 lg:mx-24 my-6">
            <h3 className="text-4xl font-semibold inline-block mr-4 mb-0">
              My roles
            </h3>
            <p className="text-lg max-w-xl">
              Joined the small remote team to help rewrite their core product.
              Worked together with stakeholders, designer, artists and a backend
              engineer to help craft a great user experience.
            </p>
            <ul className="text-lg">
              <li>
                Co-designed and implemented the next version of the editor app
              </li>
              <li>
                Helped migrating tends of thousands user accounts to the new
                system
              </li>
              <li>
                Enabled massive company growth and set it up for new business
                directions
              </li>
              <li>
                Worked with Early Access users group to gather feedback and
                improve the app
              </li>
              <li>
                Implemented advanced Canvas rendering techniques and tuned
                client-side performance
              </li>
            </ul>
          </div>
        </SwiperSlide>
        {/* Demo */}
        <SwiperSlide>
          <div className="flex items-center justify-center my-6">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=gNy8iIasy6w"
              controls
            />
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
