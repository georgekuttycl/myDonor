import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../../images/logo.png";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from "./Home";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 150 ||
        document.body.scrollTop > 150
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            target=""
            title="Coded by MyDonor Team"
            tag={Link}
          >
            <img src={logo} height={80} width={120} />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                to="/"
                tag={Link}
                style={{ color: "red" }}
                className="hover-underline-animation"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/about"
                tag={Link}
                className="hover-underline-animation"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to={"/login"}>
                <Button className="btn-round">
                  <i className="nc-icon nc-spaceship"></i>
                  Sign in
                </Button>
              </Link>
              <Link to={"/customerSignup"}>
                {/* <Button
                className="btn-round"
                style={{backgroundColor:'red',borderColor:'red'}}>
               <i class="fa-solid fa-right-to-bracket"></i>
                 Sign up
              </Button> */}
              </Link>
            </NavItem>
            <UncontrolledDropdown>
                <DropdownToggle caret style={{backgroundColor:'red',borderColor:'red',borderRadius:'20px'}}> <i class="fa-solid fa-right-to-bracket"></i>sign up</DropdownToggle>
                <DropdownMenu>
                <Link to={"/customerSignup"} > <DropdownItem style={{textDecoration:'none'}}>Customer</DropdownItem></Link>
                <Link to={"/hospitalSignup"} > <DropdownItem style={{textDecoration:'none'}}>Hospital</DropdownItem></Link>

                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
