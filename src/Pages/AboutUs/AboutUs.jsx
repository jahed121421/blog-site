import Titel from "../../Components/Title/Titel";

const AboutUs = () => {
  return (
    <div className="flex h-screen  w-full flex-col items-center justify-center ">
      <Titel title="About" />
      <div className="my-5">
        <div className="flex items-center justify-center bg-white">
          <div className="flex items-center px-8 text-center md:px-12 lg:w-1/2 lg:text-left">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Build Your New <span className="text-indigo-600">Idea</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  className="rounded bg-gray-900 px-4 py-3 text-xs font-semibold text-gray-200 hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4 rounded bg-gray-300 px-4 py-3 text-xs font-semibold text-gray-900 hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
