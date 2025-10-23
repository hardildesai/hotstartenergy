import { ContactForm } from '@/components/contact/contact-form';
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch with us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Fill out the form below or schedule a meeting with us at your convenience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
            <ContactForm />
             <div>
                <h3 className="text-lg font-semibold mb-4">You can also Contact Us via</h3>
                 <div className="space-y-4 text-muted-foreground">
                     <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-accent" />
                        <a href="mailto:info@hotstartenergy.com" className="hover:text-primary">info@hotstartenergy.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>+91 9876543210</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10 rounded-lg p-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">With our services you can</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Separator />

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent"/> India (Head Office)
              </h3>
              <p className="text-muted-foreground">
                Hotstart Energy Pvt. Ltd. <br />
                A-501, XYZ Industrial Park, <br />
                Ahmedabad – 3800xx, Gujarat
              </p>
            </div>
             <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent"/> India (Branch Office)
              </h3>
              <p className="text-muted-foreground">
                123, ABC Tower, <br />
                Pune – 4110xx, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
