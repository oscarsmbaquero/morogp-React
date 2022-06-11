import React from 'react'

const Profile = ({user}) => {
    const { email, name } = user || {};


    return (
        <>
          <h1>Profile</h1>
          <dt>Email</dt>
          <dd>{email}</dd>
          <dt>Password</dt>
          <dd>****</dd>
          <dt>Name</dt>
          <dd>{name}</dd>
        </>
      );
}

export default Profile