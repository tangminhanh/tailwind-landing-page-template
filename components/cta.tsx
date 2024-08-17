import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 dark:bg-gray-900 pb-5">
        <div id="contact" className="relative isolate px-6 lg:px-8 dark:bg-gray-900">
          <div className="absolute inset-x-0 -z-10 flex justify-center overflow-hidden blur-3xl dark:bg-gray-900">
            <svg viewBox="0 0 1108 632" aria-hidden="true" className="w-[69.25rem] flex-none">
              <path fill="url(#gradient)" fillOpacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"></path>
              <defs>
                <linearGradient id="gradient" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#172A3A"></stop>
                  <stop offset="1" stopColor="#09BC8A"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="grid grid-cols-9 p-2 mx-auto text-gray-700 h-[150px]">
                <div className="relative col-start-5 col-end-6 mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-0.5 h-full bg-gradient-to-t from-darkPrimary to-primary"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-gradient-to-r from-darkPrimary to-secondary rounded-full bottom-0"></div>
                </div>
              </div>
              <h2 className="font-extrabold text-3xl bg-clip-text text-blue-400 bg-gradient-to-r from-secondary to-darkPrimary">Get In Touch</h2>
              <p className="mt-6 text-base leading-8 text-gray-900 dark:text-gray-300">
                <i>
                  As approaching my graduation in 2025, I am actively seeking job opportunities and would be excited to connect with potential employers or collaborators.
                  <br />
                  If you have any opportunities or would like to discuss how we might work together, please feel free to reach out. I look forward to exploring how we can collaborate.
                </i>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="mailto:minhanh001@e.ntu.edu.sg"
                  className="rounded-sm bg-transparent px-3.5 py-2.5 text-lg font-semibold text-blue-500 dark:text-gray-100 shadow-sm hover:bg-darkPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ring-1 ring-secondary"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
