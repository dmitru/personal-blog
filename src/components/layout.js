import React from "react"
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { Header } from "./header"
import { Link, useStaticQuery, graphql, Image } from "gatsby"

const PageContainer = props => (
  <div
    className="max-w-6xl bg-white mx-auto min-h-screen py-4 px-2 sm:py-6 sm:px-4 lg:py-8 lg:px-10"
    {...props}
  />
)

const Layout = ({ location, title, children }) => {
  return (
    <PageContainer>
      <div style={{ minHeight: "calc(100vh - 150px)" }} className="mb-12">
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

const WidthContainer = props => <div className="px-5 mx-auto" {...props} />

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
            <SocialLink to="mailto://dmitriy.borodiy@gmail.com">
              <MdMail />
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
