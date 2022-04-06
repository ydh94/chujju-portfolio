import { useEffect, useRef, useState } from 'react';
import { Nav, Sidebar, Project } from 'components';
import data from 'data';
import '../styles/Cg.scss';

export default function Cg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusPage, setFocusPage] = useState<number>(0);

  const scrollHandler = (page: number) => {
    setFocusPage(page);
    const pageHeight = window.innerHeight;
    containerRef.current?.scrollTo({
      top: (pageHeight - 77.5) * page,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let page = focusPage;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      let { deltaY } = e;
      if (deltaY >= 0 && deltaY < 10) {
        if (page < data.length - 1) {
          page++;
          scrollHandler(page);
        }
      } else if (deltaY > -10 && deltaY <= 0) {
        if (page > 0) {
          page--;
          scrollHandler(page);
        }
      }
    };

    document.onkeydown = function (e: globalThis.KeyboardEvent) {
      e.preventDefault();
    };
    containerRef.current?.addEventListener('wheel', wheelHandler);
  }, [focusPage]);

  return (
    <div className='cg--container' ref={containerRef}>
      <Nav />
      <Sidebar data={data} scrollHandler={scrollHandler} focusPage={focusPage} />
      {data.map((e, i) => {
        return <Project key={i} data={e} focused={focusPage === i} />;
      })}
    </div>
  );
}
