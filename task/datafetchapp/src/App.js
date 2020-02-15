import React, { Component } from 'react'
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    items:[],
    isLoaded:false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(json=>{
     this.setState({
       isLoaded:true,
       items:json,
     })
   });
  }
  render (){
    var{isLoaded,items}=this.state;
    if(!isLoaded) {
      return <div>loading</div>;
    }
    else {
    return(
      <div className="container">
        <div class="row">
          
          <div class="col-4">
            <ul><h3 className="text-info">Full Name</h3>
                 {items.map(item => (
                   
                      <p className="font-weight-bold" key={item.id}>
                      {item.name}
                      <br></br> 
                      <small>Email:{item.email}</small>
                      </p>
                    
                  ))}
            </ul>
          </div>

          <div class="col">
            <ul><h3 className="text-info">phone no</h3>
                 {items.map(item => (
                   
                      <p key={item.id}>
                      {item.phone} 
                      </p>
                    
                  ))}
            </ul>
          </div>

          <div class="col">
            <ul><h3 className="text-info">USER NAME</h3>
                 {items.map(item => (
                   
                      <p key={item.id}>
                      {item.username} 
                      </p>
                    
                  ))}
            </ul>
          </div>

          <div class="col">
            <ul><h3 className="text-info">website</h3>
                 {items.map(item => (
                   
                      <p key={item.id}>
                      {item.website} 
                      </p>
                    
                  ))}
            </ul>
          </div>

        </div>
      </div>
    );
    }
  }
}   



export default App;
