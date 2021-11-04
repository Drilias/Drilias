import React from 'react';
import { Paginator, PaginatorNumbers, PageLink } from './styled';

const Pagination = (props) => {
  const pageLinks = []

  for(let i = 1; i <= props.pages; i++){
    pageLinks && pageLinks.push(<PaginatorNumbers key={i} onClick={()=>props.nextPage(i)}>
      <PageLink href='#'>{i}</PageLink>
        </PaginatorNumbers>)
  }   
    
  return (
    <div>
      <Paginator>
        {pageLinks}           
      </Paginator>        
    </div>
  )
}

export default Pagination;