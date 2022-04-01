const YEAR = new Date().getFullYear()

const theme = {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Deepanshu Singh.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
}

export default theme
