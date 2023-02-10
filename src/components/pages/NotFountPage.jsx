import { Link } from 'react-router-dom';

function NotFoundPage () {
  return (
    <div>
      <Link to="/">
        <h1>Page not found! Sorry for that! Click here to main site</h1>
      </Link>
    </div>
  )
};

export default NotFoundPage;