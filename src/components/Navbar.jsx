import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Nav className="me-auto">
            <Link to='/'>Главная</Link>
            <Link to='/About'>О Себе</Link>
            <Link to='/Skills'>Скиллы</Link>
          </Nav>
        </Container>
      </Navbar>
     </>)}
   export default MyNavbar;