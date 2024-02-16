"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/spinner";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Callout,
  CalloutText,
  TextField,
  Theme,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm,Controller } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";


const SimpleMDE = dynamic(
  () => import ('react-simplemde-editor'),
  {ssr:false}
);

type IssueForm = z.infer<typeof createIssueSchema>;
const NewissuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl ">
      <Theme>
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Icon />
            <CalloutText>{error}</CalloutText>
          </Callout.Root>
        )}
        <form
          className=" space-y-3"
          onSubmit={handleSubmit(async (data) => {
            try {
              setSubmitting(true);
              await axios.post("/api/issues", data);
              router.push("/issues");
            } catch (error) {
              setSubmitting(false);
              setError("An unexpected error occurred");
            }
          })}
        >
          <TextField.Root>
            <TextField.Input placeholder="Title" {...register("title")} />
          </TextField.Root>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

          <ErrorMessage>{errors.description?.message}</ErrorMessage>

          <Button disabled={isSubmitting}>
            Submit New Issue {isSubmitting && <Spinner />}
          </Button>
        </form>
      </Theme>
    </div>
  );
};

export default NewissuePage;
