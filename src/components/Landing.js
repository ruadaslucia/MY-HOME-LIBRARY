import '../styles/layouts/landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="landing">
        <section className="landing__section">
          <i className="fa-regular fa-bookmark landing__section--icon"></i>
          <h2 className="landing__section--title">my home books</h2>
          <button className="landing__section--button">
            <Link className="landing__section--link" to="/central">
              start
            </Link>
          </button>
        </section>
      </div>
    </>
  );
}
export default Landing;
