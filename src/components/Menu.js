import '../styles/components/menu.scss';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="menu">
        <Link className="menu__link" to="/">
          <button className="menu__link--button">
            <i className="fa-solid fa-arrow-left menu__link--arrow"></i>
          </button>
        </Link>

        <div className="menu__buttons">
          <ul className="menu__buttons--list">
            <li className="menu__buttons--item">
              <button className="menu__buttons--button">all</button>
            </li>
            <li className="menu__buttons--item">
              <button className="menu__buttons--button">my favourites</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
