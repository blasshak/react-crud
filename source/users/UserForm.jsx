import React from 'react';
import PropTypes from 'prop-types';

function UserForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="name" className="form-control" defaultValue={props.name} onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="form-control" defaultValue={props.email} onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="form-control" defaultValue={props.password} onChange={props.onChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default UserForm;

