import SearchIcon from "../../assets/Search.png";
import FilterIcon from "../../assets/Filter.png";

function SearchBar() {
  return (
    <div className="flex items-center justify-between px-6 mt-[56px] w-full gap-2">
      {/* Search Input */}
      <div className="flex items-center flex-grow mr-2 h-[48px] rounded-[32px] border border-border bg-white focus-within:border-primary focus-within:shadow-[0_0_8px_rgba(0,0,0,0.25)] transition-all duration-300">
        <img src={SearchIcon} alt="Search" className="w-6 h-6 ml-4" />
        <div className="h-[38px] w-px bg-border mx-2" />
        <input
          type="text"
          placeholder="search ..."
          className="text-muted font-light text-[12px] placeholder:text-muted outline-none bg-transparent w-full pr-4"
        />
      </div>

      {/* Filter Button */}
      <div className="w-[48px] h-[48px] rounded-full bg-focus flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-hover hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-200 mr-[24px]">
        <img src={FilterIcon} alt="Filter" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default SearchBar;
