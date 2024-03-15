import React, { Component } from 'react'
import { Fragment } from 'react'

class Profile extends Component {
     render() { 
       const { user } = this.props;
   
       return (
         <Fragment>
           <h1> User Profile Page </h1>
           <ul className="list-group">
             <li className="list-group-item">Name: {user.name} </li>
             <li className="list-group-item">Email: {user.email} </li>
           </ul>
         </Fragment>
       );
     }
   }
   
   export default Profile;
   

