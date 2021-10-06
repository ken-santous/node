
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "#1a78c5" }}>بسم الله الرحمن الرحيم</h1>
        <br />

        <Container>
          <Row>
            <Col>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant="success">
                <Alert.Heading><Button variant="secondary">المرحومة الحاجة أم جواد</Button>{" "}</Alert.Heading>
                <hr/>
                <p>
                “يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ * ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً * فَادْخُلِي فِي عِبَادِي * وَادْخُلِي جَنَّتِي” ،
بعيون دامعة وقلوب خاشعة راضية بقضاء الله وقدره، تلقينا نبأ الوفاة سائلين الله لأسرة الفقيده
الصبر والسلوان وللمرحومه الرحمة والمغفرة
                </p>
                <hr />
                <p className="mb-0">
                إنا لله وإنا إليه راجعون ، اللهم اغفـر لها وارحمها واعف عنها وأكرم نزلها ووسع مدخلها واغسلها بالماء والثلج والبرد
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
