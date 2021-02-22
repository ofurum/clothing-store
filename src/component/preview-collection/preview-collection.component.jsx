import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../../component/collection-item/collection-item.component'

const previewCollection = ({title, items}) => (
    <div className="preview-collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {
              items.filter((item, idx) => idx < 4).map(item => (
                  <CollectionItem key={item.id} item={item}/>
              ))
          }
        </div>
    </div>
);

export default previewCollection;