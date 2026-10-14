import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const RouteContext = createContext(null);

function normalize(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname || '/';
}

function scrollToTarget(nextHash) {
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (nextHash) {
    const target = document.querySelector(nextHash);
    if (target) {
      target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function RouteProvider({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const sync = () => {
      setPath(normalize(window.location.pathname));
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  useEffect(() => {
    scrollToTarget(hash);
  }, [path, hash]);

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.origin);
    const nextPath = normalize(url.pathname);
    const nextHash = url.hash;
    window.history.pushState({}, '', `${nextPath}${nextHash}`);
    setPath(nextPath);
    setHash(nextHash);
    requestAnimationFrame(() => scrollToTarget(nextHash));
  }, []);

  return (
    <RouteContext.Provider value={{ path, hash, navigate }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within RouteProvider');
  }
  return context;
}

export function AppLink({ to, className, children, onClick, ...rest }) {
  const { navigate } = useRoute();

  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
