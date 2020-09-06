import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Index = ({ data, location }) => {
  const { author, title: siteTitle, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div
        style={{
          // display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(2),
            marginBottom: 0,
            minWidth: 250,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <h1>👋 Hi, it's nice to meet you!</h1>
          <p>
            I'm Dmitry – a full-stack web developer, UX designer and maker from
            Vancouver, Canada.
          </p>
          <p>
            For the last 7+ years I've been helping small companies and startups
            to solve their problems, build MVPs, launch new products and
            increase revenue.
          </p>
          <p>
            I specialize in building APIs and SPAs with rich user interfaces
            using TypeScript, React and Node.js.
          </p>
          <p>
            Here's the <strong>tech stack</strong> I'm being the most productive
            with:
          </p>

          <ul>
            <li>
              <strong>Frontend:</strong> TypeScript, React, NextJS, Gatsby,
              MobX/Redux, Rust/WebAssembly, HTML Canvas
            </li>
            <li>
              <strong>HTML/CSS:</strong> responsive design, css-in-js, SCSS
            </li>
            <li>
              <strong>Backend:</strong> Node, NestJS,
              Mongoose/Sequelize/TypeORM, Python/Flask
            </li>
            <li>
              <strong>Databases:</strong> Postgres, MongoDB, Redis, Firebase
            </li>
            <li>
              <strong>Cloud / infrastructure:</strong> AWS S3/EC2/RDS, Docker,
              Ansible, Nginx, Linux administration
            </li>
            <li>
              <strong>3rd party services:</strong> Stripe, Google Analytics,
              Sentry, Metabase, SendGrid, Graylog
            </li>
          </ul>

          <p>
            For my work experience and testimonials, please check out my{" "}
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              Linkedin profile
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
