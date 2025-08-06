import { Icons } from "../assets/icons/index";

interface TopBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TopBar({
  searchValue,
  setSearchValue,
  darkTheme,
  setDarkTheme,
}: TopBarProps) {
  return (
    <div className="flex gap-1 mb-25">
      <div
        className={`${
          darkTheme ? "border-white text-white" : "border-black"
        } flex border-2 px-4 py-1 gap-4 w-3xl rounded-1 duration-1000`}
      >
        {darkTheme ? <Icons.SearchBarWhite /> : <Icons.Searchbar />}
        <input
          type="text"
          className="w-3xl outline-0 font-medium"
          placeholder="Search for a task..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className={`${
            darkTheme
              ? "bg-darkThemeEmpahis border-darkThemeEmpahis"
              : "bg-lightThemeEmphasis border-lightThemeEmphasis"
          } hover:cursor-pointer shadow-2xl py-1 px-1 border-2 hover:border-black hover:bg-black duration-300 rounded-[4px]`}
        >
          {darkTheme ? <Icons.Moon /> : <Icons.Sun />}
        </button>
      </div>
    </div>
  );
}
