import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
    { title: "Commitment to Quality", icon: CheckCircle, description: "We deliver solutions that meet the highest standards of reliability and performance." },
    { title: "Technological Excellence", icon: Lightbulb, description: "We leverage cutting-edge technology to drive efficiency and innovation." },
    { title: "Customer-Centric Innovation", icon: Heart, description: "Our customers are at the heart of our solutions and services." },
    { title: "Professional Integrity", icon: Shield, description: "We operate with transparency, honesty, and a strong ethical compass." }
];

export function OurValues() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Mission and Vision</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Our goal is to be the most preferred solution partner for customers and vendors by consistently delivering high-quality, reliable, and intelligent power solutions, transforming how industries consume and manage energy.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                    <value.icon className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle className="mt-4">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
