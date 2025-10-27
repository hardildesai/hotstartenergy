import { Separator } from '@/components/ui/separator';
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const services = [
    'Improve usability of your product',
    'Engage users at a higher level and outperform your competition',
    'Reduce the onboarding time and improve sales',
    'Balance user needs with your business goal',
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We'd love to hear from you. Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-lg font-semibold text-foreground">Direct Contact</h3>
                    <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-accent" />
                        <a href="mailto:hotstartenergy@gmail.com" className="hover:text-primary">hotstartenergy@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>+91 99211-88399</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Our Office</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-accent"/> Pune (Head Office)
                            </h4>
                            <p className="text-muted-foreground pl-7">
                                Office No. 203, K. Square, K. P. Shroff Rd, Baner,<br />
                                Pune – 411045, Maharashtra, India
                            </p>
                        </div>
                         <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-accent"/> Ahmedabad (Branch Office)
                            </h4>
                            <p className="text-muted-foreground pl-7">
                                Times Square 1, Thaltej-Shilaj Road, <br />
                                Ahmedabad - 380059, Gujarat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Separator className="my-8" />

            <div>
                <h3 className="text-lg font-semibold mb-4 text-center text-foreground">With our services you can</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
