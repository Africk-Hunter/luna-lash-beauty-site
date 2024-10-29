import React, { useEffect, useState } from 'react';
import hamburger from '../images/hamburger.svg'

const Navbar: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
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
      return;
    }
    navLinks?.classList.add('open');
  }

  return (
    <section className='navbar' id='navbar'>
      {windowWidth < 768 ? (
        <>
          <section className='topBarWrapper mobile'>
            <h1 className='companyName'>Luna Lash & Beauty Co.</h1>
            <button className='hamburgerButton' onClick={toggleHamburger}><img src={hamburger} alt="Dropdown Menu" className='hamburgerImg' /></button>
          </section>
          <NavBarLinksWrapper windowWidth={windowWidth} names={['Home', 'Services', 'Gallery', 'About', 'FAQ']} />
        </>
      ) : (
        <>
          <section className='topBarWrapper desktop'>
            <h1 className='companyName'>Luna Lash & Beauty Co.</h1>
            <NavBarLinksWrapper windowWidth={windowWidth} names={['Home', 'Services', 'Gallery', 'About', 'FAQ']} />
          </section>
        </>
      )}
    </section>
  );
};

interface NavBarLinksProps {
  windowWidth: number;
  names: Array<string>;
}
const NavBarLinksWrapper: React.FC<NavBarLinksProps> = ({ windowWidth, names }) => {

  const linkItems = names.map((itemName, index) =>
    <NavLinkButton windowWidth={windowWidth} name={itemName} key={index} />
  )

  return (
    <>
      {windowWidth < 768 ? (
        <nav className='navBarLinks mobile' id='navBarLinks'>
          {linkItems}
        </nav>
      ) : (
        <nav className='navBarLinks desktop'>
          {linkItems}
        </nav>
      )}
    </>
  );
}


interface NavLinkButtonProps {
  windowWidth: number;
  name: string;
}
const NavLinkButton: React.FC<NavLinkButtonProps> = ({ windowWidth, name }) => {

  let linkDirect: string = '';
  if(name != 'Home'){
    linkDirect= '/' + name.toLowerCase();
  } else{
    linkDirect = '/';
  }
  
  return (
    <>
      {windowWidth < 768 ? (
        <a href={linkDirect} className='navLinkButton mobile'>{name}</a>
      ) : (
        <a href={linkDirect} className='navLinkButton desktop'>{name}</a>
      )}
    </>
  );

}

export default Navbar;
