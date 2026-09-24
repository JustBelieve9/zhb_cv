import { LangProvider, useT } from './lib/lang'
import { ui } from './data/cv'
import FrogCursor from './components/FrogCursor'
import Navigation from './components/Navigation'
import Hero from './hero/Hero'
import CvDocument from './cv/CvDocument'

function SkipLink() {
  const t = useT()
  return (
    <a
      className="skip no-print"
      href="#cv"
      onClick={(e) => {
        e.preventDefault()
        document.getElementById('cv')?.scrollIntoView()
      }}
    >
      {t(ui.skip)}
    </a>
  )
}

export default function App() {
  return (
    <LangProvider>
      <FrogCursor />
      <SkipLink />
      <Navigation />
      <main id="main">
        <Hero />
        <section id="cv" className="cvsheet">
          <CvDocument />
        </section>
      </main>
    </LangProvider>
  )
}
