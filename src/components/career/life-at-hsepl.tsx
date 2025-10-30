import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const galleryImages = [
    'career-gallery-1',
    'career-gallery-2'
];

export function LifeAtHsepl() {

    const images = PlaceHolderImages.filter(p => galleryImages.includes(p.id));

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">A Workplace That Works With You</h3>
            <p className="text-muted-foreground leading-relaxed">
                Our workplace culture emphasizes trust, teamwork, and technical excellence. From our Pune headquarters to our growing branch in Ahmedabad, we nurture a culture of continuous learning and operational excellence.
            </p>
             <div className="grid grid-cols-2 gap-4">
                {images.map(image => (
                    <Card key={image.id} className="overflow-hidden">
                        <div className="relative aspect-video w-full">
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            data-ai-hint={image.imageHint}
                        />
                        </div>
                    </Card>
                ))}
            </div>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                “Every project is a chance to innovate — and every person is part of that success story.”
            </blockquote>
        </div>
    );
}
