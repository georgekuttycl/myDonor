import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "./../../assets/img/logo.png";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";


function CustomerNavbar() {
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
          setNavbarColor("navbar-white");
        } else if (
          document.documentElement.scrollTop < 150 ||
          document.body.scrollTop < 150
        ) {
          setNavbarColor("navbar-transparent");
        }
      };

      window.addEventListener("scroll", updateNavbarColor);

      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    });
    function Logout(){
      // localStorage.removeItem('token');
      // window.location.replace('/');
    }
  return (
    <Navbar
    className={classnames("fixed-top", navbarColor)}
    style={{backgroundColor: 'WHITE'}}
    expand="lg"
  >
    <Container>
      <div className="navbar-translate">
        <NavbarBrand
          data-placement="bottom"
          to="/customer"
          target="_blank"
          title="Coded by MyDonor Team"
          tag={Link}
        >
          <img src={logo} height={80} width={120}/>
        </NavbarBrand>
        <button
          aria-expanded={navbarCollapse}
          className={classnames("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse
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
            <NavLink to={"/customer"} tag={Link} className="hover-underline-animation">
             Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={"/customer/about"}
              className="hover-underline-animation"
              tag={Link}
            >
               About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={"/customer/profile"}
              className="hover-underline-animation"
              tag={Link}
            >
               Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            to={"/customer/appointment"}
            tag={Link}
             className="hover-underline-animation"
            >
               Donate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={"/customer/purchase"}
              tag={Link}
               className="hover-underline-animation"
            >
               Purchase
            </NavLink>
          </NavItem>
         <NavItem>
            <Button
              className="btn-round"
              data-toggle="dropdown"
              style={{backgroundColor:'red',borderColor:'red'}}
              to={"/"}
              tag={Link}
              onClick={Logout()}
            >
              <i class="fa-solid fa-right-from-bracket"></i> Logout
            </Button>
          </NavItem>

        </Nav>
      </Collapse>
    </Container>
  </Navbar>
  )
}

export default CustomerNavbar