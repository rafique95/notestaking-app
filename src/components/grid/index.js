import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../tableRow/tableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:3004/posts')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
        // if((i+1) % 2 === 0){
        //     return (
        //       <div className="row">      
        //         <div className="col-md-3">
        //             <TableRow obj={object} key={i} />
        //        </div>
        //       </div>
        //     )
        //   }else{
        //       return (
        //         <div className="col-md-3">
        //             <TableRow obj={object} key={i} />
        //         </div>
        //       );
        //   }
        // return <TableRow obj={object} key={i} />;
        if((i+1) % 7 === 0){
        return (  
            <tr><td> &nbsp; </td></tr>
                  
        
                  )
        } 
         else 
         return (<td> <div className ="col-md-12"><TableRow obj={object} key={i} /></div></td>)
      });
    }

    
    render() {
      return (
        <div>
        
              { this.tabRow() }
           
        </div>
      );
    }
  }