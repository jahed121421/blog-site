const Pagination = ({ page, setPage, PageNumber }) => {
  return (
    <div className="mx-auto my-2 w-full ">
      <div className="flex  justify-center gap-10 text-center">
        {PageNumber.map((Pages) => (
          <div
            className={page === Pages ? "w-6 bg-blue-600 text-white" : "w-6"}
            onClick={() => setPage(Pages)}
            key={Pages}
          >
            {Pages + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
