import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";
import {companies} from "@/app/lib/data"
import CompanyBar from "@/components/company-bar"

export default function BusinessCategories() {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl py-10 text-center pb-3 dark:bg-gray-900">
          <h2 className="text-3xl font-bold md:text-4xl dark:text-gray-100">
            Work Experience
          </h2>
          <p className="dark:text-gray-200">Click each company to see my journey from concept to creation, showcasing my expertise in a range of technologies and programming languages.</p>
          <p className="text-sm text-gray-400"><i>Demo app visuals and data are for illustration purposes only, not representative of production use.</i></p>
        </div>
        <CompanyBar />
        
      </div>
    </section>
  );
}
