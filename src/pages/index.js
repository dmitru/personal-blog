import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaLink, FaShare } from "react-icons/fa"
import { InkarnateProject } from "../components/projects/inkarnate"
import { WordcloudyProject } from "../components/projects/wordcloudy"

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
)

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Dmitry Borody – Full-stack React and Node.js developer" />

      <section>
        <div className="flex flex-wrap flex-row -m-5">
          <div className="p-5 lg:w-1/2">
            <p>
              I specialize in building Single Page Applications and SaaS, doing
              full-stack web development with Next.js, TypeScript, React and
              Node.
            </p>

            <p>
              I love moving fast, delivering value for early-stage startups and
              small team in rapid growth stage. I'm a quick learner, driven by
              results and require minimum management overhead.
            </p>
          </div>

          <div className="p-5 lg:w-1/2">
            <p>
              <strong>Have a project or collaboration in mind?</strong> <br />
              I'd love to have a chat!
            </p>
            <Link className="inline-flex items-center mb-6" to="/about#contact">
              Contact me
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6">
          <h2 className="text-3xl mb-0 inline-block">Featured Projects</h2>

          <Link to="/projects" className="inline-flex items-center ml-5">
            See all projects
            <ArrowIcon />
          </Link>
        </div>

        <div className="mb-10">
          <InkarnateProject />
        </div>

        <div className="mb-10">
          <WordcloudyProject />
        </div>
      </section>

      <section className="mt-12 max-w-xl">
        <h2 className="text-3xl mb-6">Recent Notes</h2>
        {posts.map(({ node }, index) => {
          let title = node.frontmatter.title || node.fields.slug

          return (
            <BlogEntryShort
              key={node.fields.slug}
              to={node.fields.slug}
              title={title}
              description={node.frontmatter.description}
              date={node.frontmatter.date}
            />
          )
        })}
      </section>
    </Layout>
  )
}

const Project = ({ title, children }) => (
  <article className="mb-4">
    <h3 className="text-base text-gray-900 mb-2 font-semibold">{title}</h3>
    <div className="text-sm">{children}</div>
  </article>
)

const BlogEntryShort = ({ to, title, description }) => (
  <article className="mb-4">
    <h3 className="text-base font-semibold mb-2">
      <Link to={to} className="text-gray-900">
        {title}
      </Link>
    </h3>
    {description && <p className="mt-0 text-sm">{description}</p>}
  </article>
)

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
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
