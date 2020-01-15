import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import Axios from 'axios';

// import "react-datepicker/dist/react-datepicker.css";
class Photo extends Component {
    state = { 
        date: new Date().toLocaleTimeString(),
        isLoading:true,
        photos: [],
        photoLink: '',
        caption: '',
        quotes: '',
        toggleForm: false
     }

    //  Test
     opts = this.state;
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

    // changeHandler = (e) => {
    //     this.setState({[e.target.value]: e.target.value})
    // }
    //  
    // async createQuote() {
    //     const url = "https://random-math-quote-api.herokuapp.com/";
    //     const response = await fetch(url);
    //     const data = await response.json()
    //     console.log(data.quote)
    //     this.setState({caption: data.quote})
    // }
     async componentDidMount() {
         const response = await fetch('/api/getAllPhotos');
         const body = await response.json();
         this.setState({photos: body, isLoading: false, quotes: this.getQuotes()});
         console.log("Caption"  + this.state.caption)
        //  console.log(this.createQuote())
     }
    render() { 
        const {photos, isLoading, quotes} = this.state;
       
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
                        placeholder = {this.state.quotes}
                        value={this.state.caption}
                        onChange = {this.UpdatePhotoCaptionValue}
                        />
                        <input type="submit" value="submit" />
                    </form>
                   
                </div>
            }
        
        return (  
            <div>
                <h2>All Photos:</h2>
                <button onClick={this.togglePhotoAddForm}>Post Photo</button>
                
                
                {
                    photos.map( photo => 
                <CardGroup>
                <Card style={{width:"auto", height:"auto", border: "1px solid black", maxWidth:"250px"}} >
                <Card.Img variant="top" src={photo.photoLink}  style={{width:"auto", height:"auto", maxHeight: "250px", maxWidth:"250px"}}/>
                <Card.Body>
                <Card.Title>{photo.photoName}</Card.Title>
                <Card.Text>
                    {photo.photoDescription}
                </Card.Text>
                <div></div>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
                 <Card.Footer>
                     {this.state.caption} 
                     {/* {this.state.quotes}  */}
                </Card.Footer> 
            </Card>
            </CardGroup>
                )
                }


            </div>

        );
    }
}
 
export default Photo;