import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <section name={props.selected}>
      <h1>{props.selected}</h1>
      <Link to="/">
        Go to home
      </Link>
    </section>
  );
}

Menu.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default Menu;
