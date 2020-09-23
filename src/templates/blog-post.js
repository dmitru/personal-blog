import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        meta={[
          {
            name: "og:image",
            content: `https://www.mugshotbot.com/m?mode=dark&color=orange&pattern=lines_in_motion&url=https://dmitryborody.com${pageContext.slug}`,
          },
        ]}
      />
      <article className="mt-10 max-w-xl mx-auto">
        <header>
          <h1 className="text-3xl mb-0">{post.frontmatter.title}</h1>
          <p className="text-gray-500">{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(2),
          }}
        />
      </article>

      <nav className="mb-8">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
