import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <Link to="overview">Overview</Link>
      </nav>
    </div>
  );
}
