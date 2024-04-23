import { Button } from "flowbite-react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      {/*  SEARCH BAR Left Side */}
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search Term :</label>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-tl-3xl p-3 w-full shadow-md"
            />
          </div>
          {/* ------------ */}
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type :</label>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="all" className="w-5 rounded-tl-lg" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="sale" className="w-5 rounded-tl-lg" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="offer" className="w-5 rounded-tl-lg" />
              <span>Offer</span>
            </div>
          </div>
          {/* ---- */}
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="parking" className="w-5 rounded-tl-lg" />
              <span>Parking</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="furnished" className="w-5 rounded-tl-lg" />
                <span>Furnished</span>
              </div>
            </div>
            {/* selection div */}
            <div className="flex items-center gap-2 ">
              <label className="font-semibold">Sort:</label>
              <select id="sort_order" className="border rounded-tl-3xl shadow-md">
                <option value="regularPrice_desc">Price high</option>
                <option value="regularPrice_asc">Price low to high</option>
                <option value="createdAt_desc">Latest</option>
                <option value="createdAt_asc">Oldest</option>
              </select>
            </div>
            <Button
              type="button"
              outline
              gradientDuoTone="greenToBlue"
              className="w-full from-amber-300"
            >
              Search
            </Button>
        </form>
      </div>

      {/*-------RESULTS Right Side------*/}
      <div className='flex-1'>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listing  Results :</h1>

      </div>
      {/* -----sec div end------ */}
    </div>
  );
}
