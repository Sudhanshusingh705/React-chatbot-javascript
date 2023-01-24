import React from 'react';
import { Formik } from 'formik';
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Register = () => {

    const registerSubmit = async (registerData) => {
        console.log(registerData);
        const response = await fetch('http://localhost:5000/user/register', {
            method: 'post',
            body: JSON.stringify(registerData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status);
        if (response.status === 200) {
            console.log("your are registered");
        } else {
            console.log('Some error occurred');
        }
    }


    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

                                            <Formik initialValues={{ username: '', email: '', password: '', fullname: '', contact: '', parentContact: '' }} onSubmit={registerSubmit}>
                                                {({ values, handleSubmit, handleChange }) => {
                                                    return <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    label='Username'
                                                                    type="text"
                                                                    id="username"
                                                                    value={values.username}
                                                                    onChange={handleChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    label='Your Email'
                                                                    type="email"
                                                                    id="email"
                                                                    value={values.email}
                                                                    onChange={handleChange}
                                                                    required />

                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    type="password"
                                                                    id="password"
                                                                    value={values.password}
                                                                    onChange={handleChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-signature fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    label='FullName'
                                                                    type="text"
                                                                    id="fullname"
                                                                    value={values.fullname}
                                                                    required
                                                                    onChange={handleChange} />

                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-phone fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    label='Contact'
                                                                    type="number"
                                                                    id="contact"
                                                                    value={values.contact}
                                                                    required
                                                                    onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-phone fa-lg me-3 fa-fw" />
                                                            <div className="form-outline flex-fill mb-0">
                                                                <MDBInput
                                                                    label='Parent Contact'
                                                                    type="number"
                                                                    id="parentContact"
                                                                    value={values.parentContact}
                                                                    required
                                                                    onChange={handleChange} />
                                                            </div>
                                                        </div>
                                                        <div className="form-check d-flex justify-content-center mb-5">
                                                            <MDBCheckbox
                                                                name='flexCheck'
                                                                value=''
                                                                id='flexCheckDefault'
                                                                label={`I agree all statements in ${" "}`} />
                                                            <a href="#!">Terms of service</a>
                                                        </div>
                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <button type="submit" className="btn btn-primary btn-lg">
                                                                Register
                                                            </button>
                                                        </div>
                                                    </form>
                                                }}

                                            </Formik>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register;