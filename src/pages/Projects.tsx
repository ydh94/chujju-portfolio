import Nav from 'components/Nav';
import Project from 'components/projects/Project';
import data from 'data';
import { useEffect, useRef } from 'react';

import '../styles/Projects.scss';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      console.log(containerRef.current?.scrollTop);
      const { scrollTop } = containerRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지

          current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          // 현재 3페이지

          current?.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지

          current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } else {
          // 현재 3페이지

          current?.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    };

    const { current } = containerRef;
    current?.addEventListener('wheel', wheelHandler);
    return () => {
      current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <div className='projects--container' ref={containerRef}>
      <Nav />
      {data.map((e, i) => {
        return <Project key={i} data={e} />;
      })}
    </div>
  );
}
