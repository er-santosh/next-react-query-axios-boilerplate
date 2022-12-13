import { createPost } from "@/api/post.api";
import {
  createUpdatePostInput,
  createUpdatePostSchema,
} from "@/schemas/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PostForm = () => {
  const { mutate, isLoading: creatingPost } = useMutation(createPost, {
    onSuccess() {
      reset();
      toast.success("Post created successfully");
    },
    onError(error) {
      toast.error("Something went wrong");
    },
  });
  const onPostSubmit = (values: createUpdatePostInput) => {
    mutate(values);
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<createUpdatePostInput>({
    resolver: zodResolver(createUpdatePostSchema),
    defaultValues: { userId: 1, title: "", body: "" },
  });

  return (
    <form onSubmit={handleSubmit(onPostSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          aria-invalid={errors.title ? true : false}
          type="text"
          className={`form-control ${errors.title ? "form-control-error" : ""}`}
          id="title"
          placeholder="Title"
          {...register("title")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Body</label>
        <textarea
          aria-invalid={errors.body ? true : false}
          cols={70}
          rows={10}
          className={`form-control ${errors.body ? "form-control-error" : ""}`}
          id="body"
          {...register("body")}
          placeholder="Body"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          disabled={creatingPost}
          className={`btn ${creatingPost ? "btn-disabled" : ""}`}
        >
          {creatingPost ? "Please wait ...." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
