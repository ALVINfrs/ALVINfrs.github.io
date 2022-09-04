import {Card, Container,Col,Row,Image} from "react-bootstrap"
import antmanImage from "../assets/Images/superhero/antman.jpg"
import blackwiddowImage from "../assets/Images/superhero/black widdow.jpg"
import drstrangeImage from "../assets/Images/superhero/dr strange.jpg"
import endgameImage from "../assets/Images/superhero/end game.jpg"
import spidermanImage from "../assets/Images/superhero/spiderman.jpg"
import thorImage from "../assets/Images/superhero/thor.jpg"
const superhero =() => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md ={4}className="movieWrapper"id="SUPERHERO">
                    <Card className="  movieImage">
      <Image src={antmanImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">ANTMAN</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                   <Col md ={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={blackwiddowImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">BLACK WIDDOW</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                   <Col md ={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={drstrangeImage} alt="TOP GUN MAVERICK MOVIES"className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">DR STRANGE</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                   <Col md ={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={endgameImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">END GAME</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                   <Col md ={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={spidermanImage} alt="TOP GUN MAVERICK MOVIES"className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">SPIDERMAN NO WAY HOME</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                   <Col md ={4} className="movieWrapper">
                    <Card className="  movieImage">
      <Image src={thorImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">THOR</Card.Title>
                  <Card.Text className="text-left">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
      </div>
    </Card>
                   </Col>
                </Row>
            </Container>
   
        </div>
    )
}

export default superhero