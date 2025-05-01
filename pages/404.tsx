import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-primary">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">This page packed its bags and went on vacation. Try another one?</p>
      <Link href="/">
        <span className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition">
          Return Home
        </span>
      </Link>
    </div>
  );
}