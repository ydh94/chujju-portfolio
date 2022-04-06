import '../styles/Sidebar.scss';

interface ISidebarProps {
  data: { title: string }[];
  scrollHandler: (page: number) => void;
  focusPage: number;
}

export default function Sidebar(attr: ISidebarProps) {
  const data = attr.data;
  const scrollHandler = attr.scrollHandler;
  const focusPage = attr.focusPage;

  return (
    <nav className='sidebar--container'>
      {data.map((e, i) => {
        return (
          <li key={i} className={focusPage === i ? `sidebar--list--selected` : `sidebar--list`} onClick={() => scrollHandler(i)}>
            {e.title}
          </li>
        );
      })}
    </nav>
  );
}
