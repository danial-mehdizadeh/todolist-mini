import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState();
  const [url, setUrl] = useState("https://al3w218u.onrender.com/get");
  const fetchAll = async (query) => {
    const res = await fetch(query);
    const json = await res.json();
    setNotes(JSON.parse(json));
    // const myPromise = new Promise((resolve, reject) => {

    //   const res = fetch("https://restcountries.com/v3.1/all")
    //   res ? resolve(res.json()) : reject("No")
    // });
    // myPromise.then((data) => {
    //   localStorage.setItem("allContries", data)
    //   setContries(localStorage.getItem("allContries"))
    // }

    // ).catch((err) => {
    //   alert('Your connection is unstable')
    // })
  };
  useEffect(() => {
    // console.log('hey')
    fetchAll("https://restcountries.com/v3.1/all");

    // localStorage.getItem("contries") ? setIsLocal(true) : alert("something wierd happend")
    // localStorage.getItem("contries") && setContries(localStorage.getItem("contries"))
  }, [url]);

  return (
    <Container>
      <header className={" p-3 header"}>
        <Container>
          <Row>
            <Col>
              <div>
                <h1>To Do List</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col>
            <div>
              <InputGroup>
                <Form.Control
                  placeholder="Add to-do"
                  aria-label="Add to-do"
                  value={search} // ...force the select's value to match the state variable...
                  onChange={(e) => setSearch(e.target.value)} // ... and update the state variable on any change!
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Add
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {notes?.map((item) => {
              return (
                <div>
                  <form
                    action="https://al3w218u.onrender.com/post"
                    method="post"
                  >
                    <InputGroup>
                      <Form.Control
                        placeholder="Add to-do"
                        aria-label="Add to-do"
                        name="title"
                        value={item.title} // ...force the select's value to match the state variable...
                        aria-describedby="basic-addon2"
                      />
                      <div>
                        <Form.Control
                          name={"id"}
                          value={item?.id}
                          className="d-none"
                        />
                      </div>
                      <input type="checkbox" name="delete" />
                      <label for="delete">delete</label>
                      <input id="button-addon2" type="submit" value="submit" />
                    </InputGroup>
                  </form>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
