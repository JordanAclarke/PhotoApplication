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
        photoName: '',
        photoDescription: '',
        quotes: '',
        toggleForm: false
     }

    //  Test
     opts = this.state;
     postPhoto = () => {
        Axios.post('/api/addPhoto', this.state).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
     }

     togglePhotoAddForm = () => {
        this.setState({
            toggleForm: true
        })
    }

    UpdateValue = (evt) => {
        this.setState({
            photoLink: evt.target.value
        });
    }

    changeHandler = (e) => {
        this.setState({[e.target.value]: e.target.value})
    }
    //  
     async componentDidMount() {
         const response = await fetch('/api/getAllPhotos');
         const body = await response.json();
         this.setState({photos: body, isLoading: false});
     }
    render() { 
        const {photos, isLoading, photoLink, photoName, photoDescription, quotes} = this.state;
            if(isLoading) {
                return (<div>Loading..</div>);
            }
            if(this.state.toggleForm) {
                return <div>
                    <form onSubmit={this.postPhoto}>
                        <input type="text"
                        name="photoLink"
                        value = {this.state.photoLink}
                        onChange = {this.UpdateValue}
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
                    {this.state.startDate}
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