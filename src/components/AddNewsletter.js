import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
const Styles = styled.div``;
const AddNewsletter = () => {
  return (
    <Styles>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={valueChanged}
            ></Form.Control>
            <Form.Group>
                <Form.Label>Add File</Form.Label>
                <Form.Control
                    type="file"
                    ></Form.Control>
            </Form.Group>
          </Form.Group>
        </Form>
      </Container>
    </Styles>
  );
};
export default AddNewsletter;
