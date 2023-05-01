import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const [accept,setAccept] = useState(false)

    const { creatUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleCheck = event =>{
        setAccept(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto mt-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleCheck}
                     type="checkbox"
                    label= {<>Accept <Link to='/terms'>terms and conditions</Link></>}
                    />
                </Form.Group>
                <Button 
                 variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondery">
                    Aready Have An Account? <Link style={{ textDecoration: 'none', color: 'red' }} to={'/login'}>Login</Link>
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