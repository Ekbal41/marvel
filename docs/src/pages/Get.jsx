import { CopyBlock, dracula } from "react-code-blocks";

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
            <div class="mt-5">
              <CopyBlock
                text={`          <!doctype html>
                <html lang="en">
                  <head>
                    <!-- Required meta tags -->
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <!-- Marvel CSS -->
                    <link href="/css/marvel.min.css" rel="stylesheet" >
                    <title>Hello, world!</title>
                  </head>
                  <body>
                    <h1>Hello, world!</h1>
                  </body>
                </html>`}
                language={"html"}
                showLineNumbers={true}
                wrapLines
                theme={dracula}
              />{" "}
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
          <div class="mt-5 ml-5">
            <p class="mb-5">
              You can also use the following{" "}
              <span class="text-underline text-blue-500">CDN</span> links to get
              started with Marvel.
              <br />
              This method is not recommended for production, but it is good for
              learning and testing.
            </p>
            <CopyBlock
              text={`          <!doctype html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Marvel demo</title>
                <link href="https://cdn.jsdelivr.net/npm/marvel@1.0.0-alpha3/dist/css/marvel.min.css" rel="stylesheet" >
              </head>
              <body>
                <h1>Hello, world!</h1>
                <script src="https://cdn.jsdelivr.net/npm/marvel@1.0.0-alpha3/dist/js/marvel.bundle.min.js" ></script>
              </body>
            </html>`}
              language={"html"}
              showLineNumbers={true}
              wrapLines
              theme={dracula}
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
