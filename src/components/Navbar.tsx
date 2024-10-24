import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      console.log(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <section className='navbar' id='navbar'>
      {windowWidth < 768 ? (
        <>
          <section className='topBarWrapper mobile'>
            <h1 className='companyName'>Luna Lash & Beauty Co.</h1>
            <button className='hamburgerButton'><img src="" alt="Dropdown Menu" /></button>
          </section>
          <nav className='navBarLinks mobile'>
            <NavLinkButton windowWidth={windowWidth} name='Home' />
            <NavLinkButton windowWidth={windowWidth} name='Services' />
            <NavLinkButton windowWidth={windowWidth} name='Gallery' />
            <NavLinkButton windowWidth={windowWidth} name='About' />
            <NavLinkButton windowWidth={windowWidth} name='Gallery' />
          </nav>
        </>
      ) : (
        <>
          <section className='topBarWrapper desktop'>
            <h1 className='companyName'>Luna Lash & Beauty Co.</h1>
            <nav className='navBarLinks desktop'>
              <NavLinkButton windowWidth={windowWidth} name='Home' />
              <NavLinkButton windowWidth={windowWidth} name='Services' />
              <NavLinkButton windowWidth={windowWidth} name='Gallery' />
              <NavLinkButton windowWidth={windowWidth} name='About' />
              <NavLinkButton windowWidth={windowWidth} name='Gallery' />
            </nav>
          </section>
        </>
      )}
    </section>
  );
};

interface NavLinkButtonProps {
  windowWidth: number;
  name: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ windowWidth, name }) => {

  return (
    <>
      {windowWidth < 768 ? (
        <button className='navLinkButton mobile'>{name}</button>
      ) : (
        <button className='navLinkButton desktop'>{name}</button>
      )}
    </>
  );

}

export default Navbar;
