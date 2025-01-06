import React from "react";

type TRatingProps = {
  rating: number | string | null; // Mengizinkan angka, teks, atau null
  className?: string;
};

export default function Rating({ rating, className }: TRatingProps) {
  // Jika rating adalah string atau null, anggap sebagai 0
  const roundedRating = 
    typeof rating === "number" ? Math.round(rating) :
    typeof rating === "string" && !isNaN(Number(rating)) ? Math.round(Number(rating)) :
    0;

  return (
    <div className={`stars d-flex items-center gap-1 ${className ?? className}`}>
      {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          {index + 1 <= roundedRating ? (
            <i className={`text-primary-dark fs-lg ti ti-star-filled`}></i>
          ) : (
            <i className={`text-primary-dark fs-lg ti ti-star opacity-50`}></i>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
