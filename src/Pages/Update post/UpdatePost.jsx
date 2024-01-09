const UpdatePost = () => {
  return (
    <div className="mt-5 h-[450px] w-full">
      <h1 className=" text-xl font-bold uppercase">Update Post</h1>
      <form className="flex w-full flex-col justify-start gap-5 p-10 pb-0">
        <input
          type="text"
          className="w-full border p-2 capitalize"
          placeholder="type title"
        />
        <input
          type="file"
          className="w-full border p-2 capitalize"
          placeholder="type title"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-full border p-2 capitalize"
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

export default UpdatePost;
