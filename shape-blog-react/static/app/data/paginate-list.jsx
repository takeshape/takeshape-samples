import React from 'react';
import qs from 'query-string'
import connect, {resolveFetch} from './connect';

const paginate = (ListComponent, mapDataToProps) => props => {
  const {match, lazyPageFetch, pageFetch} = props;
  const currentPage = qs.parse(match.search).p || 1;
  lazyPageFetch.bind(props)(currentPage);

  const ResolveFetchList = resolveFetch(ListComponent, mapDataToProps);
  return <ResolveFetchList
      {...props}
      currentPage={currentPage}
      fetch={pageFetch}
    />;
};

export default (ListComponent, mapDataToProps) => connect(() => ({
  lazyPageFetch: p => ({
    pageFetch: `/blog/page-${p}.json`
  })
}))(paginate(ListComponent, mapDataToProps));
