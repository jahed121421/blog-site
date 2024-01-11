import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import useOwnPost from "./../../Hooks/useOwnPost";
import LoadingPage from "../Loading Page/LoadingPage";
import axios from "axios";

const ManageOwnPost = () => {
  const [OwnPost, OwnPostLoading, refetch] = useOwnPost();
  if (OwnPostLoading) {
    return <LoadingPage />;
  }

  const DeletePost = (id) => {
    axios.delete(`http://localhost:5000/delete-post/${id}`).then((res) => {
      refetch, console.log(res.data);
    });
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
                  {OwnPost.map((datas, i) => (
                    <tr
                      key={datas._id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {i + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {datas.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {datas.status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-6">
                          <Button
                            name="Delete"
                            onclick={() => DeletePost(datas._id)}
                          />

                          <Link to={`/dashboard/update-post/${datas._id}`}>
                            <Button name="Update" />
                          </Link>
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
    </>
  );
};

export default ManageOwnPost;
