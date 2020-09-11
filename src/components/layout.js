import React from "react"
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa"
import { Link, useStaticQuery, graphql } from "gatsby"

const WidthContainer = props => (
  <div className="px-5 max-w-xl mx-auto" {...props} />
)

const NavLink = props => (
  <Link
    href="#responsive-header"
    className="block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-teal-600 mr-4"
    {...props}
  />
)

const Nav = () => (
  <WidthContainer>
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <Link
          className="text-gray-800 font-semibold text-3xl tracking-tight"
          to="/"
        >
          Dmitry Borody
        </Link>
      </div>
      <div className="text-lg w-full flex-grow flex items-center">
        {/* <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/links">Links</NavLink> */}
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  </WidthContainer>
)

const SocialLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    className="text-xl text-gray-500 mr-3 hover:text-gray-700 p-2"
  >
    {children}
  </a>
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            twitter
            producthunt
            linkedin
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <footer className="py-4 mt-6">
      <WidthContainer>
        <div className="flex flex-row">
          <div className="text-gray-500 text-md flex-1">
            <a
              href="https://github.com/dmitru/personal-blog"
              className="text-gray-500"
            >
              Open Sourced
            </a>{" "}
            under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              className="text-gray-500"
            >
              CC BY-NC 4.0
            </a>
          </div>

          <div className="flex flex-row flex-1 justify-end w-full">
            <SocialLink to={social.twitter}>
              <FaTwitter />
            </SocialLink>
            <SocialLink to={social.github}>
              <FaGithub />
            </SocialLink>
            <SocialLink to={social.linkedin}>
              <FaLinkedin />
            </SocialLink>
            <SocialLink to={social.producthunt}>
              <FaProductHunt />
            </SocialLink>
            <SocialLink to={social.medium}>
              <FaMedium />
            </SocialLink>
          </div>
        </div>
      </WidthContainer>
    </footer>
  )
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const aboutPath = `${__PATH_PREFIX__}/about/`
  let header

  return (
    <div>
      <Nav />
      <WidthContainer>
        <main>{children}</main>
      </WidthContainer>
      <Footer />
    </div>
  )
}

export default Layout
