import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === post.imageId);

  return (
    <article className="container max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <p className="text-muted-foreground mb-2">
            Published on {format(new Date(post.date), 'MMMM d, yyyy')}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
      </header>

      {image && (
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden my-8">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/80">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
