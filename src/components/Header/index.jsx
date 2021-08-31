import HeaderLink from '../HeaderLink';
import "./style.css"

import { Link, useParams } from 'react-router-dom';

const Header = () => {
    const { page } = useParams() || 'home';

    return (
        <div className='header'>
            <HeaderLink page='home' selected={page === 'home'} />
            <HeaderLink page='about' selected={page === 'about'} />
            <HeaderLink page='projects' selected={page === 'projects'} />
        </div>
    );
};

export default Header;