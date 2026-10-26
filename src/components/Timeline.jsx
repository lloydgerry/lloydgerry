import { useState } from 'react';

// The career doesn't run in one line — software, leadership, and business
// overlap. The lens dims every chapter that doesn't touch the chosen thread,
// so a reader can follow one of them through the whole story.

// [[placeholder]] text renders as a highlighted span so nothing ships unnoticed.
function Text({ children }) {
  const parts = String(children).split(/(\[\[.*?\]\])/);
  return parts.map((p, i) =>
    p.startsWith('[[') ? <span className="ph" key={i}>{p.slice(2, -2)}</span> : p,
  );
}

export default function Timeline({ chapters, tracks }) {
  const [lens, setLens] = useState('all');
  const lenses = [{ id: 'all', label: 'Everything' }, ...tracks];
  const label = Object.fromEntries(tracks.map((t) => [t.id, t.label]));

  return (
    <div className="timeline">
      <div className="lens" role="group" aria-label="Follow one thread">
        {lenses.map((l) => (
          <button
            key={l.id}
            type="button"
            aria-pressed={lens === l.id}
            onClick={() => setLens(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <ol className="roles">
        {chapters.map((c, i) => {
          const on = lens === 'all' || c.tracks.includes(lens);
          return (
            <li key={i} className="role" data-on={on}>
              <div className="role-meta">
                <span className="period"><Text>{c.period}</Text></span>
                <span className="tracks">
                  {c.tracks.map((t) => (
                    <span key={t} className={`track track-${t}`}>{label[t]}</span>
                  ))}
                </span>
              </div>
              <div className="role-body">
                <h3>
                  <Text>{c.title}</Text>
                  <span className="org"> · <Text>{c.org}</Text></span>
                </h3>
                <p className="context"><Text>{c.context}</Text></p>
                {c.summary && <p><Text>{c.summary}</Text></p>}
                {c.highlights.length > 0 && (
                  <ul>
                    {c.highlights.map((h) => (
                      <li key={h}><Text>{h}</Text></li>
                    ))}
                  </ul>
                )}
                {c.stack.length > 0 && <p className="stack">{c.stack.join(' · ')}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
