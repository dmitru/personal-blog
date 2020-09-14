import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
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
          <h1 className="text-2xl">Intro</h1>
          <p>
            Currently, I specialize in building APIs and SPAs with rich user
            interfaces using TypeScript, React and Node.js. I'm interested in
            UX, product design and indie bootstrapping.
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
            and slow-traveling for 3 years in over 25 countries, co-living and
            co-working with some wonderful people.
          </p>

          <h2>Let's work together!</h2>

          <p>
            <strong>I might be open for contracting.</strong>
          </p>
          <p>
            If you'd like to discuss a project, get a quote or work with me,
            send me an email or{" "}
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
            My current <strong>tech stack</strong> I'm the most productive with:
          </p>

          <ul>
            <li>
              <strong>Frontend:</strong> TypeScript, React, Next.js, Gatsby,
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

          <h2>My Interests</h2>
          <ul>
            <li>
              Tech domains:
              <ul>
                <li>UI/UX/Graphical design tools</li>
                <li>Dev experience & productivity</li>
                <li>Crafting great UIs and UX</li>
                <li>Performance, profiling & optimization</li>
                <li>All things web, TypeScript, Rust/WebAssembly</li>
                <li>Serverless</li>
              </ul>
            </li>
            <li>
              Non-tech:
              <ul>
                <li>UI/UX/Graphical design tools</li>
                <li>Dev experience & productivity</li>
                <li>Crafting great UIs and UX</li>
                <li>Performance, profiling & optimization</li>
                <li>Serverless</li>
              </ul>
            </li>
          </ul>

          <p>
            {"I like spending my free time "}
            <a
              href="https://soundcloud.com/charmonium"
              target="_blank"
              rel="noreferrer"
            >
              improvising on an instrument (mostly bass and guitar)
            </a>
            , reading and hiking.
          </p>

          <p>Random fact: in my reckless youth, I was a graffiti artist.</p>
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
