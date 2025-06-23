function FilterButton({ icon }) {
  return (
    <div className="w-[48px] h-[48px] rounded-full bg-focus flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] cursor-pointer">
      <img src={icon} alt="Filter" className="w-6 h-6" />
    </div>
  );
}

export default FilterButton;
