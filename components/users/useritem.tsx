
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItemProps from './models.UserItemProps';

 const UserItem = (props:UserItemProps) => {
  // const UserItem = ({user:{login,avatar_url,html_url}}) => {
   const {login,avatar_url,html_url} = props.user;
   return (
        <div className="card text-center" >
            <img src={avatar_url} className="round-img" style={{width:'60px'}}/>
            <h3>{login}</h3>
              <div>
                  <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
              </div>
        </div>
      )
 

}
UserItem.prototype = {
   user:PropTypes.object.isRequired
   
}
export default UserItem;