import Typography from "typography"
import GithubTheme from "typography-theme-github"

GithubTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete GithubTheme.googleFonts

const typography = new Typography({ ...GithubTheme, includeNormalize: false })

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
