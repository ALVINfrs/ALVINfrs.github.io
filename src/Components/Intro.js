import { Col, Container, Row,Button} from "react-bootstrap"
const Intro = () => {
    return (<div className=" intro">
    <Container className="text-white text-center d-flex justify-content-center allign-items-center ">
      <Row>
        <Col><div className="title">WEB INI DIBUAT </div>
             <div className="title">DENGAN KEGABUTAN</div>
             <div className="IntroButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
             </div>
        </Col>
      </Row>
    </Container>
   </div>

    )
}
export default Intro 