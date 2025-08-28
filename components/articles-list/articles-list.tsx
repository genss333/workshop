import * as types from "@/models/article";
import Link from "next/link";
const ArticleList = ({ items: article }: types.ArticleList) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {article?.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <div className="border rounded-xl w-[300px] h-[400px] p-2.5 relative">
              <div className="absolute top-0 left-0 z-40">
                <div className="rounded-br-lg rounded-tl-lg bg-gradient-to-r from-orange-500 to-red-500  text-white px-3.5">
                  ยอดนิยม 🔥
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://www.ofm.co.th/blog/wp-content/uploads/2021/11/%E0%B8%88%E0%B8%94%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%A7%E0%B8%A2-1.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute top-1 right-1">
                  <div className="rounded-lg  bg-white/50 px-2 text-black">
                    เข้าชม 20k
                  </div>
                </div>
              </div>
              <div className="mt-2 px-1 h-[150px]">
                <div className="text-[24px] text-[#3a3a3a] font-semibold line-clamp-2 leading-none">
                  {article.title}
                </div>
                <div className="text-[18px] text-[#3a3a3a] font-medium">
                  รายละเอียด :
                </div>
                <div className="text-[14px] text-[#3a3a3a] font-normal line-clamp-4">
                  {article.content}
                </div>
              </div>
              <div className="border-b-1 border-gray-200"></div>
              <div className="justify-center flex mt-2 text-[14px] text-gray-500 font-normal">
                ดูรายละเอียด
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
