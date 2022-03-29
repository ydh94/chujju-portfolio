import '../styles/Sidebar.scss';

interface ISidebarProps {
  data: any;
  scrollHandler: (page: number) => void;
  focusPage: number;
  sidebarHandler?: () => void;
}

export default function Sidebar(attr: ISidebarProps) {
  const data = attr.data;
  const scrollHandler = attr.scrollHandler;
  const focusPage = attr.focusPage;
  const sidebarHandler = attr.sidebarHandler;

  return (
    <nav className='sidebar--container' onMouseLeave={sidebarHandler}>
      {data.map((e: { title: string }, i: number) => {
        return (
          <li className={focusPage === i ? `sidebar--list--selected` : `sidebar--list`} onClick={() => scrollHandler(i)}>
            {e.title}
          </li>
        );
      })}
    </nav>
  );
}
