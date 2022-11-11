import '../styles/layouts/central.scss';
import Menu from './Menu';
import Books from './Books';
function Central() {
  return (
    <>
      <Menu />
      <Books />
      <div className="central"></div>
    </>
  );
}

export default Central;
