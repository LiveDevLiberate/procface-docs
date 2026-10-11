import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const guides = {
  zh: [
    ['01', '快速开始', '构建 CLI，启动本地 daemon 与网页。', 'usage'],
    ['02', 'API 与指标', '采样、进程数据、Trace 与导出接口。', 'usage'],
    ['03', '发布与校验', '构建发布包，验证网页签名与 Pages 部署。', 'release'],
    ['04', '紧凑数据协议', '批次结构、字典编号与进程记录。', 'compact-wire'],
  ],
  en: [
    ['01', 'Quick start', 'Build the CLI and run the daemon with the web UI.', 'usage'],
    ['02', 'API and metrics', 'Sampling, process data, Trace and export endpoints.', 'usage'],
    ['03', 'Release and verification', 'Package releases and verify frontend signatures.', 'release'],
    ['04', 'Compact wire format', 'Batch layout, dictionaries and process records.', 'compact-wire'],
  ],
};

export default function Home() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const en = currentLocale === 'en';
  const links = guides[en ? 'en' : 'zh'];
  const previewImage = useBaseUrl('/procface-ui.png');
  return (
    <Layout title={en ? 'Documentation' : '文档'} description={en ? 'ProcFace embedded Linux performance tools documentation' : 'ProcFace 嵌入式 Linux 性能分析工具文档'}>
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <div className={styles.eyebrow}>{en ? 'EMBEDDED LINUX / PROCFS' : 'EMBEDDED LINUX / PROCFS'}</div>
            <h1>ProcFace</h1>
            <p>{en ? 'Performance data, straight from the kernel.' : '从内核读取性能数据，直接看清系统状态。'}</p>
            <div className={styles.actions}>
              <Link className={styles.primary} to="/docs/usage">{en ? 'Read the guide' : '阅读使用指南'} <span aria-hidden="true">→</span></Link>
              <a className={styles.source} href="https://github.com/LiveDevLiberate/procface">{en ? 'Source and downloads' : '源代码与下载'} <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.facts}>
              <span>RUST</span><span>PROCFS</span><span>ARM32 / ARM64 / RISCV64 / X86_64</span>
            </div>
          </div>
          <a className={styles.preview} href="https://livedevliberate.github.io/procface/" aria-label={en ? 'Open ProcFace web UI' : '打开 ProcFace 网页界面'}>
            <img src={previewImage} alt={en ? 'ProcFace live charts and process monitor' : 'ProcFace 实时指标图表与进程监视界面'} />
            <span>{en ? 'LIVE MONITOR' : 'LIVE MONITOR'} <span aria-hidden="true">↗</span></span>
          </a>
        </section>
        <section className={styles.guides} aria-labelledby="guides-title">
          <div className={styles.sectionHead}><h2 id="guides-title">{en ? 'Documentation' : '文档目录'}</h2><Link to="/docs/i18n">{en ? 'Language policy' : '语言说明'} →</Link></div>
          <div className={styles.list}>
            {links.map(([number, title, description, slug]) => (
              <Link className={styles.guide} to={`/docs/${slug}`} key={number}>
                <span className={styles.number}>{number}</span>
                <span className={styles.guideText}><strong>{title}</strong><small>{description}</small></span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className={styles.bottomLinks}>
            <Link to="/docs/i18n">{en ? 'Chinese and English' : '中文与 English'}</Link>
            <a href="https://livedevliberate.github.io/procface/">{en ? 'Open web monitor' : '打开网页监视器'}</a>
            <a href="https://github.com/LiveDevLiberate/procface/releases">{en ? 'Download releases' : '下载 Release'}</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
