import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container page-not-found">
        <h1 className="page-title">404!</h1>
        <h2>Page Not Found</h2>
        <p>Let's go back to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
