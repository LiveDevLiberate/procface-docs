import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return <Layout title="ProcFace"><main className="container margin-vert--lg"><h1>ProcFace</h1><p><Link to="/docs/">打开中文文档</Link> · <a href="https://livedevliberate.github.io/procface-docs/en/">Read English documentation</a></p></main></Layout>;
}
