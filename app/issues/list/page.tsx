import { Button, Table, Theme } from "@radix-ui/themes";

import React from "react";
import prisma from "@/prisma/client";
import { IssuseStatusBadge, Link } from "@/app/components";

const issueTracker = async () => {
  const issues = await prisma?.issue.findMany();

  return (
    <div className="p-8 pd-2 bg-[#f8f9ff]">
      <h1 className="font-semibold text-2xl text-[#333335]">All Tickets</h1>
      <Theme>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

                  <div className="block md:hidden">
                    <IssuseStatusBadge status={issue.status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.description}
                </Table.Cell>

                <Table.Cell className="hidden md:table-cell">
                  <IssuseStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Theme>
    </div>
  );
};

export const dynamic = 'force-dynamic'
export default issueTracker;
