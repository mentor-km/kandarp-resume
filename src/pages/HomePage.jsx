import { useEffect } from 'react';
import { pageMeta } from '../content/site';
import { PageMeta, SiteFooter, SiteHeader } from '../components/portfolio/Chrome';
import StudioHome from '../components/portfolio/StudioHome';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('studio-page');
    return () => document.documentElement.classList.remove('studio-page');
  }, []);

  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <SiteHeader />
      <main id="main" className="studio">
        <StudioHome />
      </main>
      <SiteFooter />
    </>
  );
}
