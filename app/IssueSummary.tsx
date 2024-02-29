import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    {
      label: 'Pending Issues',
      value: inProgress,
      status: 'IN_PROGRESS',
    },
    { label: 'Completed Issues', value: closed, status: 'CLOSED' },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label} className='  h-[9rem] w-full p-2 cursor-pointer transition ease-in-out delay-150 hover:shadow-md hover:bg-[#E9ECF3] transform hover:-translate-y-1 hover:scale-105 duration-300 '>
          <Flex direction="column" gap="1">
            <Link
              className='text-sm font-bold text-[#73747c]'
              href={`/issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            
            <Text size="7" className='font-bold text-bottom relative top-14'>{container.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
