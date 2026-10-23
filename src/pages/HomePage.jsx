import { useEffect } from 'react';
import { pageMeta } from '../content/site';
import { PageMeta } from '../components/portfolio/Chrome';
import Opening from '../components/portfolio/Opening';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('exp-root');
    return () => document.documentElement.classList.remove('exp-root');
  }, []);

  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <main id="main">
        <Opening />
      </main>
    </>
  );
}
