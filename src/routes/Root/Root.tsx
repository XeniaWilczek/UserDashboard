import "./Root.scss";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar__header">
          <img
            src="./images/Logo.jpg"
            alt="Techlogo"
            className="sidebar__image"
          />
        </div>
        <Link to="./" className="sidebar__button">
          Übersicht
        </Link>
        <Link to="./Create" className="sidebar__button">
          Erstellen
        </Link>
      </div>
      <div className="content-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Root;
