import { useEffect, useRef, useState } from 'react';
import { Nav, Sidebar, Project, LoadingIndicator } from 'components';
import data from 'data';
import '../styles/Cg.scss';

export default function Cg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusPage, setFocusPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const scrollHandler = (page: number) => {
    setFocusPage(page);
    const pageHeight = window.innerHeight;
    containerRef.current?.scrollTo({
      top: (pageHeight - 79) * page,
      left: 0,
    });
  };

  useEffect(() => {
    // let page = focusPage;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      // const { deltaY } = e;
      // if (deltaY > 0) {
      //   if (page < data.length - 1) {
      //     page++;
      //     scrollHandler(page);
      //   }
      // } else if (deltaY <= 0) {
      //   if (page > 0) {
      //     page--;
      //     scrollHandler(page);
      //   }
      // }
    };

    document.onkeydown = function (e: KeyboardEvent) {
      if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        return false;
      }
    };
    containerRef.current?.addEventListener('wheel', wheelHandler);
  }, [focusPage]);

  useEffect(() => {
    setIsLoading(true);
  }, [focusPage]);

  const handleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className='cg--container' ref={containerRef}>
      <Nav />
      <Sidebar data={data} scrollHandler={scrollHandler} focusPage={focusPage} />
      {isLoading && <LoadingIndicator />}
      {data.map((e, i) => {
        return <Project key={i} data={e} focused={focusPage === i} handleLoading={handleLoading} />;
      })}
    </div>
  );
}
