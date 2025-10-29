import { jobOpenings } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button";
import Link from "next/link";
import { Briefcase, MapPin, Send } from "lucide-react";
import { GlowingButton } from "../ui/glowing-button";


export function JobOpenings() {
    if (!jobOpenings || jobOpenings.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <p>There are no open positions at this time. Please check back later.</p>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {jobOpenings.map((job) => (
                    <AccordionItem key={job.id} value={job.id} className="bg-card border rounded-lg px-6">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                           <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4">
                             <div className="text-left">
                                <h3 className="text-xl font-bold">{job.title}</h3>
                                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                    <MapPin className="h-4 w-4" /> {job.location}
                                </p>
                             </div>
                             <p className="text-sm text-muted-foreground text-left md:text-right mt-2 md:mt-0">{job.shortDescription}</p>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-6">
                            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/80 space-y-4">
                                <div>
                                    <h4 className="font-semibold">Role Description:</h4>
                                    <p>{job.roleDescription}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Responsibilities:</h4>
                                    <ul className="list-disc pl-5">
                                        {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                                    </ul>
                                </div>
                                 <div>
                                    <h4 className="font-semibold">Qualifications:</h4>
                                    <ul className="list-disc pl-5">
                                        {job.qualifications.map((qual, i) => <li key={i}>{qual}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6">
                              <Link href={`mailto:careers@hotstartenergy.com?subject=Application for ${job.title}`}>
                                <GlowingButton icon={<Send />} title="Apply Now" size="md" />
                              </Link>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="text-center mt-12">
                 <GlowingButton icon={<Briefcase/>} title="See More Roles" size="md" />
            </div>
        </div>
    )
}
