import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../../component/custom-button/custom-button.component'

import { connect } from 'react-redux';

import {addItem} from '../../redux/cart/cart.action'

const CollectionItem = ({ item, addItem }) => {
  const { id, name, imageUrl, price} =item;
  return(
  <div className="collection-item" key={id}>
    <div
      className="image"
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
  </div>
)};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);