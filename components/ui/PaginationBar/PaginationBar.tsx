import Link from "next/link";

export default function PaginationBar({ page, maxPage }) {
  // No pages? No pagination.
  if (!maxPage) {
    return null;
  }

  return (
    // Sticky footer pagination bar
    <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-lg mx-auto p-3 flex justify-between items-center space-x-2">
        {/* Prev Button (redirect 0 when already on page 0) */}
        <Link
          href={`?page=${page > 0 ? page - 1 : 0}`}
          className="w-50 h-10 flex items-center justify-center rounded-full text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Previous page"
        >
          &lt;
        </Link>

        {/* Page number array (scrollable) */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {Array.from({ length: maxPage }, (_, i) => (
            <Link
              href={`?page=${i}`}
              key={i}
              className={`w-10 h-10 flex items-center justify-center rounded-md font-medium transition-colors flex-shrink-0 mx-1 ${
                i === page
                  ? "bg-blue-600 text-white shadow-sm" // current page highlight
                  : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>

        {/* Next Button (redirect to last page when on last page) */}
        <Link
          href={`?page=${page < maxPage - 1 ? page + 1 : maxPage - 1}`}
          className="w-50 h-10 flex items-center justify-center rounded-full text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Next page"
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}
