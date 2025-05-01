import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    title: "How to Create a Memorable Brand Identity",
    excerpt: "Learn the key elements...",
    imageUrl: "/images/blog1.jpg",
    date: "May 15, 2023",
    category: "Design",
    slug: "brand-identity",
  },
  {
    id: "2",
    title: "Social Media Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve...",
    imageUrl: "/images/blog2.jpg",
    date: "June 2, 2023",
    category: "Social Media",
    slug: "social-media-trends-2023",
  },
  {
    id: "3",
    title: "The Art of Product Photography",
    excerpt: "Discover professional techniques...",
    imageUrl: "/images/blog3.jpg",
    date: "June 18, 2023",
    category: "Photography",
    slug: "product-photography",
  },
  {
    id: "4",
    title: "Effective Email Marketing Campaigns",
    excerpt: "Learn how to create email campaigns...",
    imageUrl: "/images/blog4.jpg",
    date: "July 5, 2023",
    category: "Marketing",
    slug: "email-marketing-campaigns",
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post: post || null,
    },
  };
};

export default function BlogPostPage({ post }: { post: BlogPost }) {
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
      </Head>
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.category}
        </p>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1000}
          height={600}
          className="rounded-lg mb-8 object-cover"
        />
        <p className="text-lg text-gray-700">{post.excerpt}</p>
      </section>
    </>
  );
}
