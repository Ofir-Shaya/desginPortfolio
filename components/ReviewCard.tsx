interface Review {
  name: string;
  text: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <p className="text-gray-700 italic mb-4">"{review.text}"</p>
    <p className="text-primary font-semibold">{review.name}</p>
  </div>
);

export default ReviewCard;
