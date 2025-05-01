import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  link: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Create a Memorable Brand Identity",
      excerpt:
        "Learn the key elements of creating a brand identity that resonates with your audience and stands out from the competition.",
      imageUrl: "/images/blog1.jpg",
      date: "May 15, 2023",
      category: "Design",
      link: "/brand-identity",
    },
    {
      id: "2",
      title: "Social Media Trends to Watch in 2023",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that are shaping how brands connect with their audiences.",
      imageUrl: "/images/blog2.jpg",
      date: "June 2, 2023",
      category: "Social Media",
      link: "/social-media-trends-2023",
    },
    {
      id: "3",
      title: "The Art of Product Photography",
      excerpt:
        "Discover professional techniques to showcase your products in the best light and drive more conversions.",
      imageUrl: "/images/blog3.jpg",
      date: "June 18, 2023",
      category: "Photography",
      link: "/product-photography",
    },
    {
      id: "4",
      title: "Effective Email Marketing Campaigns",
      excerpt:
        "Learn how to create email campaigns that engage your subscribers and drive measurable results for your business.",
      imageUrl: "/images/blog4.jpg",
      date: "July 5, 2023",
      category: "Marketing",
      link: "/email-marketing-campaigns",
    },
  ];

  return (
    <>
      <Head>
        <title>Creative Portfolio | Blog</title>
        <meta
          name="description"
          content="Insights and tips on design, marketing, photography, and social media"
        />
      </Head>

      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and case studies about design, marketing,
              photography, and social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-primary">{post.category}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.link}`}
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
