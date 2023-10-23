"use client";
import React, { createContext, useState } from "react";
import { Review } from "../types";

const useReviewState = (initialReview: Review[]) =>
  useState<Review[]>(initialReview);

export const ReviewContext = createContext<ReturnType<
  typeof useReviewState
> | null>(null);

export const useReviews = () => {
  const reviews = React.useContext(ReviewContext);
  if (!reviews) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return reviews;
};

export const ReviewProvider = ({
  reviews: initialReviews,
  children,
}: {
  reviews: Review[];
  children: React.ReactNode;
}) => {
  const [reviews, setReviews] = useReviewState(initialReviews);

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      {children}
    </ReviewContext.Provider>
  );
};
