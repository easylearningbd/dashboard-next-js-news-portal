import Breadcrumb from '@/components/Breadcrumb';
import Category from '@/components/Category';
import SimpleDetailsNewCard from '@/components/news/item/SimpleDetailsNewCard';
import PopularNews from '@/components/news/PopularNews';
import RecentNews from '@/components/news/RecentNews';
import Search from '@/components/news/Search';
import React from 'react';

const page = () => {
    return (
<div>
    <div className='bg-white shadow-sm py-4'>
        <div className='px-4 md:px-8 w-full'>
        <Breadcrumb one="Sports" two={"What puzzles reveal about the "} />
        </div> 
    </div>

<div className='bg-slate-200 w-full'>
    <div className='px-4 md:px-8 w-full py-8'>
        <div className='flex flex-wrap'>
            <div className='w-full xl:w-8/12'>
            <div className='w-full pr-0 xl:pr-4'>

    <div className='flex flex-col gap-y-5 bg-white'>
        <img src={'https://res.cloudinary.com/dbxtifnah/image/upload/v1727045972/news_images/ve2sbmjp9kttqgvz7ip8.webp'} alt="" />
    <div className='flex flex-col gap-y-4 px-6 pb-6'>
        <h3 className='text-red-700 uppercase font-medium text-xl'>Category Name</h3>
        <h2 className='text-3xl text-gray-700 font-bold'>What puzzles reveal about the depths of our own</h2>
        <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
        <span className='font-bold'>24-09-2024</span>
        <span className='font-bold'>By Ariyan</span>
        </div>
    <p>
    An 88-year-old man who is the world’s longest-serving death row inmate has been acquitted by a Japanese court, after it found that evidence used against him was fabricated.

Iwao Hakamada, who was on death row for almost half a century, was found guilty in 1968 of killing his boss, the man’s wife and their two teenage children.

He was recently granted a retrial amid suspicions that investigators may have planted evidence that led to his conviction for quadruple murder.

The 46 years spent on death row has taken a heavy toll on Hakamada's mental health, though, meaning he was unfit to attend the hearing where his acquittal was finally handed down.

Hakamada's case is one of Japan's longest and most famous legal sagas, and has attracted widespread public interest, with some 500 people lining up for seats in the courtroom in Shizuoka on Thursday.

As the verdict was handed down, Hakamada’s supporters outside the court cheered “banzai" - a Japanese exclamation that means "hurray".

Hakamada, who was exempted from all hearings due to his deteriorated mental state, has been living under the care of his 91-year-old sister Hideko since 2014, when he was freed from jail and granted a retrial.

She fought for decades to clear his name and said it was sweet to hear the words "not guilty" in court.

"When I heard that, I was so moved and happy, I couldn't stop crying," she told reporters.

Her brother has previously said his battle for justice was like "fighting a bout every day". "Once you think you can't win, there is no path to victory," he told AFP news agency in 2018.
    </p>

    </div>

    </div>

        
            </div> 
            </div>

        <div className='w-full xl:w-4/12'>
        <div className='w-full pl-0 xl:pl-4'>
            <div className='flex flex-col gap-y-8'>
                <Search/>
                <RecentNews/>
        <div className='p-4 bg-white'>
            <Category titleStyle={"text-gray-700 font-bold"} /> 
            </div> 
           </div> 
          </div> 
         </div> 
        </div> 

    <div className='pt-8'>
        <PopularNews/>

    </div>
    </div> 
</div>

    
</div>
    );
};

export default page;