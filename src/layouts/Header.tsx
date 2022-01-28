// Components
import { Link } from 'react-router-dom';

// Icons
import UserIcon from '../assets/icons/user-header-24.png';

export default function Header() {
  return (
    <header>
      <Link to="/">Upload Data</Link>
      <img src={UserIcon} alt="" />
    </header>
  );
}
