import Nav from 'components/Nav';
import Project from 'components/projects/Project';
import data from 'data';
import { useEffect, useRef, useState } from 'react';

import '../styles/Projects.scss';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusPage, setFocusPage] = useState(0);

  useEffect(() => {
    let page = 0;

    const { current } = containerRef;
    const scrollHandler = (page: number) => {
      const pageHeight = window.innerHeight;
      current?.scrollTo({
        top: (pageHeight - 77.5) * page,
        left: 0,
        behavior: 'smooth',
      });
    };

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;

      if (deltaY > 0) {
        if (page < data.length - 1) {
          page++;
          setFocusPage(page);
          scrollHandler(page);
        }
      } else {
        if (page > 0) {
          page--;
          setFocusPage(page);
          scrollHandler(page);
        }
      }
    };

    document.onkeydown = function (e: globalThis.KeyboardEvent) {
      e.preventDefault();
    };

    current?.addEventListener('wheel', wheelHandler);
  }, []);

  return (
    <div className='projects--container' ref={containerRef}>
      <Nav />
      {data.map((e, i) => {
        return <Project key={i} data={e} focused={focusPage === i} />;
      })}
    </div>
  );
}
