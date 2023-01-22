import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/character-search">Character Search</Link>
        </li>
      </ul>
    </div>
  );
}
