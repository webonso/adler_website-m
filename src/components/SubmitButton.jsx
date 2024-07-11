import React from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer border:-none flex items-center justify-center p-0 bg-[transparent] self-stretch h-[60px] outline-none transition-all dark:bg-white dark:bg-opacity-10   relative"
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-100 box-border w-full h-full cursor-pointer z-[2]" />
      <p className="text-center top-[11px] text-9xl font-average text-white inline-block w-[86px] h-[34px] min-w-[86px] z-[3] mq450:text-3xl">
        Submit
      </p>
    </button>
  );
}

export default SubmitButton;
