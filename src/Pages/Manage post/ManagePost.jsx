import axios from "axios";
import Button from "../../Components/Button/Button";
import useAllbolgpost from "../../Hooks/useAllbolgpost";
import LoadingPage from "./../Loading Page/LoadingPage";
import { useState } from "react";
import DeclineModel from "./DeclineModel";

const ManagePost = () => {
  const [AllBlog, AllBlogLoading, AllBlogRefetch] = useAllbolgpost();
  let [isOpen, setIsOpen] = useState(false);
  let [id, setId] = useState();
  if (AllBlogLoading) {
    return <LoadingPage />;
  }
  const ApprovedPost = (id) => {
    console.log(id);
    axios
      .put(`http://localhost:5000/appoved-blog/${id}`)
      .then((res) => {
        console.log(res);
        AllBlogRefetch();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="py-5 text-xl font-bold uppercase">User list</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Serial
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AllBlog.map((blogs, i) => (
                    <tr
                      key={blogs._id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {blogs.title}
                      </td>
                      <td
                        className={`${
                          blogs.status === "appoved"
                            ? "bg-green-100"
                            : "bg-red-50"
                        } whitespace-nowrap px-6 py-4`}
                      >
                        {blogs.status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-6">
                          <button
                            onClick={() => {
                              setIsOpen(true), setId(blogs._id);
                            }}
                          >
                            Delcine
                          </button>

                          <Button
                            name="Apporved"
                            onclick={() => ApprovedPost(blogs._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DeclineModel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        id={id}
        AllBlogRefetch={AllBlogRefetch}
      />
    </>
  );
};

export default ManagePost;
