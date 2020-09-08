import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <p>
        For the last 7+ years I've been helping small companies and startups to
        solve their problems, build MVPs, launch new products and increase
        revenue.
      </p>
      <p>
        I specialize in building APIs and SPAs with rich user interfaces using
        TypeScript, React and Node.js.
      </p>

      <h2>Journal</h2>
      <p>
        A place for my short-form writing, mostly to{" "}
        <a
          href="https://www.swyx.io/writing/learn-in-public/"
          target="_blank"
          rel="noreferrer"
        >
          learn in public
        </a>
        , share the journey and personal opinions. Also a fun way to practice
        consistency, develop my written voice and thinking.
      </p>

      {posts.map(({ node }, index) => {
        let title = node.frontmatter.title || node.fields.slug

        title = `Quick Bit #${posts.length - index}: ${title}`

        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
