import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, FormControl, Dropdown, DropdownButton, InputGroup, Form } from 'react-bootstrap';
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

      PreviewCard({ linkData }) {
        return (
          <a className="preview" href={linkData.url}>
            <img src={linkData.image} />
            <div>
              <h4>{linkData.title}</h4>
              <p>{linkData.description}</p>
            </div>
          </a>
        )
      }

    render() { 
        const {photos, isLoading} = this.state;
       
            if(isLoading) {
                return (<div>Loading..</div>);
            }
            if(this.state.toggleForm) {
                return <div>
                    {/* <form onSubmit={this.postPhoto}>
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
                    </form> */}
                   <Card className="addImage" style={{width:"auto", height:"auto", border: "0.55px solid black", maxWidth:"600px"}}>
                    <Form onSubmit={this.postPhoto}>
                    <Form.Group>
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Paste your photo's URL here"
                         value = {this.state.photoLink}
                         onChange = {this.UpdatePhotoLinkValue}
                         />
                        <Form.Text>
                        (adding to photo gallery)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Caption for Photo</Form.Label>
                        <Form.Control type="text" name="caption" placeholder="Add a caption for your photo" 
                        value={this.state.caption}
                        onChange = {this.UpdatePhotoCaptionValue}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="submit">
                        Submit to Gallery
                    </Button>
                    <a href="/">
                    <Button variant="default" onClick={this.state}>
                        Back
                    </Button>
                    </a>
                    
                    </Form>
                    </Card>

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
                <CardGroup className="column">
                <Card className="card" style={{width:"auto", height:"auto", border: "0.55px solid black", maxWidth:"250px"}} >
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