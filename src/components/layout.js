import React from "react"
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaHome,
} from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { Link, useStaticQuery, graphql } from "gatsby"

const WidthContainer = props => <div className="px-5 mx-auto" {...props} />

const NavWidthContainer = props => <div className="px-5  mx-auto" {...props} />

const NavLink = props => (
  <Link
    className="block text-xl my-3 lg:inline-block lg:mt-0  mr-4"
    {...props}
  />
)

const NavLinkPlain = props => (
  <a className="block text-xl my-3 lg:inline-block lg:mt-0  mr-4" {...props} />
)

const Header = () => (
  <NavWidthContainer>
    <header className="flex flex-row items-center justify-between flex-wrap">
      <div className="flex flex-col max-w-lg flex-shrink-0 text-gray-800 mr-6 flex-1">
        <Link
          className="text-gray-800 font-semibold text-5xl tracking-tight no-hover-effect"
          to="/"
        >
          Hi, I'm Dmitry
        </Link>
        <h2 className="text-2xl max-w-xl">
          Full-stack web developer with a passion for UX and building products.
          He/him.
        </h2>
        <div className="text-lg font-normal text-teal-600">
          <MdLocationOn className="inline-block" />
          Vancouver, Canada or remote
        </div>
      </div>
      <nav className="text-lg flex flex-col justify-start items-end">
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/about">🙌 About</NavLink>
        <NavLink to="/projects">👨‍💻 Projects</NavLink>
        <NavLink to="/blog">✍️ Notes</NavLink>
        <NavLinkPlain href="https://twitter.com/dmitry_borody">
          <FaTwitter className="text-blue-500 inline-block mr-2" /> Follow
        </NavLinkPlain>
        {/* <NavLink to="/links">Links</NavLink> */}
        {/* <NavLink to="/likes">Likes</NavLink> */}
      </nav>
    </header>
  </NavWidthContainer>
)

const SocialLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    className="text-xl text-gray-500 mr-3 hover:text-gray-700 p-2 cursor-pointer"
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

const PageContainer = props => (
  <div
    className="max-w-6xl bg-white mx-auto min-h-screen py-8 px-10"
    {...props}
  />
)

const Layout = ({ location, title, children }) => {
  return (
    <PageContainer>
      <div style={{ minHeight: "calc(100vh - 150px)" }}>
        <Header />
        <WidthContainer>
          <main className="mt-12">{children}</main>
        </WidthContainer>
      </div>
      <Footer />
    </PageContainer>
  )
}

export default Layout
