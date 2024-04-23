import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setsidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  /* -------------UseEffect --------------------- */
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setsidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    /* now fetch data from database */

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };
    fetchListings();
  }, [location.search]);

  /* handle  search bar */
  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setsidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setsidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setsidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split(sort)[1] || "desc";

      setsidebardata({ ...sidebardata, sort, order });
    }
  };

  /* ----------handle submit in form-------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/*  SEARCH BAR Left Side */}
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term :
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="rounded-tl-3xl p-3 w-full shadow-md"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          {/* ------------ */}
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type :</label>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="all"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.type === "all"}
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="rent"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.type == "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="sale"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.type === "sale"}
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="offer"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          {/* ---- */}
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="parking"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="furnished"
                className="w-5 rounded-tl-lg"
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>
          {/* selection div */}
          <div className="flex items-center gap-2 ">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border rounded-tl-3xl shadow-md"
            >
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
      <div className="flex-1">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing Results :
        </h1>
      </div>
      {/* -----sec div end------ */}
    </div>
  );
}
