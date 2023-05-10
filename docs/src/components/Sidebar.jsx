import { useLocation, Link } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <div
        class="flex mt-5  "
        style={{
          position: "fixed",
        }}
      >
        <div class=" p-4 ">
          <div>
            <ul>
              <li class="my-4">
                <Link
                  to="/docs"
                  class={` ${
                    location.pathname === "/docs"
                      ? "bg-primary-100 p-1 rounded-1"
                      : "text-cap fw-500 p-1 "
                  }`}
                >
                  Getting started
                </Link>
              </li>
              <li class="my-4">
                <Link
                  to="/docs/buttons"
                  class={` ${
                    location.pathname === "/docs/buttons"
                      ? "bg-primary-100 p-1 rounded-1"
                      : "text-cap fw-500 p-1"
                  }`}
                >
                  Button
                </Link>
              </li>

              <li class="my-4">
                <a href="spacing.html" class="text-cap fw-600 text-gray-500">
                  Spacing
                </a>
              </li>

              <li class="my-4">
                <a href="border.html" class="text-cap fw-600 text-gray-500">
                  Border
                </a>
              </li>
              <li class="my-4">
                <a href="shadow.html" class="text-cap fw-600 text-gray-500">
                  Shadow
                </a>
              </li>
              <li class="my-4">
                <a href="input.html" class="text-cap fw-600 text-gray-500">
                  Inputs
                </a>
              </li>
              <li class="my-4">
                <a href="rounded.html" class="text-cap fw-600 text-gray-500">
                  Rounded
                </a>
              </li>
              <li class="my-4">
                <a href="color.html" class="text-cap fw-600 text-gray-500">
                  Colors
                </a>
              </li>
              <li class="my-4">
                <a href="table.html" class="text-cap fw-600 text-gray-500">
                  Table
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
