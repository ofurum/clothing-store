import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionPreview } from "../../redux/collection/collection.selector";
import './collection-overview.styles.scss';
import PreviewCollection from '../../component/preview-collection/preview-collection.component'


const CollectionsOverview = ({collections, match}) => {
    console.log('collections', match)
    return(
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollection }) => (
      <PreviewCollection key={id} {...otherCollection} />
    ))}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});


export default connect(mapStateToProps)(CollectionsOverview)