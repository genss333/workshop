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
    <Dialog open={isOpen} onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{article.title}</DialogTitle>
        </DialogHeader>
        <ArticleDetailComponent {...article} />
        {/* <DialogFooter>
          <button
            onClick={() => router.push(`/articles/${article.id}`)}
            className="text-blue-600 hover:underline"
          >
            View Detail
          </button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetailsModal;
