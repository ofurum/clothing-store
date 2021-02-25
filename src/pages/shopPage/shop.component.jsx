import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../component/collection-overview/collection-overview.component';
import CollectionPage from '../category/category.component'
const ShopPage = ({ match }) => {
    console.log('shop',match)
        return (
          <div className="shop-page">
              <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
              />
              {/* <Route
                exact
                path={`${match.path}/:CollectionPageId`}
                component={CollectionPage}
              /> */}
          </div>
        );
}



export default ShopPage;