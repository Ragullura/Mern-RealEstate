import { Button, TextInput, Textarea } from 'flowbite-react'


export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
      <form className='flex flex-col sm:flex-row gap-4'>

        <div className='flex flex-col gap-4 flex-1'>
          <TextInput type="text" placeholder='Name'
          className='border p-3 rounded-tl-lg'
          id='name'
          maxLength='62'
          minLength='10'
          required
          />

          <Textarea
          type='text'
          placeholder='Description'
          className='border p-3 rounded-tl-lg'
          id='description'
          required />

          <TextInput type="text"
          placeholder='Address'
          className='border p-3 rounded-tl-lg'
          id='address'
          required />

          {/* check box  for availability */}

          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2 items-center'>

                <input type="checkbox" 
                  id='sale'
                  className='w-5 rounded-tl-lg'
                />
                <span>Sell</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='rent'
                className='w-5 rounded-tl-lg'
                
              />
              <span>Rent</span>
            </div>
            
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='parking'
                className='w-5 rounded-tl-lg'
               
              />
              <span>Parking spot</span>
            </div>

            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5 rounded-tl-lg'
                
              />
              <span>Furnished</span>
            </div>

            <div className='flex gap-2 items-center' >
              <input
                type='checkbox'
                id='offer'
                className='w-5 rounded-tl-lg '
                
              />
              <span>Offer</span>
            </div>
          </div>
          {/* rooms section  */}
          <div className='flex flex-wrap gap-6'>
                <div className='flex items-center gap-2'>
                  <input
                    type='number'
                    id='bedrooms'
                    min='1'
                    max='10'
                    required
                    className='p-3 border border-gray-300 rounded-tr-lg'
                    
                  />
                  <p>Bedroom</p>
                </div>
      
                <div className='flex items-center gap-2'>
                <input
                  type='number'
                  id='bathrooms'
                  min='1'
                  max='10'
                  required
                  className='p-3 border border-gray-300 rounded-tr-lg'
                  
                />
                <p>Bathroom</p>
              </div>

            {/* Regular Price section */}
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='regularPrice'
                min='50'
                max='10000000'
                required
                className='p-3 border border-gray-300 rounded-tr-lg'
                
              />
              <div className='flex flex-col items-center'>
                <p>Regular price</p>
                
                  <span className='text-xs'>(&#x24; / month)</span>
                
              </div>
            </div>
              {/* Discounted Price section */}

              <div className='flex items-center gap-2'>
                  <input
                    type='number'
                    id='discountPrice'
                    min='0'
                    max='10000000'
                    required
                    className='p-3 border border-gray-300 rounded-tr-lg'
                  
                  />
                  <div className='flex flex-col items-center'>
                    <p>Discounted price</p>
                      <span className='text-xs'>(&#x24; / month)</span>
                    
                  </div>
                </div>
           </div>
        </div>
              
                {/* secound div  */}
                <div className='flex flex-col flex-1 gap-4'>
                    <p className='font-semibold'>
                      Images:
                      <span className='font-normal text-gray-600 ml-2'>
                        The first image will be the cover (max 6)
                      </span>
                    </p>
                  <div className='flex gap-4  items-center '>
                    <TextInput 
                    className='p-2 border border-gray-300 rounded-tl-lg w-full'
                    type='file'
                    id='images'
                    accept='image/*'
                    multiple
                    />
                    <Button outline
                     className=''
                    gradientDuoTone="greenToBlue" >
                      Upload
                    </Button>
                  
                  </div>
                  <Button outline
                    gradientDuoTone="pinkToOrange">
                    Create listing
                </Button>  
                  </div>    
      </form>

    </main>
  );
}
