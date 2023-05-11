import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav
        class="bg-primary-500 shadow p-2 px-4 w-100 "
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <div class="flex flex-justify-between py-2 flex-align-center text-white text-up">
          <Link to="/">
            <div class="flex-center">
              <img
                src="/images/marvel-white.png"
                style={{ width: 30, height: 30 }}
                alt="marvel logo"
                class="mr-2 rounded-2"
              />
              <h1 class="text-cap">
                Marvel <span class="text-low btn btn-secondary p-1">v0.1</span>
              </h1>
            </div>
          </Link>

          <div class="flex-center gap-4">
            <div class="flex-center gap-4 fw-700">
              <Link
                to="/"
                class={`text-white ${
                  location.pathname === "/"
                    ? "bg-primary-600 p-2 rounded-1"
                    : "p-2"
                }`}
              >
                Home
              </Link>
              <Link
                to="/docs"
                class={`text-white ${
                  location.pathname === "/docs"
                    ? "bg-primary-600 p-2 rounded-1"
                    : "p-2"
                }`}
              >
                Docs
              </Link>
            </div>
            <ul class="flex gap-6 flex-justify-between flex-align-center">
              <li>
                <button class="btn btn-secondary">Donate</button>
              </li>
              <li>
                <a href="#">
                  <i class="bi bi-github fs-23 text-secondary-500"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
