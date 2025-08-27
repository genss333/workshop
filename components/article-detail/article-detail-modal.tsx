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

const ArticleDetailsModal = (article: Article) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) router.back();
  }, [isOpen, router]);

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{article.name}</DialogTitle>
        </DialogHeader>
        {/* <ArticleDetails {...article} /> */}
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetailsModal;
