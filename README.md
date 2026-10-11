# ProcFace docs

The bilingual [ProcFace documentation site](https://livedevliberate.github.io/procface-docs/) is built with Docusaurus and deployed to GitHub Pages from `main`.

The eight user guides in this repository are generated from the canonical files in [LiveDevLiberate/procface](https://github.com/LiveDevLiberate/procface/tree/main/docs). Edit the source repository first, then sync this site:

```sh
python scripts/sync_docs.py --project ../sysstat2
npm ci
npm run build
```

Use `--check` to detect drift without writing. In CI, both repositories are checked out and the sync check runs before building. The site's landing pages and Docusaurus configuration are maintained here.

The site build does not run on embedded devices. Dependency audit results concern the Node-based documentation toolchain, not the ProcFace binary.
