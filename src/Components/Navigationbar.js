import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar =() =>{
    return (
        <div>
        <Navbar variant="dark">
            
            <Container>
             <Navbar.Brand href="/">ALVINFILMS</Navbar.Brand>
                <Nav>
                <Nav.Link href="#TRENDING">TRENDING</Nav.Link>
                <Nav.Link href="#SUPERHERO">SUPERHERO</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
        </div>
        




    )
        }

export default Navigationbar