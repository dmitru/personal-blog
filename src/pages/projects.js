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
      <SEO
        title="Dmitry's Portfolio"
        description="Full-stack development with TypeScript, React, Node. Building web apps and SaaS products."
      />

      <section className="mb-10">
        <h1 className="text-3xl">Recent Work & Projects</h1>
        <p className="max-w-lg mb-10">
          This is an incomplete list of products I've worked on recently. <br />
          Let's get in touch and I'll be happy to tell you more about my other
          past experience.
        </p>

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
      </section>

      <section className="mt-6">
        <h1 className="text-3xl">Open Source</h1>
        <Project
          title="console-log-img"
          href="https://github.com/dmitru/console-log-img"
        >
          Tiny library to print images to browser console. Think console.log but
          for images!
        </Project>
        <Project title="Pines" href="https://github.com/dmitru/pines">
          Python library that implements sklearn-compatible decision trees.
        </Project>
        <Project title="Rankpy" href="https://github.com/dmitru/rankpy">
          Python3 implementation of LambdaMART learn-to-rank algorithm.
        </Project>
      </section>
    </Layout>
  )
}

const Project = ({ title, href, children }) => (
  <article className="mb-4">
    <h3 className="text-base text-gray-900 mb-2 font-semibold">
      <a href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h3>
    <div className="text-sm">{children}</div>
  </article>
)

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
