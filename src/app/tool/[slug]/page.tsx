import { BASE_URL } from "@/api";
import Header from "@/components/layout/Header";
import ToolCard from "@/components/Tools/ToolCard";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getToolData(slug: string) {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_API_TOKEN}`,
    };
    const res = await axios.get(`${BASE_URL}/getToolBySlug/${slug}`, {
      headers,
    });

    return res?.data?.tool;
  } catch (err) {
    return null;
  }

  return (
    <ul className="text-black">
      {/* {data.images.map((item, index) => (
        <li>{item}</li>
      ))} */}
    </ul>
  );
}

export async function generateMetadata({params}: any): Promise<Metadata> {
  const toolData = await getToolData(params.slug);

  return {
    title: toolData?.Name,
    description: toolData?.Description,
    openGraph: {
        title: toolData?.Name,
        description: toolData?.Description,
        url: 'https://techbible.ai/',
        siteName: 'Techbible',
        images: [
          {
            url: toolData?.Icon,
            width: 800,
            height: 600,
          },
          {
            url: toolData?.Icon,
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
  }
}

// export const metadata = {
//   openGraph: {
//     title: "Next.js",
//     description: "The React Framework for the Web",
//     url: "https://nextjs.org",
//     siteName: "Next.js",
//     images: [
//       {
//         url: "https://nextjs.org/og.png", // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default async function Tool({ params }: { params: { slug: string } }) {
  console.log("slug is", params.slug);
  const toolData = await getToolData(params.slug);
  return (
    <>
      <Header />
      <div className="bg-black min-h-[100vh]">
        <div className="text-black bg-black max-w-[1400px] mx-auto pt-[120px] px-6">
          <div className="border-b border-[#202429] pb-10">
            <div className="flex items-center justify-between relative">
              <p className="font-spartan font-semibold text-xl text-[#1B1D21] dark:text-[#fff]">
                {toolData?.Category}
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-start mt-8 pb-8 border-b border-b-[#202429]">
              <img
                className="w-[124px] h-[124px] rounded-xl mr-6 object-cover"
                src={toolData?.Icon}
                alt=""
              />
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 w-full">
                  <div className="relative">
                    <h3 className="font-spartan text-xl font-semibold text-[#1B1D21] dark:text-[#fff]">
                      {toolData?.Name}
                    </h3>

                    {toolData?.Founder && (
                      <p className="text-[#35373E] dark:text-[#A5A6A9] font-spartan">
                        Founded by:{" "}
                        <span>
                          {toolData?.FounderLink ? (
                            <a target={"_blank"} href={toolData?.FounderLink}>
                              {toolData?.Founder}
                            </a>
                          ) : (
                            `${toolData?.Founder}`
                          )}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="bg-[#DFDFDF] text-[#E36B20] sm:ml-auto rounded-xl  p-3 px-6 font-spartan flex flex-row items-center justify-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M10.2916 9.20801L17.4166 2.08301M17.4166 2.08301H13.1862M17.4166 2.08301V6.31348"
                            stroke="#E36B20"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.4167 9.99967C17.4167 13.7316 17.4167 15.5976 16.2573 16.757C15.098 17.9163 13.232 17.9163 9.50004 17.9163C5.76809 17.9163 3.90211 17.9163 2.74274 16.757C1.58337 15.5976 1.58337 13.7316 1.58337 9.99967C1.58337 6.26772 1.58337 4.40175 2.74274 3.24238C3.90211 2.08301 5.76809 2.08301 9.50004 2.08301"
                            stroke="#E36B20"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                      Share
                    </button>
                    <a
                      href={toolData?.URL}
                      className="w-full sm:w-auto text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="bg-[#E36B20] w-[120px] rounded-xl p-3 font-spartan flex flex-row items-center justify-center gap-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                          >
                            <path
                              d="M10.2916 9.20801L17.4166 2.08301M17.4166 2.08301H13.1862M17.4166 2.08301V6.31348"
                              stroke="#F7F7F7"
                              strokeWidth="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.4167 9.99967C17.4167 13.7316 17.4167 15.5976 16.2573 16.757C15.098 17.9163 13.232 17.9163 9.50004 17.9163C5.76809 17.9163 3.90211 17.9163 2.74274 16.757C1.58337 15.5976 1.58337 13.7316 1.58337 9.99967C1.58337 6.26772 1.58337 4.40175 2.74274 3.24238C3.90211 2.08301 5.76809 2.08301 9.50004 2.08301"
                              stroke="#F7F7F7"
                              strokeWidth="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </span>
                        Visit Site
                      </button>
                    </a>
                  </div>
                </div>
                <p className="text-[#A5A6A9] font-normal text-lg font-spartan mt-4 mb-4">
                  {toolData?.Description}
                </p>
                {toolData?.tasks?.length > 0 && (
                  <div className="font-spartan">
                    <p className="text-[#A5A6A9] font-spartan mt-4 max-w-[350px]">
                      Tasks it helps with:
                    </p>
                    <div className="grid my-2 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {toolData?.tasks?.map((item: any, index: any) => (
                        <p
                          className="text-[#35373E] dark:text-[#fff]"
                          key={index}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-end">
                  <div>
                    {toolData?.webSentiment && (
                      <p className="text-[#A5A6A9] font-spartan mt-4 max-w-[350px]">
                        Overall Web Sentiment:{" "}
                        <span className="text-[#35373E] dark:text-[#fff]">
                          {toolData?.webSentiment}
                        </span>
                      </p>
                    )}
                    {toolData?.timeToValue && (
                      <p className="text-[#A5A6A9] font-spartan mt-4 max-w-[350px]">
                        Time to value:{" "}
                        <span className="text-[#35373E] dark:text-[#fff]">
                          {toolData?.timeToValue}
                        </span>
                      </p>
                    )}
                    {toolData?.JobRolesthatuseit && (
                      <p className="text-[#A5A6A9] font-spartan mt-4 max-w-[350px]">
                        Used by:
                        <span className="text-[#35373E] dark:text-[#fff]">
                          {toolData?.JobRolesthatuseit}
                        </span>
                      </p>
                    )}
                    <div>
                      <p className="text-[#A5A6A9] font-spartan mt-4 max-w-[320px]">
                        Integrations:{" "}
                        {toolData?.ToolIntegrations?.map(
                          (item: any, index: any) => (
                            <span className="text-[#35373E] dark:text-[#fff]">
                              <Link href={`/tool/${item?.slug}`}>
                                {item?.Name}
                              </Link>
                              {", "}
                            </span>
                          )
                        )}
                        <span className="text-[#35373E] dark:text-[#fff]">
                          {toolData?.Integrations}
                        </span>
                      </p>
                    </div>
                    {/* {toolData?.ToolIntegrations?.length > 0 ? (
                <div>
                  <p className='text-[#A5A6A9] font-spartan mt-4 max-w-[320px]'>
                    Integrations s:{' '}
                    {toolData?.ToolIntegrations?.map((item, index) => (
                      <span className='text-[#35373E] dark:text-[#fff]'>
                        <Link to={`/tool/${item?.slug}`}>{item?.Name}</Link>
                        {', '}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                <div>
                  {toolData?.Integrations && (
                    <p className='text-[#A5A6A9] font-spartan mt-4 max-w-[320px]'>
                      Integrations:{' '}
                      <span className='text-[#35373E] dark:text-[#fff]'>
                        {toolData?.Integrations}
                      </span>
                    </p>
                  )}
                </div>
              )} */}
                    {}
                    <p className="text-[#E36B20] font-spartan mt-2">
                      {toolData?.Price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
