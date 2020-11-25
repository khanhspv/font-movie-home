import React,{useState, useEffect} from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow, CFormGroup, CLabel, CSelect, CTextarea, CCardGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {connect} from 'react-redux';
import { registerUser} from '../actions';
import * as TYPES from '../actions/types';
import history from '../history';
import {Link} from "react-router-dom";



const Introduce = ({registerUser,user}) => {

    const [values, setValues] = useState({});
    const handleInputChange =(event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        setValues({...values,
            [name]: value
        },);
    }

    const register =()=>{
        console.log({...values,member:{
                premium:values["member"],content:values["content"]
            }});
        registerUser({...values,member:{
                premium:values["member"],content:values["content"]
            }});
    }

    useEffect(() => {
        if(user.type === TYPES.REGISTER_USER_SUCCES){
            setTimeout( alert("Please make a transfer to activate your account"), 3000);
            history.push("/login");
        }
    }, [user]);


    return (
        <div className="c-app c-default-layout flex-row align-items-center ">
            <CContainer>
                <CRow className="justify-content-center mh-100">
                    <CCol md="12">
                        <CCardGroup>
                            <CCard className="p-4 h-100" style={{height:"300px !important"}}>
                                <CCardBody>
                                    <CForm>
                                        <h1>Packages</h1>
                                        <h2>Premium</h2>
                                        <p className="text-muted"><h5>Service package is right for you</h5></p>
                                        <CInputGroup className="mb-3">
                                            <CFormGroup row>
                                                <CCol md="12">
                                                    <CLabel htmlFor="textarea-input"><h5>See all content for television, sports, feature films and entertainment. In particular, give priority to previewing movies in parallel and not be bothered by advertisements</h5></CLabel>
                                                </CCol>
                                            </CFormGroup>
                                        </CInputGroup>
                                    </CForm>
                                    <CForm>
                                        <h2>BASIC</h2>
                                        <p className="text-muted">Service package is right for you</p>
                                        <CInputGroup className="mb-3">
                                            <CFormGroup row>
                                                <CCol md="12">
                                                    <CLabel htmlFor="textarea-input"><h5>See all content for television, sports, feature films and entertainment. In particular, give priority to previewing movies in parallel and not be bothered by advertisements</h5></CLabel><br/>
                                                </CCol>
                                            </CFormGroup>
                                        </CInputGroup>
                                    </CForm>
                                    <CForm>
                                        <h2>Free</h2>
                                        <p className="text-muted">Service package is right for you</p>
                                        <CInputGroup className="mb-3">
                                            <CFormGroup row>
                                                <CCol md="12">
                                                    <CLabel htmlFor="textarea-input"><h5>See all content for television, sports, feature films and entertainment. In particular, give priority to previewing movies in parallel and not be bothered by advertisements</h5></CLabel><br/>
                                                </CCol>
                                            </CFormGroup>
                                        </CInputGroup>
                                    </CForm>
                                </CCardBody>
                                <CCardBody className="text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>No Account. You are sign up now .............................................................................</p>
                                        <Link to="/register">
                                            <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                                        </Link>
                                        <h2> </h2>
                                        <Link to="/login">
                                            <CButton color="primary" className="mt-3" active tabIndex={-1}> Login </CButton>
                                        </Link>
                                    </div>
                                </CCardBody>
                            </CCard>
                            {/*<CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '100%' }}>*/}
                            {/*    <CCardBody className="text-center">*/}
                            {/*        <div>*/}
                            {/*            <h2>Sign up</h2>*/}
                            {/*            <p>No Account. You are sign up now .............................................................................</p>*/}
                            {/*            <Link to="/register">*/}
                            {/*                <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>*/}
                            {/*            </Link>*/}
                            {/*            <Link to="/login">*/}
                            {/*                <CButton color="primary" className="mt-3" active tabIndex={-1}> Login </CButton>*/}
                            {/*            </Link>*/}
                            {/*        </div>*/}
                            {/*    </CCardBody>*/}
                            {/*</CCard>*/}
                        </CCardGroup>
                    </CCol>
                </CRow>

            </CContainer>

        </div>

     )
}


const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(
    mapStateToProps,
    { registerUser}
) (Introduce);
