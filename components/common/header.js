import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  const router = useRouter()
  const { url } = router.query

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container className={'navflex'}>
          <NavbarBrand href="/">
            <img className="logo-img" src="/images/kingofcarbs-icon.png" alt="icon image of playing card styled like king holding fries and corn-dog and an H in the corner, titled king of carbs"></img>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/" className={router.pathname == "/" ? "active" : ""}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resume" className={router.pathname == "/resume" ? "active" : ""}>Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/case-studies" className={router.pathname == "/case-studies" ? "active" : ""}>Case Studies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/writing" className={router.pathname == "/writing" ? "active" : ""}>Writing</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarToggler onClick={toggle} />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;