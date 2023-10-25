import './App.css';
// import style from 'react';
import homeimg from  './homeimg.jpg';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Divider } from 'antd';
import { Button, Row, Typography,Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import hometwoimg from './hometwoimg.jpg';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
 
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(236, 236, 236, 1)',
          'rgba(38, 166, 91, 1)',
       
        ],
        borderColor: [
          'rgba(236, 236, 236,1)',
          'rgba(38, 166, 91, 1)',
       
        ],
        borderWidth: 1,
      },
    ],
  };


function Home(){
    const navigate = useNavigate();

  return (
<div className="App">
     <img src = {homeimg} alt="Girl in a jacket" width="30%" height="300">
</img>
<Row gutter={2} >
    <Col span={6}>
 

<div className="App" style={{
  display : 'flex-center',marginRight:'400%',
    borderRadius:'250px',
    padding:'30px',
    width:'300px',
    height:'300px',
    marginLeft:'430px'
}}> 
     <img src = {hometwoimg} alt="Girl in a jacket" width="200" height="100">
</img>

  
  <br />  





  
   
   <Button   style={{backgroundColor:'green',color:'white'}}
       

   >
       Detailed order
   </Button>
   
<br />
<br />

   <Typography  style={{color:'green',marginRight:'150px'}}>your orders</Typography>

<Row>
    <Col>
   <Doughnut data={data} />
   </Col>

   </Row>
   <br />
   <br />
<Row>
  <Col>
  <Typography style ={{color:'green',fontSize:'20px'}}>
    collections
  </Typography>
  </Col>

  <Col span={16} >
  <Typography style={{color:'green',fontSize:'20px'}}>
    delivery

  </Typography>
  </Col>
</Row>
   <Divider />

   </div>




</Col>

<Col>
<div style={{
    borderRadius:'250px',
    padding:'50px',
    width:'200px',
    height:'150px',
    marginLeft:'390px'
    
}} >
    <Typography style={{color:'green',marginRight:'50px',fontSize:'20px'}}>get 25% discount</Typography>
<br />

<div style={{
  marginRight:'500px'
}}>
< Button style={{color:'green'}}
      onClick={()=> navigate("/quick")}
      
        >
  Quick orders

  
  </Button>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />


    <Typography  style={{color:'green',marginRight:'50px',fontSize:'32px'}} >order number</Typography>

</div> 
</Col>



</Row>
</div>

 );
}

export default Home;















