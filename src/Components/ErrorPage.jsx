import { Link } from "react-router-dom";
import error from "../asset/error-blue.svg";

function ErrorPage() {
  return (
    <div
      className="flex p-10 flex-col
    items-center justify-center md:flex-row-reverse  lg:flex-row-reverse gap-20"
    >
      <img className="lg:w-[45%] md:w-[60%]" src={error} alt="error 404" />

      <div className="error-text">
        <h1 className="text-[#0152a8] font-bold text-7xl m-[-3rem, 0 , 0 ,0]">
          Ooops...
        </h1>
        <h3 className="font-light text-2xl mt-5 uppercase">Page not found</h3>
        <p className="font-light text-md mt-9 uppercase width-[370px]">
          oh no, the page you are looking for was either removed or does not
          exist
        </p>

        <Link to="/">
          <button
            className="w-4/5 h-14 bg-[#0152a8] border-none
          font-bold p-3 rounded-sm animate-bounce transition-all
          text-white mt-10"
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
