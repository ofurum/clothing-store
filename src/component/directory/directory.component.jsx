/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import MenuItem from '../menu-items/menu-items.components';
import './directory.styles.scss';
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import{ selectDirectorySection} from '../../redux/directory/directory.selector'

const Directory = ({sections}) => {

    return (
      <div className="directory-menu">
        {sections.map(({ id, ...section }) => (
          <MenuItem key={id} { ...section } />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
