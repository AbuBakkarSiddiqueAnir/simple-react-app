import { SearchIcon } from "../../../assets"


function Search() {
  return (
    <div className="relative w-[539px] bg-[#F0F5FA] rounded-2xl">
      <input
        type="text"
        placeholder="Search"
        className="pl-6 py-4  rounded-2xl w-full  bg-[#F0F5FA] text-[#434446] placeholder-[#B0B7C3] focus:outline-none  focus:border-blue-300"
      />
      <img src={SearchIcon} className="absolute right-5 cursor-pointer top-[18px] " alt="search icon" />
    </div>
  )
}

export default Search
