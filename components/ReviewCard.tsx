const ReviewCard = ({ review }: { review: { name: string; text: string } }) => (
  <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between">
    <p className="text-gray-700 italic mb-4">"{review.text}"</p>
    <p className="text-primary font-semibold">{review.name}</p>
  </div>
);

export default ReviewCard;
