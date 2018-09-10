import React from 'react';
import {connect} from 'react-refetch';

export function LoadingCircle() {
  return (
    <div className="loading-static">
      <div className="circular-static">
        <svg className="circle" viewBox="0 0 60 60">
          <circle className="path" cx='30' cy='30' r='25'/>
        </svg>
      </div>
    </div>
  );
}

export function Error({message}) {
  return <h2 style={{color: 'red'}}>{message}</h2>
}

export const resolveFetch = (Component, mapDataToProps) => props => {
  const {fetch} = props;
  console.log('resolve fetch', props);
  if (fetch) {
    if (fetch.pending) {
      return <LoadingCircle/>
    } else if (fetch.rejected) {
      return <Error message={fetch.reason}/>
    } else if (fetch.fulfilled) {
      return <Component {...mapDataToProps(fetch.value, props)} {...props}/>
    }
  } else {
    return <Component {...props}/>
  }
};

export default (mapPropsToRequestsToProps, mapDataToProps = x => x) => Component => {
  const mapPropsToRequests = props => {
    const requests = mapPropsToRequestsToProps(props);
    return (typeof requests === 'string') ? ({fetch: requests}) : requests;
  };
  return connect(mapPropsToRequests)(resolveFetch(Component, mapDataToProps))
};
