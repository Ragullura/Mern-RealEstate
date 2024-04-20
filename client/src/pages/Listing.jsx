import { useEffect, useState } from 'react'
import { Spinner } from "flowbite-react";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
/* import SwiperCore from 'swiper'; */
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper/modules';

export default function Listing() {
  const  [listing, setListing] = useState(null);
  const  [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() =>{
    const fetchListing = async () =>{
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if(data.success === false) {
          setError(true);
          setLoading(false);
        }
        setListing(data);
        setLoading(false);
        setError(false);        
      } catch (error) {
          setError(true);
          setLoading(false);
      }
    };
      fetchListing();
  },[params.listingId]);
  return (
    <main>
        { loading ? <Spinner color="success" className="h-12 w-12 my-7 flex mx-auto" aria-label="Success spinner example" /> : null}

        {error && ( <p color='failure' className='text-center my-7' >Something went wrong!</p> )}

        {/* Add Swiper */}

        {listing && !loading && !error && (
          <>
          <Swiper pagination={{type:'progressbar',}}
          navigation={true} 
          modules={[Pagination, Navigation]}
          className="mySwiper"
          >
            {listing.imageUrls.map((url) =>(
              <SwiperSlide key={url}>
                <div className='h-[550px]'
                style={{
                  background:`url(${url}) center no-repeat`,
                  backgroundSize: 'cover',
                }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
          </>
        )}
        

      
          
    </main>
  )
}
