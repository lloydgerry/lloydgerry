# lloydgerry.com

Personal site: the story, a filterable career timeline, and a public resume.
Built with Astro (static output) and one React island for the timeline. The
fractional consulting site is a separate repo, `lloydgerry/fractional`, served at
`fractionalleader.co`.

```
src/pages/index.astro       the whole page
src/data/experience.ts      timeline chapters and the lens tracks — edit content here
src/components/Timeline.jsx the Software / Leadership / Business / Service lens
src/styles/global.css       tokens (light + dark), then shell, then blocks
public/                     portrait, resume PDF, favicon, robots.txt
cv/                         source and instructions for the public resume PDF
amplify.yml                 Amplify build spec and headers
```

## Local

```sh
nvm use          # Node version from .nvmrc
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Hosting

AWS Amplify Hosting in the personal account (`366398901413`, `us-east-1`), deployed
from `main`. DNS is Route 53 zone `Z05356751EQE6RREPDSYA`. Email for
`hello@lloydgerry.com` is Google Workspace; see the fractional repo's README for
the record order (MX goes in last).

Commits use `lloydgerry@users.noreply.github.com`; check with `git config user.email`.
