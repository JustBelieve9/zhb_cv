import {
  automation,
  contacts,
  cvFootNote,
  details,
  experience,
  headings,
  identity,
  location,
  pipeline,
  portfolioLinks,
  stats,
  toolGroups,
  workflow,
} from '../data/cv'
import { useT } from '../lib/lang'

/**
 * Полный CV одним документом: виден на /cv и (скрытым) печатается
 * с любой страницы через @media print. Данные — из src/data/cv.ts.
 */
export default function CvDocument() {
  const t = useT()
  return (
    <article className="cvdoc">
      <header className="cvdoc__id">
        <h1 className="cvdoc__name">{t(identity.name)}</h1>
        <p className="cvdoc__role">
          {t(identity.role)} · {t(identity.roleTag)}
        </p>
        <p className="cvdoc__tag">{t(identity.intro)}</p>
        <ul className="cvdoc__contacts">
          {contacts.map((c) => (
            <li key={c.href}>
              <a href={c.href}>{c.label}</a>
            </li>
          ))}
          <li>
            <span>{t(location)}</span>
          </li>
        </ul>
      </header>

      <ul className="cvdoc__stats">
        {stats.map((s, i) => (
          <li key={i} className="cvdoc__stat">
            <span className="cvdoc__statn">{t(s.n)}</span>
            <span className="cvdoc__statl">{t(s.l)}</span>
          </li>
        ))}
      </ul>

      <section className="cvdoc__sec">
        <h2 className="cvdoc__h">{t(headings.portfolio)}</h2>
        <ul className="cvdoc__links">
          {portfolioLinks.map((l) => (
            <li key={l.id}>
              <a href={l.href} target="_blank" rel="noopener">
                <b>{t(l.title)}</b>
                <span className="cvdoc__linkd">{t(l.desc)}</span>
                <span className="cvdoc__linkgo">{t(l.cta)} ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="cvdoc__sec">
        <h2 className="cvdoc__h">{t(headings.tools)}</h2>
        <div className="cvdoc__skills">
          {toolGroups.map((g) => (
            <div key={g.title.en}>
              <p className="cvdoc__skillh">{t(g.title)}</p>
              <ul className="cvdoc__tags">
                {g.items.map((item) => (
                  <li key={item.label.en} className={item.key ? 'is-key' : undefined}>
                    {t(item.label)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cvdoc__sec">
        <h2 className="cvdoc__h">{t(headings.pipeline)}</h2>
        <ul className="cvdoc__pipe">
          {pipeline.map((p) => (
            <li key={p.num}>
              <span className="cvdoc__pnum">{p.num}</span>
              <span className="cvdoc__ptitle">{t(p.title)}</span>
              <span className="cvdoc__pdesc">{t(p.desc)}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="cvdoc__cols">
        <div>
          <section className="cvdoc__sec">
            <h2 className="cvdoc__h">{t(headings.experience)}</h2>
            {experience.map((job) => (
              <article key={job.company} className="cvdoc__job">
                <div className="cvdoc__jobtop">
                  <span className="cvdoc__co">{job.company}</span>
                  <span className="cvdoc__when">{t(job.period)}</span>
                </div>
                <p className="cvdoc__jrole">{t(job.role)}</p>
                <ul className="cvdoc__bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{t(b)}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
          <section className="cvdoc__sec">
            <h2 className="cvdoc__h">{t(headings.automation)}</h2>
            <ul className="cvdoc__bullets">
              {automation.map((b, i) => (
                <li key={i}>{t(b)}</li>
              ))}
            </ul>
          </section>
        </div>
        <aside>
          <section className="cvdoc__sec">
            <h2 className="cvdoc__h">{t(headings.workflow)}</h2>
            <ul className="cvdoc__bullets">
              {workflow.map((b, i) => (
                <li key={i}>{t(b)}</li>
              ))}
            </ul>
          </section>
          <section className="cvdoc__sec">
            <h2 className="cvdoc__h">{t(headings.details)}</h2>
            <dl className="cvdoc__facts">
              {details.map((d) => (
                <div key={d.term.en}>
                  <dt>{t(d.term)}</dt>
                  <dd>{t(d.def)}</dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </div>

      <p className="cvdoc__foot no-print">{t(cvFootNote)}</p>
    </article>
  )
}
