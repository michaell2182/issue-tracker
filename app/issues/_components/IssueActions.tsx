import React from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
const IssueActions = () => {
  return (
    <div className="m-5">
      <Link href="/issues/new"> New Issue</Link>
    </div>
  )
}

export default IssueActions