import CommentList from "@/components/article-detail/comment";
import { Article } from "@/models/article";

const ArticleDetail = ({ id, title, content }: Article) => {
  return (
    <div className="">
      <div className="relative mt-3">
        <img
          src="https://www.ofm.co.th/blog/wp-content/uploads/2021/11/%E0%B8%88%E0%B8%94%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%A7%E0%B8%A2-1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-2 px-1 h-[150px]">
        <div className="text-[18px] text-[#3a3a3a] font-medium  mt-4">
          รายละเอียด :
        </div>
        <div className="text-[14px] text-[#3a3a3a] font-normal">{content}</div>
      </div>
      <div className="border-b-1 border-gray-200"></div>
      <div className="justify-center flex mt-2 text-[14px] text-gray-500 font-normal">
        ดูรายละเอียด
      </div>
    </div>
  );
};

export default ArticleDetail;
