import {Icons} from "../assets/icons/index"

export default function TopBar() {
    return (
        <div className='flex gap-1 mb-25'>
          <div className="flex border-1 px-4 py-1 gap-4 w-3xl rounded-[4px]">
            <Icons.Searchbar/>
            <input type="text" className="w-3xl outline-0" placeholder="Pesquisar" />
          </div>
          <div>
            <button className='hover:cursor-pointer hover:bg-black duration-300 shadow-2xl py-1 px-1 rounded-[4px] bg-lightThemeEmphasis'>
              <Icons.Sun/>
            </button>
          </div>
        </div>
    )
}