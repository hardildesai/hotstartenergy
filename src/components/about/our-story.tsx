import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function OurStory() {
    const image = PlaceHolderImages.find(p => p.id === 'about-story');

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                           Our Story
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                             <p>
                                Founded in 2021 and headquartered in Pune, Hotstart Energy Pvt. Ltd. (HSEPL) is a dynamic electrical engineering and automation company specializing in power distribution, control systems, and industrial automation.
                            </p>
                            <p>
                                Built by seasoned professionals, HSEPL brings a combination of agility and technical expertise to a wide range of electrical infrastructure projects. In 2024, the company expanded operations by establishing a branch in Ahmedabad, Gujarat, to serve industrial clients across western India.
                            </p>
                        </div>
                    </div>
                     {image && (
                         <div className="relative aspect-video rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={image.imageUrl}
                                alt="Pune headquarters"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                     )}
                </div>
            </div>
        </section>
    );
}
