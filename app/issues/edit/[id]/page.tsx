import React from "react";
import { PrismaClient } from "@prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic
(() => import ('@/app/issues/_components/IssueForm'), {ssr: false, loading: () => <IssueFormSkeleton />});
// Initialize Prisma Client
const prisma = new PrismaClient();

interface Props {
  params: { id: string };
}

const EditIssuepage = async ({ params }: Props) => {
  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
    });

    if (!issue) {
      notFound();
    }

    return <IssueForm issue={issue} />;
  } catch (error) {
    console.error("Error fetching issue:", error);
    return <div>Error fetching issue. Please try again later.</div>;
  }
};

export default EditIssuepage;
