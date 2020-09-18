import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLink, FaShare } from "react-icons/fa"

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

      <section className=" body-font">
        <div className="">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="lg:text-2xl text-2xl font-medium mb-3">Intro</h1>

                <p>
                  I specialize in building Single Page Applications and SaaS,
                  doing full-stack web development with Next.js, TypeScript,
                  React and Node.
                </p>

                <p className="mt-10">
                  <strong>Have a project or collaboration in mind?</strong>{" "}
                  <br />
                  Let's have a chat!
                </p>
                <Link
                  className="inline-flex items-center mb-6"
                  to="/about#contact"
                >
                  Contact me
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="lg:text-2xl text-2xl font-medium mb-1">
                  Projects
                </h1>
                <Project
                  title={
                    <a className="text-gray-800" href="https://inkarnate.com">
                      Inkarnate
                      <FaShare className="inline-block ml-2 text-gray-400 text-xs" />
                    </a>
                  }
                >
                  SaaS, online editor and community for creating fantasy maps
                  for DnD and tabletop. <br />
                  <em>Frontend, UX & product design</em>
                </Project>
                <Project
                  title={
                    <a className="text-gray-800" href="https://wordcloudy.com">
                      Wordcloudy
                      <FaShare className="inline-block ml-2 text-gray-400 text-xs" />
                    </a>
                  }
                >
                  SaaS, advanced & easy-to-use wordcloud art generator. <br />
                  <em>Maker, everything</em>
                </Project>
                <Project
                  title={
                    <a
                      className="text-gray-800"
                      href="https://myguitartuner.com"
                    >
                      MyGuitarTuner
                      <FaShare className="inline-block ml-2 text-gray-400 text-xs" />
                    </a>
                  }
                >
                  Fastest microphone tuner on the web. Implemented in
                  WebAssembly and Canvas visualization. 13k monthly users.
                  <br />
                  <em>Maker, everything</em>
                </Project>

                <a
                  className="inline-flex items-center mt-5"
                  href="https://www.linkedin.com/in/dmitriyborodiy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  More experience & projects
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="p-4 lg:w-1/3">
              <div className="h-full rounded-lg relative">
                <h1 className="lg:text-2xl text-2xl font-medium mb-3">
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
                {/* <a className="inline-flex items-center mt-5">
                  See all {posts.length} notes
                  <ArrowIcon />
                </a> */}
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
