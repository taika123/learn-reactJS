import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./ModelCreateUser.scss";
import { BsArrowBarUp } from "react-icons/bs";
import axios from "axios";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;
  //   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [Image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };

  const handleSubmit = async () => {
    //validate

    // call axios

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("Image", Image);
    data.append("previewImage", previewImage);

    const res = await axios.post("https://httpbin.org/post", data);
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Form>
        <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label placeholder="Username">User name</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    //   defaultValue="user"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="row-media">
                <Form.Group as={Col} controlId="image" className="image">
                  <Form.Label className="cursor">
                    <BsArrowBarUp /> Upload Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    hidden
                    onChange={(e) => handleUploadImage(e)}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="preview-image"
                  className="preview-image"
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt=""
                      width={"200px"}
                      height={"200px"}
                    />
                  ) : (
                    <Form.Label> Preview Image</Form.Label>
                  )}
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default ModalCreateUser;
