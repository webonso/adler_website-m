'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  const [term, setTerm] = useState("")
  // Inside the Search Component...
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
  
    const params = new URLSearchParams(searchParams);
    
    params.set('page', 1);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

 

  //  const handleFilterClick = () => {
  //    router.push(`/booking?bookingType=${bookingTypeFilter}&searchQuery=${'query'}`);
  // };

  return (
    <div className="w-[1253px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-31xl text-white font-average">
      <form onSubmit={(e) => {e.preventDefault();
      handleSearch()}} 
      className="w-[891px] flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="self-stretch flex flex-row items-center text-center justify-center py-0 px-5">
          <h2 className="m-0 relative text-inherit font-normal font-inherit z-[2] mq450:text-11xl mq750:text-21xl">
            Where would you like to go?
          </h2>
        </div>

        <div className="self-stretch flex-1 flex-shrink-0 flex flex-row items-start justify-start gap-[3px] max-w-full">
          <div className="flex-1 shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25),_0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl bg-white box-border flex flex-row items-start justify-start pt-[19px] px-[22px] pb-[9px] gap-[26px] max-w-full z-[2] border-[1px] border-solid border-gainsboro">
            <div className="h-20 w-[693px] relative shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25),_0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />

            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Image
              className="h-12 w-12 relative object-contain z-[3]"
              alt="search-icon"
              src="/icons/search.png"
              width={12}
              height={12}
              sizes='(width:24px, height:24px)'
            />

            <input
              className="w-full peer border-none outline-none bg-[transparent] h-[43px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 font-averia-libre text-5xl text-blue-300"
              placeholder="Search..."
              type="search"
              id="search"
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              defaultValue={searchParams.get('query')?.toString()}
            />
          </div>  

            <button
              type="submit"
              className="cursor-pointer shrink border-none pt-[21px] px-[57px]  lg:px-6  pb-[25px] bg-blue-100 shadow-[0px_0px_2px_2px_rgba(0,_0,_0,_0.25),_0px_0px_2px_2px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-31xl rounded-br-31xl rounded-bl-none flex flex-row items-start justify-start z-[2] hover:bg-slategray-100"
            >
              <span className="relative text-9xl mq450:text-sm font-average text-white text-left inline-block min-w-[80px] z-[3]">
                Search
              </span>
            </button>
        
        </div>
      </form>
    </div>
  );
};

export default Search;

// const [tagName, setTagName] = useState(initialSearch ?? "");
// const router = useRouter();

// useEffect(() => {
//   setTagName(initialSearch);
// }, [initialSearch]);

// return (
//   <form
//     onSubmit={(e) => {
//       e.preventDefault();
//       router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
//       router.refresh();
//     }}
//   >
//     <Label htmlFor="tag-name" className="text-right">
//       Search By Tag
//     </Label>
//     <div className="flex gap-2">
//       <Input
//         onChange={(e) => setTagName(e.currentTarget.value)}
//         id="tag-name"
//         value={tagName}
//       />
//       <Button type="submit">Search</Button>
//     </div>
//   </form>
// );
// }
