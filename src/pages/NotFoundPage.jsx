import { profile } from '../content/site';
import { PageMeta, SiteFooter, SiteHeader } from '../components/portfolio/Chrome';
import { AppLink } from '../hooks/useRoute';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title={`Page not found | ${profile.name}`}
        description="That page is not on Kandarp Mathur's portfolio."
      />
      <SiteHeader />
      <main id="main" className="not-found">
        <p className="eyebrow">Missing page</p>
        <h1>This page is not on the site.</h1>
        <p>Use the work section to open a case study, or return home.</p>
        <AppLink className="button" to="/">
          Back home
        </AppLink>
      </main>
      <SiteFooter />
    </>
  );
}
