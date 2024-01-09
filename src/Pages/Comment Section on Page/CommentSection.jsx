import CommentBox from "../../Components/Comment Box/CommentBox";

const CommentSection = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          <div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
            <CommentBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
