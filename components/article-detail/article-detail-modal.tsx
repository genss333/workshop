"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Article } from "@/models/article";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleDetailComponent from "./article-detail";

const ArticleDetailsModal = (article: Article) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) router.back();
  }, [isOpen, router]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="text-[24px] text-[#3a3a3a] font-semibold line-clamp-2 leading-none">
              {article.title}
            </div>
          </DialogTitle>
        </DialogHeader>
        <ArticleDetailComponent {...article} />
        {/* <div className="mt-4">
          <button
            onClick={() => router.push(`/articles/${article.id}`)}
            className="text-blue-600 hover:underline"
          >
            View Detail (full page)
          </button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
};
export default ArticleDetailsModal;
