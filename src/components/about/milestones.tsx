import { Timeline } from "@/components/ui/timeline";

const milestonesData = [
    { year: 2021, milestone: "Company incorporated in Mumbai, Maharashtra as a private limited firm." },
    { year: 2022, milestone: "Established head office in Pune and initiated strategic partnerships with global electrical equipment leaders." },
    { year: 2023, milestone: "Expanded service portfolio to include automation integration, energy management, and electrical design solutions." },
    { year: 2024, milestone: "Opened a regional branch in Ahmedabad to support large-scale industrial and commercial projects." },
    { year: 2025, milestone: "Achieved over 100% year-on-year growth in project value and revenue; recognized as a trusted solutions partner." },
];

const timelineEntries = milestonesData.map(item => ({
    title: item.year.toString(),
    content: (
        <div className="bg-card p-6 rounded-lg shadow-md border max-w-sm">
            <p className="text-muted-foreground">{item.milestone}</p>
        </div>
    )
}));

export function Milestones() {
    return (
        <Timeline 
            data={timelineEntries}
            heading="Our Milestones"
            subheading="A timeline of our growth and achievements."
        />
    );
}
