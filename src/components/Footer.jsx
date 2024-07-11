import { Link } from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="items-center justify-center mx-auto w-full flex flex-col overflow-hidden bg-blue-950 border-b-white border-b-[3px] rounded-b-[30px]">
      <div className=" w-full self-stretch flex flex-row items-end justify-between pt-[56.7px] pb-[28.3px] pr-8 pl-[37px] box-border max-w-full gap-[20px] text-left text-3xl text-white font-average mq1125:flex-wrap">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[27.4px]">
          <div className="flex flex-col items-start justify-start gap-[16.2px]">
            <div className="w-[296px] flex flex-row items-start justify-start py-0 px-[70px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <a target="_blank" rel="no_referrer" href="https://www.abta.com/">
                <Image
                  height={94}
                  width={160}
                  priority
                  className="h-[92.1px] flex-1 relative max-w-full overflow-hidden object-cover shrink-0 [debug_commit:1de1738] z-[1]"
                  alt=""
                  src="/icons/footerlogo.png"
                  sizes="(height: 92.1px, width: 160px)"
                />
              </a>
            </div>
            <div className="relative shrink-0 [debug_commit:1de1738] z-[1] mq450:text-lg">
              A member of the UK Inteltravel Group.
            </div>
          </div>
        </div>
        <div className="h-[154.9px] w-[395px] flex flex-col items-start justify-start max-w-full text-9xl text-slate-400">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 px-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative inline-block min-w-[127px] z-[1] mq450:text-3xl">
                Contact us
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px] text-5xl">
              <a
                href="mailto:Enquiries@adlerstravels.com"
                className="relative whitespace-nowrap z-[1] mq450:text-lgi"
              >
                Enquiries@adlerstravels.com
              </a>

              <div className="flex flex-row items-start justify-start py-0 pr-[51px] pl-[58px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative whitespace-nowrap z-[1] mq450:text-lgi">
                  +447949162702.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[145px] flex flex-row items-start justify-start gap-[7px] text-xl font-b612">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[24.3px] inline-block min-w-[48px] z-[1] mq450:text-base mq450:leading-[19px]">
              SlikX
            </div>
          </div>
          <Image
            height={30}
            width={30}
            className="h-[30.4px] w-[30px] relative object-cover z-[1]"
            loading="lazy"
            alt="copyright image"
            src="/icons/copyright.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[24.3px] inline-block min-w-[53px] z-[1] mq450:text-base mq450:leading-[19px]">
              2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// const Footer = () => (
//   <footer className="flex flex-col px-7 pt-14 pb-7 mt-20 w-full bg-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//     <div className="px-px max-w-full w-[900px]">
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//         <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col grow text-2xl text-white max-md:mt-10">
//             <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc95ba6db2c7f97fde828d2f03ead4ab47eae5c1219089309e1beb48547f67c5?apiKey=9d490af220534b5d8c5bd3d823d7a1c0&" alt="Company logo" width={164} height={97} className="self-center max-w-full aspect-[1.69] w-[164px]" />
//             <p className="mt-5">A member of the UK Inteltravel Group.</p>
//           </div>
//         </div>
//         <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
//           <address className="flex flex-col items-center self-stretch my-auto text-2xl text-slate-400 max-md:mt-10">
//             <h2 className="text-3xl">Contact us</h2>
//             <p className="self-stretch mt-3.5">Enquiries@adlerstravels.com</p>
//             <p className="mt-3">+44 7949 162 702</p>
//           </address>
//         </div>
//       </div>
//     </div>
//     <div className="flex gap-2 items-center self-end text-xl text-white whitespace-nowrap">
//       <p className="grow self-stretch my-auto">SlikX</p>
//       <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213ad66651e9eb0e87943d280fa029048f2093fd69e6f96ad4ec55552000bcd?apiKey=9d490af220534b5d8c5bd3d823d7a1c0&" alt="" width={31} height={32} className="shrink-0 self-stretch aspect-[0.97] w-[31px]" />
//       <p className="self-stretch my-auto">2024</p>
//     </div>
//   </footer>
// );