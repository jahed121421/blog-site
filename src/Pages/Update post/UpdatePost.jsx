import axios from "axios";
import useSingleBlog from "../../Hooks/useSingleBlog";
import LoadingPage from "../Loading Page/LoadingPage";

const UpdatePost = () => {
  const [SingleBlogData, SingleBlogLoading, refetch] = useSingleBlog();
  if (SingleBlogLoading) {
    return <LoadingPage />;
  }
  const Update = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    axios
      .put(`http://localhost:5000/update-post/${SingleBlogData._id}`, {
        title,
        content,
      })
      .then((res) => {
        refetch, console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-5 h-[450px] w-full">
      <h1 className=" text-xl font-bold uppercase">Update Post</h1>
      <form
        onSubmit={Update}
        className="flex w-full flex-col justify-start gap-5 p-10 pb-0"
      >
        <input
          type="text"
          className="w-full border p-2 capitalize"
          placeholder="type title"
          name="title"
          defaultValue={SingleBlogData.title}
        />
        <textarea
          name=""
          id="content"
          cols="30"
          rows="10"
          className="w-full border p-2 capitalize"
          defaultValue={SingleBlogData.content}
        ></textarea>
        <input
          type="submit"
          value="Update"
          className="transform rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 lg:w-3/12"
        />
      </form>
    </div>
  );
};

export default UpdatePost;
