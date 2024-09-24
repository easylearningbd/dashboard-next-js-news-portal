import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCard from './item/SimpleNewsCard';

const LatestNews = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2'>
            <Carousel
            autoPlay={true}
            arrows={false}
            responsive={responsive}
            infinite={true}
            transitionDuration={500}
            >
                {
                    [1,2,3,4].map((item, i) => <SimpleNewsCard/>)
                }

            </Carousel>
            
        </div>
    );
};

export default LatestNews;