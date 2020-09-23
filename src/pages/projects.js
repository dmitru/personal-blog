import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { InkarnateProject } from "../components/projects/inkarnate"
import SEO from "../components/seo"

const Projects = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />

      <div className="mb-10">
        <h1 className="text-3xl">My Work and Projects</h1>
      </div>

      <InkarnateProject data={data} />
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
