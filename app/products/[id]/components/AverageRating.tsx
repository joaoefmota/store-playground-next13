"use client";

import { Review } from "@/app/types";
import { FunctionComponent } from "react";

interface AverageRatingProps {
  reviews: Review[];
}

const AverageRating: FunctionComponent<AverageRatingProps> = ({ reviews }) => {
  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
};

export default AverageRating;
