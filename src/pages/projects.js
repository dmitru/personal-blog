import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InkarnateProject } from "../components/projects/inkarnate"
import { WordcloudyProject } from "../components/projects/wordcloudy"

const Projects = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />

      <div className="mb-10">
        <h1 className="text-3xl">My Recent Work</h1>
        <p>
          This section is work-in-progress: I'll be adding more projects soon!
        </p>
      </div>

      <div className="mb-10">
        <InkarnateProject />
      </div>

      <div className="mb-10">
        <WordcloudyProject />
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
        social {
          linkedin
        }
      }
    }
  }
`
