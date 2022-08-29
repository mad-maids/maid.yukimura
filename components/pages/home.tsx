import { DuplicateIcon } from "@heroicons/react/outline";
import copy from "copy-to-clipboard";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import edelman from "../../images/edelman.jpeg";
import elad from "../../images/elad.jpeg";
import flavio from "../../images/flavio.jpeg";
import jongold from "../../images/jongold.jpeg";
import ollermi from "../../images/ollermi.jpeg";
import shadcn from "../../images/shadcn.jpeg";
import christian from "../../images/christian.jpeg";
import yangshunz from "../../images/yangshunz.jpeg";
import nmoore from "../../images/nmoore.jpeg";
import joshlarson from "../../images/joshlarson.jpeg";
import paularmstrong from "../../images/paularmstrong.jpeg";

import { Container } from "../Container";
import Tweet, { Mention } from "../Tweet";
import Features from "../Features";
import { Marquee } from "../clients/Marquee";
import { Clients } from "../clients/Clients";

export default function Home() {
  const onClick = () => {
    copy("wiutfinance");
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <Head>
        <title>Turborepo</title>
        <meta
          name="og:description"
          content="Turborepo is a high-performance build system for JavaScript and
          TypeScript codebases"
        />
      </Head>
      <div className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
        <h1 className="max-w-5xl text-center mx-auto text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl">
          Finance Club
          <br className="hidden lg:block" />
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 ">
            WIUT deserved.
          </span>{" "}
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          Do Finance things at right place and with right people.
        </p>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md ">
            <Link href="/docs/getting-started">
              <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                Start Learning →
              </a>
            </Link>
          </div>
          <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
            <button
              onClick={onClick}
              className="flex items-center justify-center w-full px-8 py-3 font-mono text-sm font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10"
            >
              telegram: @wiutfinance
              <DuplicateIcon className="w-6 h-6 ml-2 -mr-3 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto ">
          <p className="pb-8 text-sm font-semibold tracking-wide text-center text-gray-400 uppercase dark:text-gray-500">
            We talk about:
          </p>
          <Marquee>
            <Clients />
          </Marquee>
        </div>
      </div>

      <div className="relative from-gray-50 to-gray-100">
        <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center dark:text-white">
            Become one of many pros
          </h2>
          <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
            In this club, we do many research activities and learn more about current business angels.
          </p>
          <Features />
        </div>
      </div>
      <div className="">
        <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:pt-24 lg:px-8">
          <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold  tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] md:text-center dark:text-white">
            Finance is crucial when it comes to doing decisions...
          </h2>
          <div className="max-w-2xl mx-auto lg:mt-2 dark:text-gray-400">
            <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
              I don't know what I just said...
            </p>
            <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
              But it's cool to have personal quote on a website!
            </p>
            <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
              <b className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                Slap some numbers to do some finance!
              </b>{" "}
              We&apos;re abstracting the complex numbers to achieve some statistics
              and this is what we do...
            </p>
          </div>
          <div className="flex items-center max-w-2xl py-4 mx-auto space-x-4">
            <div className="mt-4">
              <Image
                src="/images/people/jaredpalmer_headshot.jpeg"
                height={90}
                width={90}
                className="block mr-6 rounded-full"
                alt="Jared Palmer"
              />
            </div>
            <div className="flex flex-col h-full space-y-3">
              <div className="-mb-4 dark:hidden">
                <Image
                  src="/images/home/jared_signature_2.png"
                  height={75}
                  width={200}
                  alt="Jared Palmer"
                  className="block w-[200px] "
                />
              </div>
              <div className="hidden -mb-4 dark:block">
                <Image
                  src="/images/home/jared_signature.png"
                  height={75}
                  width={200}
                  className="block w-[200px] "
                  alt="Jared Palmer"
                />
              </div>
              <div className="inline-flex items-center ">
                <a
                  href="https://twitter.com/jaredpalmer"
                  target="_blank"
                  className="font-bold text-gray-400 no-underline"
                  rel="noopener noreferrer"
                >
                  Some Guy
                </a>
                <div className="ml-2 text-gray-500">President of Finance Club</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
