import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div>
      <h1>Overview</h1>
      <nav>
        <Link to="/">back to homepage</Link>
      </nav>
    </div>
  );
}
