import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  itemLabel?: string;
};

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
}

export function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  itemLabel = "listings",
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      aria-label={`${itemLabel} pagination`}
      className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-sm font-medium text-[var(--muted)]">
        Showing {startItem}-{endItem} of {totalItems} {itemLabel}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-white px-3 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft aria-hidden size={17} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => {
            const previousPage = visiblePages[index - 1];
            const showGap = previousPage && page - previousPage > 1;

            return (
              <span key={page} className="inline-flex items-center gap-1">
                {showGap ? (
                  <span className="px-1 text-sm font-semibold text-[var(--muted)]">
                    ...
                  </span>
                ) : null}
                <button
                  type="button"
                  onClick={() => onPageChange(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`inline-flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border px-3 text-sm font-semibold transition-colors duration-200 ${
                    page === currentPage
                      ? "border-[var(--blue)] bg-[var(--blue)] text-white"
                      : "border-[var(--line-strong)] bg-white text-[var(--navy)] hover:border-[var(--blue)]"
                  }`}
                >
                  {page}
                </button>
              </span>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-white px-3 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight aria-hidden size={17} />
        </button>
      </div>
    </nav>
  );
}
