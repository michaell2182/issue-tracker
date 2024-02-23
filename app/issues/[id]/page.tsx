import IssuseStatusBadge from "@/app/components/IssuseStatusBadge";
import { PrismaClient } from "@prisma/client";
import {
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Theme,
  Box,
  Button,
} from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

const prisma = new PrismaClient();

interface Props {
  params: {
    id: string;
  };
  issueId: number;
}
const IssueDatailPage = async ({ params }: { params: { id: string } }) => {

  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();
  await delay(1000);

  return (
    <div className="p-8 pd-2">
    <Theme>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-4">
          <Heading>{issue.title}</Heading>
          <Flex className="space-x-3" my="2">
            <IssuseStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose max-w-full" mt="4">
            <ReactMarkdown>{issue.description}</ReactMarkdown>
          </Card>
        </Box>
        { session && <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect />
          <Button>
            <Pencil2Icon />
            <Link href={`/issues/edit/${issue.id}`}>Update Issue </Link>
          </Button>
          <DeleteButton issueId={issue.id} />

        
          </Flex>
        </Box>}
      </Grid>
    </Theme>
    </div>
  );
};

export default IssueDatailPage;
