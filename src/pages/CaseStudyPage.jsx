import { getCaseStudy } from '../content/caseStudies';
import { profile } from '../content/site';
import CaseStudyView from '../components/portfolio/CaseStudyView';
import { PageMeta, SiteFooter, SiteHeader } from '../components/portfolio/Chrome';
import { AppLink } from '../hooks/useRoute';

export default function CaseStudyPage({ slug }) {
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <>
        <PageMeta
          title={`Page not found | ${profile.name}`}
          description="That case study is not on this site."
        />
        <SiteHeader />
        <main id="main" className="not-found">
          <p className="eyebrow">Missing page</p>
          <h1>This case study is not published.</h1>
          <p>The link may be out of date. My published studies are linked from the home page.</p>
          <AppLink className="button" to="/">
            Back home
          </AppLink>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <PageMeta
        title={`${study.cardTitle} | ${profile.name}`}
        description={study.outcome}
      />
      <SiteHeader />
      <main id="main">
        <CaseStudyView study={study} />
      </main>
      <SiteFooter />
    </>
  );
}
