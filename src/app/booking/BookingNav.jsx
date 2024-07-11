import Link from "next/link";


function BookingNav() {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-[806px] flex flex-row items-start justify-center pt-0 px-5 pb-[5.5px] box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[35px] max-w-full mq750:flex-wrap mq750:gap-[17px]">
          {links.map((link) => (
            <NavLinks key={link.title} {...link} />
          ))}
          <Link
            href={'/package-holidays'}
            className={`${
              pathname === '/package-holidays'
                ? 'relative border-b-[3px] border-b-[#333] text-black pb-2 '
                : null
            } inline-flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[7px] text-blue-100`}
          >
            <div className="relative h-6 w-6 min-h-[24px] z-[2]">
              <Image
                className="object-cover"
                alt="icon links"
                priority
                fill
                src="/icons/icons8-holiday.png"
                sizes="(height:24px, width:24px)"
              />
            </div>

            <div className="relative z-[2] mq450:text-base">
              Package Holidays
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default BookingNav;
