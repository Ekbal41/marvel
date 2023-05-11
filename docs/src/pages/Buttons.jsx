import { CopyBlock, dracula, CodeBlock, arta } from "react-code-blocks";
export default function Buttons() {
  return (
    <>
      <div class="p-4 w-100">
        <h4 class="text-primary-500 text-up fw-800">
          <span class="text-primary-500 fw-800 fs-20 mr-3">#</span>Buttons
        </h4>
        <hr />
        <div class="mb-5 flex gap-3 mt-4">
          <button class="btn btn-primary mb-4">Primary</button>
          <button class="btn btn-secondary mb-4">secondary</button>
          <button class="btn btn-info mb-4">info</button>
          <button class="btn btn-success mb-4">success</button>
          <button class="btn btn-warning mb-4">warning</button>
          <button class="btn btn-danger mb-4">danger</button>
          <button class="btn btn-light mb-4">light</button>
          <button class="btn btn-dark mb-4">dark</button>
        </div>
        <h4 class="text-primary-500 text-up fw-800">
          <span class="text-primary-500 fw-800 fs-20 mr-3">#</span>Example Code
        </h4>
        <hr />
        <div>
          <div class="mt-5">
            <CopyBlock
              text={`<button class="btn btn-primary ">Primary</button>
<button class="btn btn-secondary ">secondary</button>
<button class="btn btn-info ">info</button>
<button class="btn btn-success ">success</button>
<button class="btn btn-warning">warning</button>
<button class="btn btn-danger ">danger</button>
<button class="btn btn-light ">light</button>
<button class="btn btn-dark ">dark</button>`}
              language={"html"}
              showLineNumbers={true}
              wrapLines
              theme={dracula}
            />{" "}
          </div>
        </div>
        <h4 class="text-primary-500 text-up fw-800 mt-7">
          <span class="text-primary-500 fw-800 fs-20 mr-3">#</span>Big Buttons
        </h4>
        <hr />
        <div class="mb-5 mt-4">
          <button class="btn btn-primary mb-4 w-10">w-10</button>
          <br />
          <button class="btn btn-secondary mb-4 w-20">w-20</button>
          <br />
          <button class="btn btn-info mb-4 w-30">w-30</button>
          <br />
          <button class="btn btn-success mb-4 w-40">w-40</button>
          <br />
          <button class="btn btn-warning mb-4 w-50">w-50</button>
          <br />
          <button class="btn btn-danger mb-4 w-60">w-60</button>
          <br />
          <button class="btn btn-light mb-4 w-70">w-70</button>
          <br />
          <button class="btn btn-secondary mb-4 w-80">w-80</button>
          <br />
          <button class="btn btn-success mb-4 w-90">w-90</button>
          <br />
          <button class="btn btn-dark mb-4 w-100">w-100</button>
          <br />
        </div>

        <h4 class="text-primary-500 text-up fw-800 mt-7">
          <span class="text-primary-500 fw-800 fs-20 mr-3">#</span>Button As
          Badge
        </h4>
        <hr />
        <div class="mb-5 flex gap-3 mt-4">
          <button class="btn btn-primary mb-4 p-1">Primary</button>
          <button class="btn btn-secondary mb-4 p-1">secondary</button>
          <button class="btn btn-info mb-4 p-1">info</button>
          <button class="btn btn-success mb-4 p-1">success</button>
          <button class="btn btn-warning mb-4 p-1">warning</button>
          <button class="btn btn-danger mb-4 p-1">danger</button>
          <button class="btn btn-light mb-4 p-1">light</button>
          <button class="btn btn-dark mb-4 p-1">dark</button>
        </div>
        <div class="mb-5 flex gap-3">
          <span class="btn btn-primary mb-4 p-1 rounded-3 fs-12">Primary</span>
          <button class="btn btn-secondary mb-4 p-1 rounded-3 fs-12">
            secondary
          </button>
          <button class="btn btn-info mb-4 p-1 rounded-3 fs-12">info</button>
          <button class="btn btn-success mb-4 p-1 rounded-3 fs-12">
            success
          </button>
          <button class="btn btn-warning mb-4 p-1 rounded-3 fs-12">
            warning
          </button>
          <button class="btn btn-danger mb-4 p-1 rounded-3 fs-12">
            danger
          </button>
          <button class="btn btn-light mb-4 p-1 rounded-3 fs-12">light</button>
          <button class="btn btn-dark mb-4 p-1 rounded-3 fs-12">dark</button>
        </div>
        <h4 class="text-primary-500 text-up fw-800">
          <span class="text-primary-500 fw-800 fs-20 mr-3">#</span>Example Code
        </h4>
        <hr />
        <div>
          <div class="mt-5">
            <CopyBlock
              text={`<button class="btn btn-primary mb-4 p-1 rounded-3 fs-12">primary</button>
 <button class="btn btn-info mb-4 p-1 rounded-3 fs-12">info</button>
<button class="btn btn-dark mb-4 p-1 rounded-3 fs-12">dark</button>`}
              language={"html"}
              showLineNumbers={true}
              wrapLines
              theme={dracula}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
