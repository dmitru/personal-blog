import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const ShortAbout = ({ avatarSrc }) => {
  return (
    <>
      <p>
        <Image
          fixed={avatarSrc}
          alt="Avatar"
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
      </p>
    </>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ShortAbout avatarSrc={data.avatar.childImageSharp.fixed} />

      <div className="max-w-lg">
        <p>
          Hi there! I'm a full-stack web developer, specializing in SPAs and
          SaaS with rich user interfaces. I love creating useful products using
          TypeScript, React and Node.js.
        </p>

        <p>
          At work, I'm building{" "}
          <a href="https://inkarnate.com" target="_blank" rel="noreferrer">
            Inkarnate
          </a>
          , and I've a few projects on the side.
        </p>

        <p>
          Here's <Link to="/about">a longer intro</Link> if you're interested.
        </p>
      </div>

      <h2 className="text-lg mt-6">Journal</h2>
      <p>
        A place for my short-form writing:{" "}
        <a
          href="https://www.swyx.io/writing/learn-in-public/"
          target="_blank"
          rel="noreferrer"
        >
          learning in public
        </a>
        {", sharing the journey"}. And a way to sharpen my thinking, practice
        consistency and develop written voice.
      </p>

      <div className="mt-6 mb-10">
        {posts.map(({ node }, index) => {
          let title = node.frontmatter.title || node.fields.slug

          title = `Entry #${posts.length - index}: ${title}`

          return (
            <BlogEntryShort
              key={node.fields.slug}
              to={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const BlogEntryShort = ({ to, title, date }) => (
  <article className="text-xl py-2">
    <header>
      <h3>
        <Link to={to} className="text-gray-700">
          {title}
        </Link>
      </h3>
      <small className="text-sm text-gray-600">{date}</small>
    </header>
  </article>
)

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
