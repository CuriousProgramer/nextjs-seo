import { BASE_URL } from "@/api";
import Header from "@/components/layout/Header";
import ToolCard from "@/components/Tools/ToolCard";
import axios from "axios";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  openGraph: {
    title: 'Techbible',
    description: 'The Community for Easy SaaS Exploration',
    url: 'https://techbible.ai/',
    siteName: 'Techbible',
    images: [
      {
        url: 'https://i.postimg.cc/RVnF4RgR/techbible.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.postimg.cc/RVnF4RgR/techbible.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

async function getAllTools() {

  try {
    const headers = {
      // Specify your headers here
      Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_API_TOKEN}`,
      // Add other headers if needed
    };

    // Make the Axios GET request with the specified headers
    const res = await axios.get(`${BASE_URL}/mongo-tools`, { headers });

    return res?.data;
  } catch (err) {
    return null;
  }
}

export default async function Page() {

  const tools = await getAllTools();
  
  return (
    <div className="bg-black">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 rounded-2xl">
        <div className="max-w-[1400px] mx-auto bg-[#131619] p-6 rounded-2xl mt-8">
        {tools?.map((item: any,index: any) => (
          <ToolCard key={item._id} toolData={item}/>
        ))}
        </div>
      </main>
    </div>
  );
}
