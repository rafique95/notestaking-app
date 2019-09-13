import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: ''
      
    }
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
    const obj = {
      title: this.state.title,
      description: this.state.description,
      
    };
    //axios.post('http://localhost:4000/business/add', obj)
    axios.post('http://localhost:3004/posts', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      title: '',
      description: ''
     
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangTitle}
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
                      value="Save" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}