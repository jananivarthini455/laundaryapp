// import React, { useNavigate } from 'react';

import logo from './logo.svg';
import './App.css';
import style from 'react';
// import imgone from '../src/';
// import imgone from './images/imgone';
// import  imgone from '../public/images'
import imgone from  './imgone.jpg';
import { Routes, Route,useNavigate } from 'react-router-dom';

// import Signup from './signup.js';

import { Button, Form, Input, Row, Typography,Col,Card } from 'antd'
import Link from 'antd/es/typography/Link';



function Login() {

const navigate = useNavigate();

  return (
    <>
  
<div className="App">
     <img src = {imgone} alt="Girl in a jacket" width="500" height="500">
</img>

<Row gutter={20}>
    <Col span={18}>
 <div style={{ display : 'flex',marginLeft:'485px'}} >
<Card title="Welcome" bordered={false} style={{ width: 500 ,background:'#D3D3D3',align:'center'}}>

<div  style={{width :"400px",alignItems:'center',alignContent:'center',display:'center'}}>
    <div style={{display:'flex',marginRight:'100px',color:'green'}}>
   
        <Typography style={{color:'green'}}>  
          Sign in 
        </Typography>
        </div>
        <br></br>
      <Form>
    
      <Form.Item
       name="username"
    >
     <Input    />
   
      </Form.Item>
      </Form>
    <Button style={{width :"400px",color:'white',background:'green'}}>
      GET OTP
    </Button>
    <Typography>
      Don't have an account ? 
      
      
      < Button style={{color:'green'}}
      onClick={()=> navigate("/signup")}
      
        >

      please register
    
      

      </Button>
      
    </Typography>

</div>

</Card>
</div>   


</Col>
</Row>
</div>



</>
    

  );
}

export default Login;
