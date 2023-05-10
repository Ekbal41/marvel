import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div class="container mx-auto mt-10 pt-4 ">
        <div>
          <div class="flex flex-justify-between">
            <div class="w-15 ">
              {" "}
              <Sidebar />
            </div>

            <div class="w-85 border-left-light-1  p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
