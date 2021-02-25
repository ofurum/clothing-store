import {createSelector} from 'reselect';


const allCollectionData = state => state.collection

export  const selectedCollectionData = createSelector(
    [allCollectionData],
    collection => collection.collections
);

export const selectCollectionPreview = createSelector(
  [selectedCollectionData],
  collections => Object.keys(collections).map(key => collections[key])
 );

export const selectedCollection = (collectionMapId) =>
  createSelector([selectedCollectionData], (collections) => collections[collectionMapId]
  );