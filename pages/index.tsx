import Head from 'next/head';
import { useState } from 'react';
import classNames from 'classnames';
import { useInput } from 'hooks-react-custom';
import Link from 'next/link';
import Image from 'next/image';

import { IconLoading, IconNetflix } from '~/components/icon';
import { routesPath } from '~/utils/constants/common';

import bgNetflix from '~/assets/images/bgNetflix.jpg';

export default function StartPage() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const { eventBind, value, hasValue } = useInput('');

  const handleFocusInput = () => {
    setIsInputFocus(true);
  };

  const handleBlurInput = () => {
    setIsInputFocus(false);
  };

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="relative min-h-screen">
          <div className="absolute top-0 left-0 bottom-0 right-0 z-[-2]">
            <Image src={bgNetflix} alt="" className="object-cover w-full h-full" priority />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.4)] z-[0] bg-start-page"></div>
          </div>
          l
          <div className="flex items-center pt-5">
            <div className="flex items-center justify-between pt-2 mx-14 w-full">
              <div className="text-red-500 !h-[36px]">
                <IconNetflix height={36} />
              </div>
              <div>
                <Link href={routesPath.login}>
                  <button className="bg-primaryRed font-[500] text-[16px] text-white rounded-lg p-[7px_17px]">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-[950px] mx-auto text-center pt-[70px] px-[45px]">
            <div className="py-[75px]">
              <div className="text-white">
                <h1 className="md:text-[50px] text-[30px] font-[700] max-w-[800px] mx-[75px]">
                  Unlimited movies, TV shows, and more.
                </h1>
                <h2 className="md:text-[26px] text-[20px] my-4 mx-[75px]">Watch anywhere. Cancel anytime.</h2>
              </div>
              <div>
                <h3 className="text-white text-[19px] font-[400] pb-5">
                  Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className="flex md:flex-row flex-col">
                  <div className="w-full relative">
                    <input
                      type="text"
                      className="border h-[70px] font-[400] min-w-[500] w-full px-4"
                      onFocus={handleFocusInput}
                      onBlur={handleBlurInput}
                      {...eventBind}
                    />
                    <div
                      className={classNames(
                        'absolute  -translate-y-1/2 left-4 flex items-center transition-all duration-200 ease-linear pointer-events-none',
                        isInputFocus || hasValue ? 'top-3' : 'top-1/2'
                      )}
                    >
                      <span
                        className={classNames(
                          'text-[16px] font-[400] text-[#8c8c8c] transition-all duration-200 ease-linear',
                          (isInputFocus || hasValue) && 'text-[13px]'
                        )}
                      >
                        Email address
                      </span>
                    </div>
                  </div>
                  <button className="bg-primaryRed text-white px-[30px] h-[70px] md:text-[30px] text-[20px] font-[400] whitespace-nowrap">
                    Get Started
                    {/* <div className="">
                      <IconLoading height={25} width={25} />
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
