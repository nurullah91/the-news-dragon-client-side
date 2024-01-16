import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import useTitle from '../../../useTitle';

const Register = () => {
    useTitle('register')
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()

    const handleCreateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password);
        form.reset();
       navigate('/login')
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Register Your Account</h3>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleAccepted}
                    type="checkbox" 
                    label={<>Accept <Link to='/terms'>Terms and conditions</Link></>}
                     />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>

                <Form.Text className="text-secondary">
                    <p>Already have an account?  <Link to='/login'>Login</Link></p>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;