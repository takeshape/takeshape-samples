import React from 'react';
import {Switch, Route} from 'react-router-dom';
import _forEach from 'lodash/forEach'
import _isPlainObject from 'lodash/isPlainObject';
import tsg from '../../../tsg.yml';

export const buildRoutes = tsContentTypesToComponents => () => {
  const routes = [];
  _forEach(tsg.routes, (config, contentTypeName) => {
    const componentConfig = tsContentTypesToComponents[contentTypeName];
    if (_isPlainObject(componentConfig)) {
      routes.push(<Route exact path={config.path} component={componentConfig.component}/>);
      if (config.paginate && componentConfig.paginateComponent) {
        routes.push(<Route exact path={config.paginate.firstPage} component={componentConfig.paginateComponent}/>);
      }
    } else {
      routes.push(<Route exact path={config.path} component={componentConfig}/>);
    }
  });

  return <Switch>{routes}</Switch>;
};
