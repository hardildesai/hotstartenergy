"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
    {
        id: "pune",
        name: "Pune (Head Office)",
        address: "Office No. 203, K. Square, K. P. Shroff Rd, Baner, Pune – 411045, Maharashtra, India.",
        phone: "+91-99211-88399",
        email: "hotstartenergy@gmail.com",
        mapUrl: "https://maps.google.com/maps?q=K.+Square,+Baner,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
        id: "ahmedabad",
        name: "Ahmedabad (Branch Office)",
        address: "514, Times Square 1, Thaltej-Shilaj Road, Nr. Ravija Plaza, Opp. Rambaug, Thaltej, Ahmedabad, Gujarat, 380059.",
        phone: "+91-94263 21532",
        email: "sales.ahm.hotstartenergy@gmail.com",
        mapUrl: "https://maps.google.com/maps?q=Times+Square+1,+Thaltej,+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
];

export function OfficeMap() {
    const [activeOffice, setActiveOffice] = useState(offices[0]);

    return (
        <div className="w-full max-w-6xl mx-auto mt-24">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold tracking-tight">Visit Our Locations</h3>
                <p className="text-muted-foreground mt-2">Find us at our headquarters in Pune or our branch in Ahmedabad.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar / Tabs */}
                <div className="w-full lg:w-1/3 space-y-4">
                    <div className="space-y-4">
                        {offices.map((office) => (
                            <Card
                                key={office.id}
                                className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${activeOffice.id === office.id ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border'}`}
                                onClick={() => setActiveOffice(office)}
                            >
                                <h4 className="font-semibold text-lg mb-3">{office.name}</h4>
                                <div className="space-y-3 text-sm text-muted-foreground">
                                    <div className="flex gap-3 items-start">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                                        <p className="leading-relaxed">{office.address}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Phone className="w-4 h-4 shrink-0 text-primary" />
                                        <p>{office.phone}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Mail className="w-4 h-4 shrink-0 text-primary" />
                                        <p>{office.email}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Map Display */}
                <div className="w-full lg:w-2/3">
                    <Card className="h-[400px] lg:h-[500px] w-full overflow-hidden border-0 shadow-lg relative bg-slate-100 rounded-xl">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src={activeOffice.mapUrl}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            title={`${activeOffice.name} Map`}
                        ></iframe>
                    </Card>
                </div>
            </div>
        </div>
    );
}
