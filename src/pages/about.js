import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { FaTwitter } from "react-icons/fa"

const Index = ({ data, location }) => {
  const { title: siteTitle, social } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />

      <div
        className="mt-10 max-w-xl mx-auto"
        style={{
          // display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <div>
          <h1>About</h1>
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
            and slow-traveling for 3 years to over 25 countries.
          </p>

          <h2 className="text-2xl">Interests in Tech</h2>
          <p className="mt-4">
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

          <p>What I enjoy working on the most:</p>
          <ul>
            <li>UI/UX/Graphical design tools</li>
            <li>Dev experience & productivity tools</li>
            <li>Crafting great, fast end-user UIs and UX</li>
            <li>Performance, profiling & optimization</li>
            <li>All things web, TypeScript, Rust/WebAssembly</li>
          </ul>
          <h2 className="text-2xl">Outside of Tech</h2>
          <p>Random fact: in my reckless youth, I was a graffiti artist.</p>
          <p>
            {"I like to "}
            <a
              href="https://soundcloud.com/charmonium"
              target="_blank"
              rel="noreferrer"
            >
              jam (on various drums, bass & guitar) with others
            </a>
            , read books and go on hikes.{" "}
          </p>
          <p>
            Also being alone in wilderness, travel light, vanlife, taking long
            walks, mid-day naps, cats and turkish cofee. I'm trying to keep at
            my QiGong practice to balance my body and mind.
          </p>
        </div>

        <h2 id="contact" className="text-2xl">
          Contact me
        </h2>

        <p>
          If you'd like to discuss a project, get a quote or work with me,{" "}
          <a
            href="https://twitter.com/messages/compose?recipient_id=1232342065360637952"
            target="_blank"
            rel="noreferrer"
          >
            DM me on Twitter
          </a>
          or <a href="mailto://dmitriy.borodiy@gmail.com">send me an email.</a>
        </p>
        <p>
          For full work experience and client testimonials, please visit my{" "}
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            Linkedin profile
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default Index

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
