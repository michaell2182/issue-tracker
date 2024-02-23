import { Theme } from '@radix-ui/themes'
import { Box } from 'lucide-react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
    <Theme>
    <Skeleton/>
    <Skeleton height="20rem"/>
    </Theme>
  </Box>
  )
}

export default IssueFormSkeleton
