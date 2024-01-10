import axios from "axios";
import { useState } from "react";
import LoadingPage from "./../Loading Page/LoadingPage";
const AddPost = () => {
  const [loading, setLoading] = useState(false);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_ImgBB
  }`;
  console.log(url);
  const SaveDate = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.files[0];
    const blog = form.blog.value;

    const formData = new FormData();
    formData.append("image", photo);
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          const data = {
            title,
            content: blog,
            img: res.data.data.display_url,
            date: new Date(),
          };
          axios.post("http://localhost:5000/send-blog", data).then((res) => {
            console.log(res.data);
            setLoading(false);
          });
        }
      })

      .catch((error) => console.error("Error:", error));
    // form.reset();
  };
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="mt-5 w-full ">
      <h1 className=" text-xl font-bold uppercase">Add Post</h1>
      <form
        onSubmit={SaveDate}
        className="flex w-full flex-col justify-start gap-5 p-10"
      >
        <input
          type="text"
          className="w-full border p-2 capitalize"
          placeholder="type title"
          name="title"
        />
        <input
          type="file"
          className="w-full border p-2 capitalize"
          placeholder="type title"
          name="photo"
        />
        <textarea
          name="blog"
          id=""
          cols="30"
          rows="10"
          className="w-full border p-2 capitalize"
          placeholder="Type Blog"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="transform rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 lg:w-3/12"
        />
      </form>
    </div>
  );
};

export default AddPost;
