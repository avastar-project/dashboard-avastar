// Components
import { Link } from 'react-router-dom';

// Icons
import FBIcon from '../assets/icons/facebook-nav-24.png';
import GoogleIcon from '../assets/icons/google-nav-24.png';
import HomeIcon from '../assets/icons/home-nav-24.png';
import OverIcon from '../assets/icons/over-nav-24.png';

// Contains each page link infomations
const navLinks = [
  {
    name: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'Overview',
    link: '/overview',
    icon: OverIcon,
  },
  {
    name: 'Facebook',
    link: '/facebook',
    icon: FBIcon,
  },
  {
    name: 'Google',
    link: '/google',
    icon: GoogleIcon,
  },
];

export default function MainNav() {
  return (
    <nav>
      <ul>
        {/* Mapping navLinks array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {navLinks.map((elt, index) => (
          <li key={index}>
            <Link to={elt.link}>
              <img src={elt.icon} alt={`${elt.name}-icon`} />
              {elt.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
