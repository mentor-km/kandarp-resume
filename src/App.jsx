import { RouteProvider, useRoute } from './hooks/useRoute';
import Backdrop from './components/portfolio/Backdrop';
import CaseStudyPage from './pages/CaseStudyPage';
import HomePage from './pages/HomePage';
import DoPage from './pages/DoPage';
import BuiltPage from './pages/BuiltPage';
import WorkPage from './pages/WorkPage';
import BuildPage from './pages/BuildPage';
import SleepPage from './pages/SleepPage';
import NotFoundPage from './pages/NotFoundPage';

function Routes() {
  const { path } = useRoute();
  const studyMatch = path.match(/^\/work\/([a-z0-9-]+)$/);

  if (studyMatch) return <CaseStudyPage slug={studyMatch[1]} />;
  if (path === '/') return <HomePage />;
  if (path === '/do') return <DoPage />;
  if (path === '/built') return <BuiltPage />;
  if (path === '/9-5') return <WorkPage />;
  if (path === '/5-11') return <BuildPage />;
  if (path === '/11-6') return <SleepPage />;
  return <NotFoundPage />;
}

export default function App() {
  return (
    <RouteProvider>
      <Backdrop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Routes />
    </RouteProvider>
  );
}
