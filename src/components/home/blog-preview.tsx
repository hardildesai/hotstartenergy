import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">From Our Blog</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Insights on switchgear technology and home solutions.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {latestPosts.map((post) => {
          const image = PlaceHolderImages.find(p => p.id === post.imageId);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="h-full overflow-hidden transition-all group-hover:shadow-lg">
                {image && (
                   <div className="relative h-56 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={image.imageHint}
                    />
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/blog">
            Read More Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
