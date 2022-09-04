import {Card, Container,Col,Row,Image} from "react-bootstrap"
import topgunImage from "../assets/Images/trending/top gun.jpg"
import morbiusImage from "../assets/Images/trending/morbius.jpg"
import minionsImage from "../assets/Images/trending/minions.jpg"
import lightyearImage from "../assets/Images/trending/Lightyer.jpg"
import kknImage from "../assets/Images/trending/kkn.jpg"
import jurasicword_Image from "../assets/Images/trending/jurasicword_.jpg"
const Trending =() => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md ={4}className="movieWrapper"id="TRENDING">
                    <Card className="  movieImage">
      <Image src={topgunImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">TOP GUN</Card.Title>
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
      <Image src={morbiusImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">MORBIUS</Card.Title>
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
      <Image src={minionsImage} alt="TOP GUN MAVERICK MOVIES"className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">MINIONS</Card.Title>
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
      <Image src={lightyearImage} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
      <Image src={kknImage} alt="TOP GUN MAVERICK MOVIES"className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">KKN DESA PENARI</Card.Title>
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
      <Image src={jurasicword_Image} alt="TOP GUN MAVERICK MOVIES" className="images"/>
      <div className="bg-dark">
        <div className="p-3, m-2 text-white ">
        <Card.Title className="text-center">JURASIC WORLD</Card.Title>
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

export default Trending