import { useNavigate } from 'react-router-dom';

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
      </ul>
    </nav>
  );
}
