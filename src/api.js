import axios from 'axios';


axios({
    method: 'post',
    url: '/http://localhost:8080/signup',
    data: {
        username: 'Fred',
        email: 'Flintstone',
        mobile:'1234567890'
    }
  });