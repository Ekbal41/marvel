import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div class="flex mt-10 pt-5">
          <div class="p-4 w-100 flex-center">
            <div class="text-center mt-10">
              <p class="text-gray-500">
                <span class="text-low btn btn-secondary p-1 mr-3">v0.1</span>is
                now available.
              </p>
              <img
                src="/images/marvel.png"
                style={{ width: 150, height: 150 }}
                alt="marvel logo"
                class="my-8 rounded-5"
              />

              <h1 class="fs-50 mb-3">
                Create beautifull,
                <br />
                responsive UI with Marvel.
              </h1>
              <p class="fs-25 text-gray-500 text-center lh-2">
                Marvel is a simple, responsive and modern CSS framework for
                faster
                <br />
                and extensible development. It's customizable and easy to use.
              </p>

              <div>
                <button class="btn btn-light mt-5 p-4 text-low fw-200">
                  $ npm i marvel@1.0.0 <i class="bi bi-clipboard ml-3"></i>
                </button>
                <Link to="/docs" class="btn btn-primary p-4 mt-5 ml-4">
                  <i class="bi bi-book mr-2"></i>Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
