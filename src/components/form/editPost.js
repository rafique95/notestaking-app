import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3004/posts/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                title: response.data.title, 
                description: response.data.description
            
             });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })  
  }
  

  onSubmit(e) {
    e.preventDefault();
    alert(this.props.match.params.id);
    const obj = {
      title: this.state.title,
      description: this.state.description
      
    };
    axios.put('http://localhost:3004/posts/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
        this.props.history.push('/index');
    
    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Update" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}