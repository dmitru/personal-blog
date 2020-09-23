import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InkarnateProject } from "../components/projects/inkarnate"
import { WordcloudyProject } from "../components/projects/wordcloudy"
import { ReporterSuiteProject } from "../components/projects/reportersuite"
import { ApifiniProject } from "../components/projects/apifini"
import { SmarketsProject } from "../components/projects/smarkets"

const Projects = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />

      <div className="mb-10">
        <h1 className="text-3xl">My Recent Work</h1>
      </div>

      <div className="mb-10">
        <InkarnateProject />
      </div>

      <div className="mb-10">
        <WordcloudyProject />
      </div>

      <div className="mb-10">
        <ApifiniProject />
      </div>

      <div className="mb-10">
        <SmarketsProject />
      </div>

      <div className="mb-10">
        <ReporterSuiteProject />
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
