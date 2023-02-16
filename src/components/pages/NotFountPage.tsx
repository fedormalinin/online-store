import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <Link to='/'>
        <h1>Page not found! To main site (click here)</h1>
      </Link>
    </div>
  );
}

export default NotFoundPage;
