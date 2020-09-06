/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import {
  FaTwitter,
  FaProductHunt,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa"

import { rhythm } from "../utils/typography"

const SocialLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    style={{ color: "#666", fontSize: "26px", marginRight: rhythm(1 / 2) }}
  >
    {children}
  </a>
)

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
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

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1),
          marginBottom: 0,
          minWidth: 90,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />

      <div>
        <p style={{ fontSize: "1.2rem" }}>
          👋 Hi, I'm Dmitry – full-stack web developer, UX designer and maker
          based in Vancouver, Canada.
        </p>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/about">About</Link>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
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
      </div>
    </div>
  )
}

export default Bio
