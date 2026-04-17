export const getRatingTextColor = (rating: number) => {
  if (rating >= 90) return "text-rating-elite";
  if (rating >= 80) return "text-rating-great";
  if (rating >= 75) return "text-rating-good";
  return "text-rating-common";
};

export const getProgressColorClass = (rating: number) => {
  if (rating >= 90) return "[&>div]:bg-rating-elite";
  if (rating >= 80) return "[&>div]:bg-rating-great";
  if (rating >= 75) return "[&>div]:bg-rating-good";
  return "[&>div]:bg-rating-common";
};
