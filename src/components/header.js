import React from "react"
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaHome,
} from "react-icons/fa"
import Image from "gatsby-image"
import { MdLocationOn } from "react-icons/md"
import { Link, useStaticQuery, graphql } from "gatsby"

const NavWidthContainer = props => <div className="px-5  mx-auto" {...props} />

const NavLink = props => (
  <Link className="text-xl my-2 inline-block mr-5" {...props} />
)

const NavLinkPlain = props => (
  <a className="text-xl my-2 inline-block mr-5" {...props} />
)

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <NavWidthContainer>
      <header className="flex flex-col items-center justify-between flex-wrap">
        <div className="flex flex-col sm:flex-row max-w-2xl">
          <Link
            className="text-gray-800 font-semibold text-5xl tracking-tight no-hover-effect"
            to="/"
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="My photo"
              className="mb-4 mr-5 shadow-md rounded-lg hover:shadow-lg"
              imgStyle={{
                filter: "grayscale(1) brightness(1.2)",
              }}
            />
          </Link>
          <div className="flex flex-col max-w-lg flex-shrink-0 text-gray-800 mr-6 flex-1">
            <span className="text-gray-800 font-semibold text-5xl tracking-tight no-hover-effect">
              Hi, I'm Dmitry
            </span>
            <h2 className="text-2xl max-w-xl">
              Full-stack web developer with a passion for UX and building
              products.
            </h2>
            <div className="text-lg font-normal text-gray-600">
              <MdLocationOn className="inline-block" />
              Vancouver, Canada and remote. He/him.
            </div>
          </div>
        </div>

        <nav className="text-lg  max-w-2xl flex justify-start sm:justify-center w-full flex-row flex-wrap lg:ml-5 lg:mt-0 ml-0 mt-6">
          {/* <NavLink to="/">🏠&nbsp;Home</NavLink> */}
          <NavLink to="/about">🙌&nbsp;About</NavLink>
          <NavLink to="/projects">👨‍💻&nbsp;Projects</NavLink>
          <NavLink to="/about#contact">🤙&nbsp;Contact</NavLink>
          {/* <NavLink to="/blog">✍️&nbsp;Notes</NavLink> */}
          <NavLinkPlain href="https://twitter.com/dmitry_borody">
            <FaTwitter className="text-blue-500 inline-block mr-2 my-0" />
            &nbsp;Follow
          </NavLinkPlain>
          {/* <NavLink to="/links">Links</NavLink> */}
          {/* <NavLink to="/likes">Likes</NavLink> */}
        </nav>
      </header>
    </NavWidthContainer>
  )
}
