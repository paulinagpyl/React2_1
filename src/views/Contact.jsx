import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Form
      style={{
        display: "flex",
        backgroundColor: "#ffe4e1",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Ingrese descripción" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contact;
