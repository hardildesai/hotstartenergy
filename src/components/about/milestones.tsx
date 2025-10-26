import { CheckCircle } from "lucide-react";

const milestones = [
    { year: 2021, milestone: "Company incorporated in Mumbai, Maharashtra as a private limited firm." },
    { year: 2022, milestone: "Established head office in Pune and initiated strategic partnerships with global electrical equipment leaders." },
    { year: 2023, milestone: "Expanded service portfolio to include automation integration, energy management, and electrical design solutions." },
    { year: 2024, milestone: "Opened a regional branch in Ahmedabad to support large-scale industrial and commercial projects." },
    { year: 2025, milestone: "Achieved over 100% year-on-year growth in project value and revenue; recognized as a trusted solutions partner." },
];

export function Milestones() {
    return (
        <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-900/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Milestones</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        A timeline of our growth and achievements.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className="relative flex items-center group">
                                <div className={`flex items-center w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'pl-8'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
                                    )}
                                    <div className="bg-card p-6 rounded-lg shadow-md border max-w-sm">
                                        <p className="text-muted-foreground">{item.milestone}</p>
                                    </div>
                                </div>
                                <div className={`flex items-center w-1/2 ${index % 2 === 0 ? 'pl-8' : 'justify-end pr-8'}`}>
                                    <p className="text-2xl font-bold text-accent">{item.year}</p>
                                </div>
                                 {index % 2 === 0 && (
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transition-transform group-hover:scale-125"></div>
                                 )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
