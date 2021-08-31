import { Link } from 'react-router-dom';
import './style.css';

const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link ' : '';
  className += 'headerlink-title';

  // for aesthetic, put dashes below selected tab



  return (
    <Link to={`/${page}`} className={className}>
      {title}
      <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
        *
      </div>
    </Link>
  );
};

export default HeaderLink;