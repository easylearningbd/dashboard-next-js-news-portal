import HeadLines from "@/components/HeadLines";
import LatestNews from "@/components/news/LatestNews";
import Image from "next/image";

export default function Home() {
  return (
     <main>
      <HeadLines/>
      <div className="bg-slate-100">
        <div className="px-4 md:px-8 py-8">
         
         
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12">
              <LatestNews/>
            </div>

            <div className="w-full lg:w-6/12">

           </div>

          </div> 


        </div> 
      </div>


      <h1>Main Page </h1>
     </main>
  );
}
