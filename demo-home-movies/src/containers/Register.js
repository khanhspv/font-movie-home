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
            // setTimeout( alert("We are will check info transaction of you!Thank"), 3000);
            setTimeout( alert("Transfer to activate your account!Thank"), 3000);
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
                          <option value="PREMIUM">PREMIUM = 100K </option>
                          <option value="BASIC">BASIC = 50K </option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="textarea-input">Info Transaction</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea 
                          name="content" 
                          id="textarea-input" 
                          rows="4"
                          placeholder="Info Transaction..." 
                          onChange={handleInputChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="textarea-input">Bank transfer</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CLabel htmlFor="textarea-input">Bank name: Vietcombank</CLabel><br/>
                            <CLabel htmlFor="textarea-input">Account number: 123456789</CLabel><br/>
                            <CLabel htmlFor="textarea-input">Name: Pham Viet Khanh</CLabel><br/>
                        </CCol>
                    </CFormGroup>

                  <CButton color="success" block onClick={register}>Create Account</CButton>
                </CForm>


              </CCardBody>
              {/*<CCardFooter className="p-4">*/}
              {/*  <CRow>*/}
              {/*    <CCol xs="12" sm="6">*/}
              {/*      <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>*/}
              {/*    </CCol>*/}
              {/*    <CCol xs="12" sm="6">*/}
              {/*      <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>*/}
              {/*    </CCol>*/}
              {/*  </CRow>*/}
              {/*</CCardFooter>*/}
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
