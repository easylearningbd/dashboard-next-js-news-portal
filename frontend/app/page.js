import HeadLines from "@/components/HeadLines";
import DetailsNews from "@/components/news/DetailsNews";
import DetailsNewsCol from "@/components/news/DetailsNewsCol";
import DetailsNewsRow from "@/components/news/DetailsNewsRow";
import SimpleNewsCard from "@/components/news/item/SimpleNewsCard";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import Title from "@/components/Title";
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

      <div className="w-full lg:w-6/12 mt-5 lg:mt-5">
      <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
      <Title title="Technology" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
        {
          [1,2,3,4].map((item,i) => <SimpleNewsCard item={item} key={i} />
           )
        }

         </div>
       </div> 
       </div> 
      </div> 

      <PopularNews type="Popular News" />

      {/* first Section  */}
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12">
            <DetailsNewsRow category="Sports" type="details_news" />
            <DetailsNews category="Health" />
          </div>

          <div className="w-full lg:w-4/12">
        <DetailsNewsCol category="Education" />
          </div>

        </div> 
      </div>






    </div> 
  </div> 

      <h1>Main Page </h1>
     </main>
  );
}
