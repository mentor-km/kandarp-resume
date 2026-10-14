import { useCallback, useState } from 'react';
import { RouteProvider, useRoute } from './hooks/useRoute';
import Backdrop from './components/portfolio/Backdrop';
import Intro, { shouldPlayIntro } from './components/portfolio/Intro';
import CaseStudyPage from './pages/CaseStudyPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function Routes() {
  const { path } = useRoute();
  const studyMatch = path.match(/^\/work\/([a-z0-9-]+)$/);

  if (studyMatch) return <CaseStudyPage slug={studyMatch[1]} />;
  if (path === '/') return <HomePage />;
  return <NotFoundPage />;
}

export default function App() {
  const [intro, setIntro] = useState(() => shouldPlayIntro());
  const finishIntro = useCallback(() => setIntro(false), []);

  return (
    <RouteProvider>
      <Backdrop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {intro ? <Intro onDone={finishIntro} /> : null}
      <Routes />
    </RouteProvider>
  );
}
