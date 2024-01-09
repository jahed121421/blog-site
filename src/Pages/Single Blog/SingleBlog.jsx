import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import CommentSection from "../Comment Section on Page/CommentSection";
import Rating from "react-rating";
import { useContext, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "./../AuthProvider/AuthProvider";
const SingleBlog = () => {
  const [star, setStar] = useState(0);
  const favorite = false;
  const { user } = useContext(AuthContext);
  const OnSend = (e) => {
    e.preventDefault();
    const text = e.target.commentbox.value;
    const data = {
      message: text,
      rate: star,
    };
    console.log(data);
  };

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col px-5 py-24">
          <div className="mx-auto lg:w-5/6">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                    Phoebe Caulfield
                  </h2>
                  <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-500"></div>
                  <p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                <h1 className="text-4xl font-medium">Title</h1>
                <p className="mb-4 text-lg leading-relaxed">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <div>
                  <div className="space-y-3">
                    {favorite ? (
                      <button className="flex transform items-center gap-4 rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Remove Favorite
                        <MdFavorite size={22} />
                      </button>
                    ) : (
                      <button className="flex transform items-center gap-4 rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Add to Favorite
                        <MdOutlineFavoriteBorder size={22} />
                      </button>
                    )}
                    {user && (
                      <form onSubmit={OnSend}>
                        <textarea
                          name="commentbox"
                          cols="40"
                          rows="10"
                          required
                          className="w-full border-2 p-2"
                        ></textarea>
                        <Rating
                          start={0}
                          stop={5}
                          step={1}
                          fractions={2}
                          direction="ltr"
                          onClick={(value) => setStar(value)}
                          fullSymbol={<FaStar size={22} />}
                          emptySymbol={<CiStar size={22} />}
                        />
                        <br />
                        <input
                          type="submit"
                          value="send"
                          className="transform rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        />
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center text-3xl font-bold">Comments</h1>
      <CommentSection />
    </>
  );
};

export default SingleBlog;
