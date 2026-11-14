import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {
    title: 'Docs',
    to: '/docs/intro',
    description: 'Guides for restaurant teams and integrators.',
  },
  {
    title: 'Internal',
    to: '/internal/intro',
    description: 'Documentation for support, operations, and developers.',
  },
  {
    title: 'Project',
    to: '/project/intro',
    description: 'Vision, business processes, and architecture decisions.',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container">
        <div className={styles.sections}>
          {sections.map((section) => (
            <Link key={section.to} to={section.to} className={styles.card}>
              <Heading as="h2">{section.title}</Heading>
              <p>{section.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
