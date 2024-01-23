import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json-api/menu.json';
import './Header.css';

function Mainmenu({demo}) {
  return(
    <>
      <Link to={demo.link} className={demo.IsButton ? "btn btn-primary" : 'nav-link'}>
        {demo.label}
        
        </Link>
    </>
  );
  
}

function DropdownMenu({demo}){
  return(
    <NavDropdown title={demo.label} id="navbarScrollingDropdown">
      {
        demo.dropdownmenu.map((data,index)=>{
          return <Mainmenu demo={data} key={index}/>
        })
      }

    </NavDropdown>
  )
} 

  


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>
            <img src='logo192.png' alt='logo' width={35}/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
            
          </Form>

          {
            menu.map((item,index)=>{
              if(item.IsDropDown){
                return<DropdownMenu demo={item} key={index}/>
              }
                return <Mainmenu demo={item} key={index}/>

            })
          }

            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
              
              