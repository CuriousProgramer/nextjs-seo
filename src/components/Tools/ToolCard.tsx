import Link from "next/link";

export default function ToolCard({ toolData }: any) {
  // const toolData = {
  //   _id: "65576fd489f1798d2cdf6a81",
  //   Icon: "https://firebasestorage.googleapis.com/v0/b/techbible.appspot.com/o/discussion-images%2Fadcreative.png?alt=media&token=02dfbd3d-462e-48ac-b330-c886bc39201f",
  //   Name: "Adcreative AI",
  //   slug: "adcreative-ai",
  //   Description:
  //     "Generate high-performing ads with AI. Adcreative solves the problem of…",
  //   Integrations: "Meta, Google",
  //   Price: "Paid",
  //   PricingPage:
  //     "https://firebasestorage.googleapis.com/v0/b/techbible.appspot.com/o/discussion-images%2Fadcreative%20proce.png?alt=media&token=c14e5bcb-f682-4ee7-9eab-312fa6b35dc1",
  //   URL: "https://www.adcreative.ai/",
  //   Category: "Marketing and Advertising",
  //   Productimage:
  //     "https://firebasestorage.googleapis.com/v0/b/techbible.appspot.com/o/discussion-images%2Fadcreativedemo.png?alt=media&token=0d0ad289-7e0a-4f7a-a986-b2a2bf0ac9b5",
  //   JobRolesthatuseit:
  //     "Social media manager,Market Researcher,Small business owners",
  //   Keywords:
  //     "AI Advertiser,Ad Copywriter Tool,Marketing AI,Social Media Ads,Adcreative AI,Ad Campaign Automation,Digital Marketing Tool",
  //   Founder: "Tufan Gok",
  //   FounderLink: "https://www.linkedin.com/in/tufan-gok/",
  // };
  return (
    <Link href={`/tool/${toolData?.slug}`}>
      <div
        id={toolData?._id}
        className="bg-[#fff] dark:bg-[#000] p-4 rounded-xl mb-4"
        style={{
          borderWidth: 1,
          borderColor: "#000",
        }}
      >
        {/* <Link to={`/tool/${toolData?.slug}/`}> */}
        <div
          // onClick={() => {
          //   navigate(`/tool/${toolData?.slug}/`);
          // }}
          className="cursor-pointer flex flex-col sm:flex-row items-start gap-4 pb-4 border-b border-[#dfdfdf] dark:border-[#202429]"
        >
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <img
                className="h-[50px] w-[50px] rounded-xl object-contain"
                src={toolData?.Icon}
                alt=""
              />
              <div className="flex-1">
                <div className="relative w-full flex flex-row items-center justify-between">
                  <h3 className="text-[#000] dark:text-[#fff] font-spartan text-xl font-semibold mr-auto">
                    {toolData?.Name}
                  </h3>
                </div>
                <p className="text-[#35373E] dark:text-[#A5A6A9]  mt-1">
                  {toolData?.Price}
                  <span className="h-[5px] w-[5px] inline-block mx-2 mb-[2px] bg-[#35373E] dark:bg-white rounded-xl"></span>{" "}
                  {toolData?.Category}
                </p>
              </div>
            </div>
            <p className="text-[#797A7E] dark:text-[#A5A6A9] mt-3 line-clamp-3">
              {toolData?.Description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
