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
  CRow,CFormGroup,CLabel,CSelect,CTextarea
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {connect} from 'react-redux';
import { registerUser} from '../actions';
import * as TYPES from '../actions/types';
import history from '../history';



const Register = ({registerUser,user}) => {

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
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center" style={{width:"1000px",height:"500px"}}>
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username"name="userName" onChange={handleInputChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" name="email" onChange={handleInputChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" name="password" onChange={handleInputChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Age" autoComplete=""onChange={handleInputChange} />
                  </CInputGroup>
                  <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="selectSm">Member Package</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom  name="member" id="Select" onChange={handleInputChange}>
                          <option value="PREMIUM">PREMIUM (100k)</option>
                          <option value="BASIC">BASIC (50k)</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    {/*<CFormGroup row>*/}
                    {/*  <CCol md="3">*/}
                    {/*    <CLabel htmlFor="textarea-input">Premium </CLabel>*/}
                    {/*  </CCol>*/}
                    {/*  <CCol xs="12" md="9">*/}
                    {/*      <CLabel htmlFor="textarea-input">Premium </CLabel>*/}
                    {/*  </CCol>*/}
                    {/*</CFormGroup>*/}
                    {/*<CFormGroup row>*/}
                    {/*    <CCol md="3">*/}
                    {/*        <CLabel htmlFor="textarea-input">BASIC </CLabel>*/}
                    {/*    </CCol>*/}
                    {/*    <CCol xs="12" md="9">*/}
                    {/*        <CLabel htmlFor="textarea-input">Premium </CLabel>*/}
                    {/*    </CCol>*/}
                    {/*</CFormGroup>*/}
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="textarea-input">Information</CLabel><br/>
                            <CLabel htmlFor="textarea-input">Bank name </CLabel><br/>
                            <CLabel htmlFor="textarea-input">Account number </CLabel><br/>
                            <CLabel htmlFor="textarea-input">Beneficiaries </CLabel><br/>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CLabel htmlFor="textarea-input">  </CLabel><br/>
                            <CLabel htmlFor="textarea-input"> Vietcombank </CLabel><br/>
                            <CLabel htmlFor="textarea-input"> 234567  </CLabel><br/>
                            <CLabel htmlFor="textarea-input"> Pham Viet Khanh  </CLabel><br/>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="textarea-input"> Specify the content of the transfer </CLabel><br/>
                    </CCol>
                    <CCol xs="12" md="9">
                        <CLabel htmlFor="textarea-input"> Transfer account name and content </CLabel><br/>
                    </CCol>
                    </CFormGroup>
                  <CButton color="success" block onClick={register}>Create Account</CButton>

                </CForm>


              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block onClick={()=>history.push("/login")}><span>Already account Login </span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    {/* <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton> */}
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
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
  ) (Register);
