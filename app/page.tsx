'use client'
import React, { useState, useEffect, useRef } from "react";

import { gsap, TweenMax, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useGSAP } from "@gsap/react";

import Image from "next/image";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const sites = [
  { id: 1, title: 'RIO', category: 'Web Branding', date: "2022-09-08", link: "https://rionow.co.uk/", img: "/images/rio.png" },
  { id: 2, title: 'RELX', category: 'Welcome to learning React!', date: "2022-09-08", link: "https://relxvape.co.uk/", img: "/images/relx.png" },
  { id: 3, title: 'UPSWING', category: 'Welcome to learning React!', date: "2022-09-08", link: "https://upswing.store/", img: "/images/upswing.png" },
  { id: 4, title: 'PURCOTTON', category: 'Welcome to learning React!', date: "2022-09-08", link: "https://www.purcottonuk.com/", img: "/images/purcotton.png" },
  { id: 5, title: 'Moringa Dev Corporation', category: 'Welcome to learning React!', date: "2022-09-08", link: "https://moringadevcorporation.com/", img: "/images/moringa.png" },
  { id: 6, title: 'MoCAT Zambia', category: 'Welcome to learning React!', date: "2022-09-08", link: "https://mocatzambia.com/", img: "/images/mocat.png" },
];

export default function Home() {
  const container = useRef(null);

  const { contextSafe } = useGSAP({ scope: container });

  const animation = contextSafe((item, target) => {
    var sm = target.querySelectorAll(".site_thumbnail");
    var ltxt = target.querySelectorAll(".left_text");
    var rtxt = target.querySelectorAll(".right_text");
    gsap.to(sm, {
      opacity: 1, duration: 0.4
    });
    gsap.to(ltxt, {
      x: 30
    });
    gsap.to(rtxt, {
      x: -30
    });
  });
  const rmanimation = contextSafe((item, target) => {
    var sm = target.querySelectorAll(".site_thumbnail");
    var ltxt = target.querySelectorAll(".left_text");
    var rtxt = target.querySelectorAll(".right_text");
    gsap.to(sm, {
      opacity: 0, duration: 0.4
    });
    gsap.to(ltxt, {
      x: 0
    });
    gsap.to(rtxt, {
      x: 0
    });
  });


  return (
    <main ref={container} className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Full Stack Web Developer
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className=" cursor-pointer flex place-items-center gap-2 p-8  lg:p-0"
            href="https://www.linkedin.com/in/joshua-banda-81435014b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on LinkedIN
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] min-h-screen">
        Joshua Banda
      </div>
      {sites.map((site) =>
        <a key={site.id}
          className=" cursor-pointer w-full m-auto lg:max-w-5xl"
          href={site.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div onMouseEnter={(e) => animation(site, e.currentTarget)} onMouseLeave={(e) => rmanimation(site, e.currentTarget)} className="mb-32 lg:mb-0 lg:w-full lg:max-w-5xl cursor-pointer relative">

            <div className="flex justify-between items-end border-white border-t-2 border-b-2 py-16 text">
              <div className="flex items-baseline gap-10 left_text">
                <div className="text-5xl">{site.id}</div>
                <div className="">
                  <div className="text-6xl">{site.title}</div>
                  <div className="mt-6 flex flex-col gap-5">
                    <div className="text-sm opacity-50">Category: <span>{site.id}</span></div>
                    <div className="text-sm opacity-50">Date: {site.date}</div>
                  </div>

                </div>
              </div>
              <div className="right_text">View More.</div>
            </div>
            <div className="site_thumbnail">
              <div className="inner_thumb">
                <img id="image1" alt="Speaker Image" className="w-full h-full object-cover" src={site.img} />
              </div>
            </div>

          </div>
        </a>
      )}
    </main>
  );
}
