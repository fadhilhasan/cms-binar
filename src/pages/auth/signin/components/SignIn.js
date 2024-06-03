/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import logo from '../../../../assets/icons/logo.png';
import Button from 'react-bootstrap/Button';

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  return (
    <>
      <div className="">
        <section className="row">
          <div className="col-12 col-md-6 d-none d-md-block">
            <div
              className="left_data"
              style={{
                flex: '0 0 60%',
                display: 'flex',
                justifyContent: 'flex-start',
                position: 'relative',
                height: '100vh',
                overflow: 'hidden'
              }}>
              <img
                src="./sign_img.png"
                alt=""
                style={{
                  height: '100%',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center vh-100">
            <div className="right_data ps-5" style={{ width: '100%', maxWidth: '600px' }}>
              <img src={logo} style={{ width: '15%' }} className="signup-logo" alt="logo" />
              <h3 className="text-start mt-4">Welcome, Admin BCR!</h3>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.onSubmit(form);
                }}>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                  {props.message && (
                    <div className="alert alert-danger" role="alert">
                      {props.message}
                    </div>
                  )}
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setForm({ ...form, ...{ email: e.target.value } })}
                    placeholder="admin@main.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setForm({ ...form, ...{ password: e.target.value } })}
                    placeholder="6+ karakter"
                  />
                </Form.Group>

                <Button variant="primary" className="col-12 col-lg-8 mt-3" type="submit">
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;

SignIn.defaultProps = {
  onSubmit: () => {}
};
