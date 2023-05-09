const Bottom = () => {
  return (
    <div className="flex  justify-center items-center h-auto py-2 text-center left-0 w-full pt-[20px] border-0 border-t-2 border-[#A30000] text-[#171616] flex-col  font-bold lg:flex-row  lg:justify-between lg:items-start lg:w-[100%] lg:px-[20px] ">
      <ul className="flex flex-wrap w-[100%] gap-1 items-center justify-center text-center text-[10px] tracking-tighter px-[2px] pb-[2px] text-[#4d4646] lg:gap-3 lg:text-[#A30000] lg:justify-start lg:text-left lg:p-0 ">
        <li>FAQ</li> /<li>Safety tips</li> /<li>Terms</li> /
        <li>Cookie Policy</li> /<li>Privacy settings</li>
      </ul>
      <div className="text-[10px] tracking-tighter mt-[10px] w-full items-center justify-center text-center text flex lg:justify-end lg:items-end">
        © 2023 Match Group, LLC, All Rights Reserved
      </div>
    </div>
  );
};

export default Bottom;
