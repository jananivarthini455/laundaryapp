import './App.css';
// import style from 'react';
import React, { useEffect } from "react";


import imgone from  './imgone.jpg';
// import Login from './login';


import { Button, Form, Input, Row, Typography,Col,Card } from 'antd';
import { useNavigate } from 'react-router-dom';


function Signup(){
    const navigate = useNavigate();
    useEffect(() => {
      const url = "http://localhost:8080/signup"
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);

  return (
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
          Sign up
        </Typography>
        </div>
        <br></br>
      <Form>
    
      <Form.Item
       name="fullname"
    >
     <Input    />
   
      </Form.Item>

      <Form.Item
       name="phonenumber"
    >
     <Input    />
   
      </Form.Item>


      <Form.Item
       name="email"
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
       onClick={()=> navigate("/home")}
      
        >

      signin
    
      

      </Button>
      
    </Typography>

  

</div>

</Card>
</div>   


</Col>
</Row>
</div>

 );
}

export default Signup;
