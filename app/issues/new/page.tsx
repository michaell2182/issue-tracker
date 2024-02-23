import React from 'react'

import dynamic from 'next/dynamic';
import IssueFormSkeleton from './loading';

const IssueForm = dynamic(() => import('../_components/IssueForm'), 
  {ssr: false,
  loading: () => <IssueFormSkeleton />
  }
);

const NewissuePage = () => {
  return (
    <div className="p-8 pd-2 bg-[#f8f9ff] ">
   <IssueForm />
   </div>
  )
}

export default NewissuePage
