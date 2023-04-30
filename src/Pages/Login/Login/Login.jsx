import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((user) => {
                const loggedUser = user.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })
        form.reset();
    }


    return (
        <Container className='w-25 mx-auto'>
            <h3>Login Your Account</h3>
            <Form onSubmit={handleSignIn}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className="text-secondary">
                    <h5>Don't have any account?  <Link to='/register'>Register</Link></h5>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;