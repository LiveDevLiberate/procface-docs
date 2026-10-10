import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const english = currentLocale === 'en';
  return <Layout title="ProcFace"><main className="container margin-vert--lg"><h1>ProcFace</h1><p><Link to="/docs/">{english ? 'Read the documentation' : '打开中文文档'}</Link></p></main></Layout>;
}
