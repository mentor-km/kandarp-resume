import { useEffect } from 'react';
import { pageMeta } from '../content/site';
import { PageMeta } from '../components/portfolio/Chrome';
import { Hero } from '../components/portfolio/HomeSections';

export default function HomePage() {
  /* The home page is the hero and nothing else: lock scrolling to it. */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('home-locked');
    return () => root.classList.remove('home-locked');
  }, []);

  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <main id="main" className="home">
        <Hero />
      </main>
    </>
  );
}
