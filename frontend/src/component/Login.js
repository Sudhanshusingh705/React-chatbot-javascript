import React from 'react';
import { Formik } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';

const Login = () => {

    const loginSubmit = async (loginData) => {
        console.log(loginData);
        const response = await fetch('http://localhost:5000/user/login', {
            method: 'post',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status);
        if (response.status === 200) {
            console.log('Login Successfull');
        } else {
            console.log('some error occurred');
        }
    }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                                alt="Phone img"
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit} >
                                {({ values, handleChange, handleSubmit }) => {
                                    return <form onSubmit={handleSubmit}>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <MDBInput
                                                label='Email address'
                                                id='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                required
                                                type='email' />


                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <MDBInput
                                                label='Password'
                                                id='password'
                                                type='password'
                                                onChange={handleChange}
                                                value={values.password}
                                                required
                                            />

                                        </div>
                                        <div className="d-flex justify-content-around align-items-center mb-4">
                                            {/* Checkbox */}
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form1Example3"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label" htmlFor="form1Example3">
                                                    {" "}
                                                    Remember me{" "}
                                                </label>
                                            </div>
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Sign in
                                        </button>
                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>
                                        <a
                                            className="btn btn-primary btn-lg btn-block"
                                            style={{ backgroundColor: "#3b5998" }}
                                            href="#!"
                                            role="button"
                                        >
                                            <i className="fab fa-facebook-f me-2" />
                                            Continue with Facebook
                                        </a>
                                        <a
                                            className="btn btn-success btn-lg btn-block"
                                            style={{ backgroundColor: "#55acee" }}
                                            href="#!"
                                            role="button"
                                        >

                                            <i className="fab fa-google me-2" />
                                            Continue with Google
                                        </a>
                                    </form>
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login;