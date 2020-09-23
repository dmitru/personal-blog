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

export const WordcloudyProject = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(absolutePath: { regex: "/projects/wordcloudy-cover.jpg/" }) {
        childImageSharp {
          fixed(width: 1300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appDemo1: file(absolutePath: { regex: "/projects/wordcloudy-4.jpg/" }) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appDemo2: file(absolutePath: { regex: "/projects/wordcloudy-1.jpg/" }) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appDemo3: file(absolutePath: { regex: "/projects/wordcloudy-3.jpg/" }) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      appDemo4: file(absolutePath: { regex: "/projects/wordcloudy-2.jpg/" }) {
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
    {
      fixed: data.appDemo1.childImageSharp.fixed,
      title: "Editor, fonts customization",
    },
    { fixed: data.appDemo2.childImageSharp.fixed, title: "Landing page" },
    {
      fixed: data.appDemo3.childImageSharp.fixed,
      title: "Editor, layout panel",
    },
    {
      fixed: data.appDemo4.childImageSharp.fixed,
      title: "Profile page, saved designs",
    },
  ]

  return (
    <div className="w-full bg-gray-800 text-white">
      <Swiper navigation parallax pagination={{ clickable: true }} keyboard>
        <div className="parallax-bg bg-blue-800" />
        <SwiperSlide>
          <div className="flex flex-row mx-12 lg:mx-24 my-8">
            <div className="max-w-sm mr-3">
              <h2 className="text-6xl inline-block mr-4 mt-0 mb-0">
                Wordcloudy
              </h2>
              <p className="text-xl">Advanced wordcloud art generator.</p>
              <p className="mt-8 mb-2">
                <strong>My roles:</strong> <br />
                maker, product design, UX, back-end, front-end, deployment,
                infrastructure
              </p>
              <p className="mt-0">
                <strong>Tech stack:</strong> <br />
                Node/Nest.js, TypeScript, MobX, React, Next.js, Rust, Postgres,
                TypeORM, AWS.
              </p>
              <div className="mt-8">
                <a
                  href="https://wordcloudy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mr-4"
                >
                  <FaLink className="mr-2 inline-block" />
                  Website
                </a>
                <a
                  href="https://www.facebook.com/wordcloudy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaFacebook className="mr-2 inline-block" />
                  Facebook Group
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
        {/* Demo */}
        <SwiperSlide>
          <div className="flex items-center justify-center my-6">
            <ReactPlayer
              url="https://wordcloudy.sfo2.digitaloceanspaces.com/media/landing-video-loop.mp4"
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
