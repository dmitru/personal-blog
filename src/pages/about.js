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
          className="mb-4"
          imgStyle={{
            borderRadius: `20%`,
          }}
        />
        <div>
          <h1 className="text-2xl">👋 I'm Dmitry – nice to meet you!</h1>
          <p>
            Currently, I specialize in building APIs and SPAs with rich user
            interfaces using TypeScript, React and Node.js. I'm interested in
            UX, product design and bootstrapping.
          </p>
          <p>
            Recently, I've been working as a senior web developer at{" "}
            <a href="https://inkarnate.com" target="_blank" rel="noreferrer">
              Inkarnate
            </a>
            , doing crazy stuff with HTML Canvas, TypeScript and Rust to make
            the best online fantasy map editor for the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Dungeons_%26_Dragons"
              target="_blank"
              rel="noreferrer"
            >
              D&D & tabletop community
            </a>
            .
          </p>
          <p>
            Before that, I've been{" "}
            <a
              href="https://www.toptal.com/resume/dmitry-borody"
              target="_blank"
              rel="noreferrer"
            >
              freelancing
            </a>{" "}
            and slow-traveling for 3 years, livinig in over 25 countries and
            meeting some wonderful people.
          </p>

          <p>
            {"I normally spend my free time "}
            <a
              href="https://soundcloud.com/charmonium"
              target="_blank"
              rel="noreferrer"
            >
              improvising on an instrument (mostly guitars)
            </a>
            , reading and hiking.
          </p>

          <p>
            Random fact: in my reckless youth in Russia, I was an illegal
            graffiti artist.
          </p>

          <p className="mt-10">
            <strong>
              I'm generally open for part-time contracting opportunities.
            </strong>
          </p>
          <p>
            If you'd like to discuss a project or hire me, send me an email or{" "}
            <a
              href="https://twitter.com/messages/compose?recipient_id=1232342065360637952"
              target="_blank"
              rel="noreferrer"
            >
              DM me on Twitter
            </a>
            . For my work experience and testimonials, please check out my{" "}
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              Linkedin profile
            </a>
            .
          </p>

          <p className="mt-10">
            My current <strong>tech stack</strong> I'm being the most productive
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
        fixed(width: 200, height: 200) {
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
