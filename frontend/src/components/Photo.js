import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
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
                        value={this.state.caption}
                        onChange = {this.UpdatePhotoCaptionValue}
                        />
                        <input type="submit" value="submit" />
                    </form>
                   
                </div>
            }
        
        return (  
            <div>
                <h2>PhotoGallery:</h2>
            
              
                <p style={{fontFamily: "cursive"}}><span style={{fontFamily: "cursive", fontWeight: "bold"}}>Quote of the Day: </span> {this.state.quotes}</p>
               
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