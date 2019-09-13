import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
          title: '',
          description: ''
        }
    }
    
      
    delete() {
      //alert(this.props.obj.id);
           axios.delete('https://notestaking-json-server.herokuapp.com/posts/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
           
            
          }
           
        
  render() {
    
    return (
        
        
      
       
            <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.obj.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.obj.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
      <button onClick={this.delete} className="btn btn-danger">Delete</button>
      </CardActions>
    </Card>
    
        
    );
  }
}

export default TableRow;