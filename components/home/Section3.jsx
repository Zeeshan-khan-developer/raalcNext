import { Section3Image1 } from '@/app/untils/imgimport'
import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <section className="section3 relative bg-[#FFF9F0] rounded-[5rem] z-[2]">
    <div className="container mx-auto">
      <div className="section2_ gap-16 py-32 max-lg:py-10 max-lg:gap-3 w-[85%] max-lg:w-full max-lg:text-center mx-auto grid justify-center items-center grid-cols-2">
        <div className="section2_left">
          <h2 className="font-Mluvka font-bold text-[2.313rem] uppercase leading-[1]">Specialized legal assistance and judicial services</h2>
          <div className="section2_leftB mt-4">
         
           <p className="text-[.9rem] text-[#393946]">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugiat. Imperdiet massa tincidunt nunc pulvinar sapieSemper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus purus in massa tempor nec feugi</p>
          </div>

          <ul className="flex justify-center max-lg:flex-col max-lg:items-center gap-14 mt-10">
            <li>
              <div className="h-[5.638rem] w-[8.75rem] text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target="10"
                  data-postfix="k+">10k+</span>
                <span></span>
              </div>
              <div className="h4 font-medium leading-4">
                Matters <br />
                served
              </div>
            </li>
            <li>
              <div className="h-[5.638rem] w-[8.75rem] text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target="30" data-postfix="">30</span>
              </div>
              <div className="h4 font-medium leading-4">
                Years Combined <br />
                Experiance
              </div>
            </li>
            <li>
              <div className="h-[5.638rem] w-[8.75rem] text-center h2 font-OoohBaby text-[4rem] text-secondary">
                <span className="counter transition-all ease-in-out duration-700" data-target="50"
                  data-postfix="+">50+</span>
                <span></span>
              </div>
              <div className="h4 font-medium leading-4">
                Team Ever <br />
                Growing
              </div>
            </li>
          </ul>
         </div>
        <div className="section2_right  relative">
          <div className="section2_right_  absolute border border-white rounded-[5rem] w-[17rem] h-[13rem] top-[-1rem] left-[-2rem]"></div>
          <Image className="relative max-lg:mx-auto w-full" src={Section3Image1} alt="section2_right" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section3
