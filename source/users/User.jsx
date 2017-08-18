import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function User(props) {
  return (
    <div id={`user-${props.id}`}>
      <Link to={`/user/${props.id}`}>
        {props.name}
      </Link>
      <p>{props.email}</p>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
