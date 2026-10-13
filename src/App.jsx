import { RouteProvider, useRoute } from './hooks/useRoute';
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
  return (
    <RouteProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Routes />
    </RouteProvider>
  );
}
