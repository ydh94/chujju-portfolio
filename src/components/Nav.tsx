import { useNavigate } from 'react-router-dom';
import '../styles/Nav.scss';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className='nav--container'>
      <ul className='nav--menulist'>
        <li
          className='nav--menus'
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </li>
        <li
          className='nav--menus'
          onClick={() => {
            navigate('/projects');
          }}
        >
          Projects
        </li>
        <li
          className='nav--menus'
          onClick={() => {
            navigate('/about');
          }}
        >
          About
        </li>
      </ul>
    </nav>
  );
}
