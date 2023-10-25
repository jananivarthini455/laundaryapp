import './App.css';
// import style from 'react';
 import { Button, Form, Input, Row, Typography,Col,Card } from 'antd';
// import { useNavigate } from 'react-router-dom';


function Quick(){
    // const navigate = useNavigate();

  return (
<div style={{ 
  marginLeft:'500px'

}} >
    

<Typography style={{color:'green',fontSize:'20px',marginLeft:'150px'}}>Quick order</Typography>

    <Card title="Today" bordered={false} style={{ width: 500 ,background:'#D3D3D3',align:'center'}}>

<div  style={{width :"400px",alignItems:'center',alignContent:'center',display:'center'}}>
    <div style={{display:'flex',marginRight:'100px',color:'green'}}>
   
        <Typography style={{color:'green'}}>  
        pickupdate
        </Typography>
        </div>
        <br></br>
      <Form>
    
      <Form.Item
       name="fullname"
    >
     <Input    />
   
      </Form.Item>
      <Typography style={{color:'green'}}>  
        pickuptime
        </Typography>

      <Form.Item
       name="phonenumber"
    >
     <Input    />
   
      </Form.Item>

<Typography style={{color:'grey',marginLeft:'180px'}}>
  Expected to deliver within 24 hours
</Typography>
      <Button style={{width :"400px",color:'white',background:'green'}}>
      Place Order
    </Button>
      </Form>
   

    
   
    
      

     

  

</div>

</Card>
</div>

 );
}

export default  Quick;
