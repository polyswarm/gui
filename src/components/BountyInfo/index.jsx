// Vendor imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Bounty imports
import FileList from '../FileList';
// Component Imports
import './styles.css';

class BountyInfo extends Component {

  render() {
    const { props: { bounty } } = this;
    const files = bounty.files || [];
    const assertions = bounty.assertions || [];
    return (
      <div className='Bounty-Info'>
        <div className='Bounty-Info-Container'>
          <FileList className='Bounty-Info-Files' files={files} readonly />
        </div>
      </div>
    );
  }
}

BountyInfo.propTypes = {
  bounty: PropTypes.object.isRequired,
};
export default BountyInfo;