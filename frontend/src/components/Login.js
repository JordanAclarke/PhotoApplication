// import React, { Component } from 'react';
// import Photo from "../components/Photo";
// import { Button, Card, Form } from 'react-bootstrap';


// class Login extends Component {

//     state = { 
//         isLoading:true,
//         user: '',
//         password: '',
//         toggleForm: false
//      }


//      togglePhotoAddForm = () => {
//         this.setState({
//             toggleForm: true
//         })
//     }


//     // constructor(props) {
//     //     super(props);
//     //     this.state = {  }
//     // }

//     render() { 

//         if(this.state.toggleForm) {
//             return <div>
//                 <Photo />
//             </div>
//         }

//         return ( 

//             <div>
//                 <Card className="login" >
//                     <Form onSubmit={<Photo />}>
//                     <Form.Group>
//                         <Form.Label>Username</Form.Label>
//                         <Form.Control type="text" placeholder="Enter your username"
//                          value = {this.state.photoLink}
//                          onChange = {this.UpdatePhotoLinkValue}
//                          />
                    
//                     </Form.Group>

//                     <Form.Group>
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="text" name="caption" placeholder="Enter your password" 
//                         value={this.state.caption}
//                         onChange = {this.UpdatePhotoCaptionValue}
//                         />
//                     </Form.Group>
//                     <Button variant="primary" type="submit" value="submit">
//                         Login
//                     </Button>

//                     </Form>
//                 </Card>
//             </div>
//          );
//     }
// }
 
// export default Login;