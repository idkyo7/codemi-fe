/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import Wrapper from './Wrapper';

import './styles.css';

function SectionContainer(props) {
  // Render an anchor tag
  let section = (
    <div>
      <p className="section-title">{props.title}</p>
      <div>{props.children}</div>
    </div>
  );

  return <Wrapper>{section}</Wrapper>;
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default SectionContainer;
