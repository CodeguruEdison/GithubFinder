
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from './useritem';
import Spinner from '../layout/Spinner';
const Users = ({users,loading}) => {
   if(loading){
      return <Spinner/>
   }
   else{
   return (
        <div style={userStyle}>
           { users.map(user => (
             <UserItem key={user.id} user={user}></UserItem>
           ))}
        </div>
      );
   }
 
}
Users.prototype = {
  users:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
}
const userStyle = {
   display:'grid',
   gridTemplateColumns:'repeat(3,1fr)',
   gridGap:'1rem'
}
export default Users;