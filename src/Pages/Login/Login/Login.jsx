import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import useTitle from '../../../useTitle';

const Login = () => {
    useTitle('login')

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
  

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((user) => {
                const loggedUser = user.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            })
      
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
                    <p>Don't have any account?  <Link to='/register'>Register</Link></p>
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