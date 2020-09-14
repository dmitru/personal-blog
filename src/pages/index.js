import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <SEO title="Dmitry Borody – Full-stack React, Node.js developer, contract and freelance" />

      <section className=" body-font">
        <div className="">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="sm:text-xl text-lg font-medium mb-3">
                  Working together
                </h1>

                <p className="mb-3">
                  Have a project or collaboration in mind? <br />
                  I'll be happy to chat.
                </p>
                <a className="inline-flex items-center font-semibold">
                  Work with me
                  <ArrowIcon />
                </a>

                <p>
                  I specialize in building Single Page Applications and SaaS,
                  doing full-stack web development with Next.js, TypeScript,
                  React and Node.
                </p>
                <p>I work either solo or extend your existing team.</p>
                <p>Open to part-time or full-time opportunities.</p>

                <a className="inline-flex items-center font-semibold">
                  Skills & Experience
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="sm:text-xl text-lg font-medium mb-3">
                  Projects
                </h1>
                <Project title={<a href="https://inkarnate.com">Inkarnate</a>}>
                  Online editor and community for creating fantasy maps for DnD
                  and tabletop.
                </Project>
                <Project
                  title={<a href="https://wordcloudy.com">Wordcloudy</a>}
                >
                  SaaS, advanced & easy-to-use wordcloud art generator.
                </Project>
                <Project
                  title={<a href="https://myguitartuner.com">MyGuitarTuner</a>}
                >
                  Fastest microphone tuner on the web. Implemented in
                  WebAssembly and Canvas visualization. 13k monthly users.
                </Project>

                <a className="inline-flex items-center mt-5  font-semibold">
                  See all 8 projects
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="sm:text-xl text-lg font-medium mb-3">
                  Recent Notes
                </h1>
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
                <a className="inline-flex items-center mt-5 font-semibold">
                  See all {posts.length} notes
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const Project = ({ title, children }) => (
  <article className="mb-4">
    <h2 className="text-base mb-0 text-body font-semibold">{title}</h2>
    {children}
  </article>
)

const BlogEntryShort = ({ to, title, description }) => (
  <article className="mb-4">
    <h3 className="text-base font-semibold">
      <Link to={to} className="">
        {title}
      </Link>
    </h3>
    {description && <p>{description}</p>}
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
