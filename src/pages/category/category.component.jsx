import React from 'react';
import CollectionItem from '../../component/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectedCollection} from '../../redux/collection/collection.selector';

import './category.styles.scss';

const CollectionPage = ({ match, collections}) =>{ 
    console.log("category",match, 'paramsId:', match.params.collectionId, collections);
    const{ title, items} = collections
    return (
      <div className="category-page">
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
             
            />
          ))}
        </div>
      </div>
    );};

const mapStateToProps = (state, ownProps) => ({
  collections: selectedCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);