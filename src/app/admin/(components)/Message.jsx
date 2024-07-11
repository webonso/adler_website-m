import React from 'react';

function messages() {
  return (
    <>
      <div
        className="self-stretch w-full mx-auto overflow-hidden max-h-full shrink flex flex-col items-center justify-center pt-[12px] px-[20px] pb-[22px] gap-[15px] [debug_commit:69da668]
       max-w-full text-left text-sm text-black font-average shadow-lg rounded-3xs"
      >
        <div className="w-[883px] flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="relative">Booking Title : Flight</div>
            <p className="relative text-xs inline-block shrink-0">
              Category : Return
            </p>
          </div>

          <p className="m-0 h-full max-h-full relative inline-block py-0 pr-0 pl-[3px] text-smi text-gray ">
            Dreaming of turquoise waters and sandy beaches? Or maybe bustling
            cityscapes and historical landmarks ignite your passion? Ditch the
            jet lag woes! Our array of flight options is your Aladdin's lamp,
            granting wishes for affordable fares across the globe. From
            budget-friendly hops to luxurious first-class experiences, we'll
            whisk you away in comfort and style, leaving you with more energy to
            explore, not exhaust. Dreaming of turquoise waters and sandy
            beaches? Or maybe bustling city scapes and historical landmarks
            ignite your passion? Ditch the jet lag woes! Our array of flight
            options is your Aladdin's lamp, granting wishes for affordable fares
            across the globe. From budget-friendly hops to luxurious first-class
            experiences, we'll whisk you away in comfort and style, leaving you
            with more energy to explore, not exhaust.
          </p>
        </div>
        <div className="w-[882px] flex items-start justify-between max-w-full gap-[20px] flex-wrap text-xs text-gray mq825:flex-wrap">
          <div className="w-[371px] flex flex-row items-end justify-start py-[5px] px-1 box-border gap-[27px] max-w-full mq450:flex-wrap">
            <div className="w-[143px] flex flex-col items-start justify-start gap-[3px]">
              <p className="m-0 whitespace-pre-wrap">Name: Jeremiah Joe</p>

              <p className="m-0">Email: jeremy@gmail.com</p>
              <p className="m-0">Phone: 2456889999999 </p>
              <p className="m-0">Booking Date: 4pm 2043 </p>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[125px]">
              <p className="w-[169px] relative inline-block m-0 whitespace-nowrap">
                Departure: London, England
              </p>

              <p className="w-[161px] relative inline-block m-0">
                Destination : Paris, France
              </p>
              <p className="m-0">Leaving-on Date: May 10 4pm 2043</p>

              <p className="w-[143px] relative inline-block m-0">
                Booking Date: 4pm 2043
              </p>
            </div>
          </div>

          <div className="relative pt-[15px] px-0 pb-0 text-sm text-black">
            Time: 2pm Tues, 2024
          </div>
        </div>
      </div>
    </>
  );
}

export default messages;
