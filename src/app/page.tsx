import { BASE_URL } from "@/api";
import Header from "@/components/layout/Header";
import ToolCard from "@/components/Tools/ToolCard";
import axios from "axios";

import type { Metadata } from 'next'


export default async function Page() {

  return (
    <div className="bg-[#fff] dark:bg-[#131313]">
      <main className="text-black">Hello</main>
    </div>
  );
}
