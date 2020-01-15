import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, FormControl, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Axios from 'axios';




class Photo extends Component {
    state = { 
        isLoading:true,
        photos: [],
        photoLink: '',
        caption: '',
        quotes: '',
        toggleForm: false
     }

    //  Test
    
     postPhoto = () => {
        Axios.post('/api/addPhoto', this.state).then(response => {
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
     }

     getQuotes = () => {
         Axios.get('https://random-math-quote-api.herokuapp.com/').then(
             response => {
                console.log(response.data.quote)
                this.setState({quotes: response.data.quote})
                // console.log(response.data.quote);
             }
         ) 
         
     }

     togglePhotoAddForm = () => {
        this.setState({
            toggleForm: true
        })
    }

    UpdatePhotoLinkValue = (evt) => {
        this.setState({
            photoLink: evt.target.value,
        });
    }

    UpdatePhotoCaptionValue = (evt) => {
        this.setState({
            caption: evt.target.value,
        });
    }
     async componentDidMount() {
         const response = await fetch('/api/getAllPhotos');
         const body = await response.json();
         this.setState({photos: body, isLoading: false, quotes: this.getQuotes()});
         //console.log(this.state.caption)
     }
    render() { 
        const {photos, isLoading} = this.state;
       
            if(isLoading) {
                return (<div>Loading..</div>);
            }
            if(this.state.toggleForm) {
                return <div>
                    <form onSubmit={this.postPhoto}>
                        Photo URL:
                        <input type="text"
                        name="photoLink"
                        value = {this.state.photoLink}
                        onChange = {this.UpdatePhotoLinkValue}
                        />
                        <br>
                        </br>
                        Photo Caption:
                        <input type="text"
                        name="caption"
                        value={this.state.caption}
                        onChange = {this.UpdatePhotoCaptionValue}
                        />
                        <input type="submit" value="submit" />
                    </form>
                   


                    <InputGroup className="mb-3">
                      <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                      <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>
                  
                    <InputGroup>
                      <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                  
                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>

                </div>


                
                

                  
                


            }
        
        return (  
            <div>
                <div className="header">
                <h2 >Photo Gallery </h2> 
                <h5 id="camera">📷</h5>
                </div>
                <hr></hr>
              
                <p style={{fontFamily: "cursive"}}><span style={{fontFamily: "cursive", fontWeight: "bold"}}>Quote of the Day: </span> {this.state.quotes}</p>
                <hr></hr>
                <button onClick={this.togglePhotoAddForm}>Post a Photo</button>
                <br></br>
                <br></br>

                <div class="row">

                    <div class="column">
                {
                    photos.map( photo => 
                <CardGroup className="column ">
                <Card style={{width:"auto", height:"auto", border: "1px solid black", maxWidth:"250px"}} >
                <Card.Img variant="top" src={photo.photoLink}  style={{width:"auto", height:"auto", maxHeight: "250px", maxWidth:"250px"}}/>
                <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>{photo.caption} </Card.Text>
                <div></div>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
                 <Card.Footer> 
                </Card.Footer> 
            </Card>
            </CardGroup>
                )
                }

                    </div>
                </div>


            </div>

        );
    }
}
 
export default Photo;