# Public resume

`resume-web.html` is the public copy of `~/Documents/resumes/resume.html` with the
mobile number and personal Gmail removed (contact is `hello@lloydgerry.com` and the
site URL instead). It renders to `public/Lloyd-Gerry-Resume.pdf`, which the site links.

After updating the resume, recopy it, re-apply the header swap, then rebuild the PDF:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --print-to-pdf=public/Lloyd-Gerry-Resume.pdf \
  "file://$PWD/cv/resume-web.html"
```

Check before committing: `grep -i -E 'gmail|tel:|250' cv/resume-web.html` should print nothing.
