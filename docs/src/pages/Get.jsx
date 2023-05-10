export default function Get() {
  return (
    <>
      <section>
        <div class="p-4">
          <h1 class="fs-45 fw-400">Get started with Marvel.</h1>
          <p class="fs-20 text-gray-600 mt-2">
            Marvel is a CSS framework that helps you to build your website.
            <br />
            It is easy to use and customizable as per your needs.
          </p>
        </div>
        <div class="p-4">
          <h1 class="fs-30 fw-400">Quick Start</h1>
          <p class="w-70 text-gray-600">
            Get started by including Marvel's production-ready CSS and
            JavaScript via CDN without the need for any build steps.
          </p>
          <div class="mt-5 ml-5">
            <p>
              <a href="#" class="text-underlined text-primary-500">
                Download
              </a>
              the latest release of Marvel from the github repository.
              <br />
              Add the following marvel minifyed css file in your head tag.
            </p>
            <div>
              <pre class=" mt-5 p-2 rounded-1">
                <code>link rel="stylesheet"href="css/marvel.min.css"</code>
              </pre>
            </div>
          </div>
        </div>

        <div class="p-4">
          <h1 class="fs-30 fw-400">CDN Links</h1>
          <div class="mt-5 w-70">
            <table class="">
              <tr>
                <td>CSS</td>
                <td>
                  <code>
                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css
                  </code>
                </td>
              </tr>
              <tr>
                <td>JS</td>
                <td>
                  <code>
                    https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css
                  </code>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
