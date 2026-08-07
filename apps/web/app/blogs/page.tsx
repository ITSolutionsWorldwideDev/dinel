// apps/web/app/blogs/BlogsPage.tsx

import { BookOpen } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#0A7CD8]/10 rounded-full p-6">
            <BookOpen size={48} className="text-[#0A7CD8]" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Blogs
        </h1>

        <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
          We're working on some great content. Our blog is coming soon —
          stay tuned!
        </p>

        <div className="inline-flex items-center gap-2 bg-[#FF8026]/10 text-[#FF8026] px-5 py-2.5 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-[#FF8026] rounded-full animate-pulse"></span>
          Coming Soon
        </div>
      </div>
    </div>
  );
}