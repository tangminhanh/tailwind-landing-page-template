import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 dark:bg-gray-900 pb-5">
        <div id="contact" className="relative isolate px-6 lg:px-8 dark:bg-gray-900">
          <div className="absolute inset-x-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl dark:bg-gray-900">
            <svg viewBox="0 0 1108 632" aria-hidden="true" className="w-[69.25rem] flex-none dark:bg-gray-900">
              <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fill-opacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"></path>
              <defs><linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse"><stop stop-color="#172A3A"></stop><stop offset="1" stop-color="#09BC8A"></stop></linearGradient></defs>
              </svg></div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl text-center">
                  <div data-v-4f55e1d1="" className="grid-cols-9 p-2 mx-auto grid text-gray-700 h-[150px] mt-10"><div data-v-4f55e1d1="" className="contents flex-row-reverse dark:bg-gray-900">
                    <div data-v-4f55e1d1="" className="relative col-start-5 col-end-6 mx-auto dark:bg-gray-900">
                      <div data-v-4f55e1d1="" className="flex items-center justify-center w-6 h-full">
                        <div data-v-4f55e1d1="" className="w-0.5 h-full bg-gradient-to-t rounded-t-full from-darkPrimary to-primary"></div></div>
                        <div data-v-4f55e1d1="" className="absolute w-6 h-6 -mt-3 bg-gradient-to-r from-darkPrimary to-secondary rounded-full bottom-0"></div></div></div></div>
                        <h2 className="font-extrabold text-3xl bg-clip-text text-blue-400 text-transparent bg-gradient-to-r from-secondary to-darkPrimary target target-show"> Get In Touch </h2>
                        <p className="mt-6 text-based leading-8 text-gray-900 dark:text-gray-300 target target-show"><i>As approaching my graduation in 2025, I am actively seeking job opportunities and would be excited to connect with potential employers or collaborators. <br /> If you have any opportunities or would like to discuss how we might work together, please feel free to reach out. I look forward to exploring how we can collaborate.</i>   </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 target target-show text-gray-800 dark:text-gray-100"><a href="mailto:minhanh001@e.ntu.edu.sg" className="rounded-sm bg-transparent px-3.5 py-2.5 text-lg font-semibold text-gray-800 dark:text-gray-100 shadow-sm hover:bg-darkPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ring-1 ring-secondary">
                          Email Me</a></div></div></div></div>
        {/* <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Create your next project with Simple
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Start Free Trial{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
