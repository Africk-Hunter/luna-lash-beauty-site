import React, { useEffect, useState } from 'react';
import hamburger from '../images/hamburger.svg';
import x from '../images/close.svg';

const Navbar: React.FC = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavBarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleResize);
    };
  }, []);

  function toggleHamburger() {
    const navLinks = document.getElementById('navBarLinks');
    if (navLinks?.classList.contains('open')) {
      navLinks?.classList.remove('open');
      setNavBarOpen(false);
      return;
    }
    navLinks?.classList.add('open');
    setNavBarOpen(true);
  }

  return (
    <section className='navbar' id='navbar'>
      <section className='topBarWrapper'>
        <a href='/'><h1 className='companyName'>Luna Lash & Beauty Co.</h1></a>
        <button className='hamburgerButton' onClick={toggleHamburger}>
          <img src={!navBarOpen ? hamburger : x} alt="Dropdown Menu" className='hamburgerImg' />
        </button>
      </section>
      <NavBarLinksWrapper names={['Home', 'Services', 'Gallery', 'About', 'FAQ']} />
    </section>
  );
};

interface NavBarLinksProps {
  names: Array<string>;
}

const NavBarLinksWrapper: React.FC<NavBarLinksProps> = ({ names }) => {
  const linkItems = names.map((itemName, index) =>
    <NavLinkButton name={itemName} key={index} />
  );

  return (
    <nav className='navBarLinks' id='navBarLinks'>
      {linkItems}
    </nav>
  );
};

interface NavLinkButtonProps {
  name: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ name }) => {
  const linkDirect = name !== 'Home' ? `/${name.toLowerCase()}` : '/';

  return (
    <a href={linkDirect} className='navLinkButton'>{name}</a>
  );
};

export default Navbar;