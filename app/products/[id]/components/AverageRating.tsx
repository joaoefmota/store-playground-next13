"use client";

import { useReviews } from "@/app/context/ReviewContext";
import { Review } from "@/app/types";
import { FunctionComponent } from "react";

const AverageRating: FunctionComponent = () => {
  const [reviews] = useReviews();
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
