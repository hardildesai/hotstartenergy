import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Linkedin, Instagram, Youtube, Facebook, Phone } from 'lucide-react';


export function Footer() {
  return (
    <footer className="footer-container border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Delivering reliable power distribution, automation & energy-management solutions.
            </p>
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold">Registered office:</h4>
              <p className="text-muted-foreground">
                Hotstart Energy Pvt. Ltd. <br />
                A-501, XYZ Industrial Park, <br />
                Ahmedabad – 3800xx, Gujarat, India
              </p>
              <h4 className="font-semibold mt-2">Branch office:</h4>
               <p className="text-muted-foreground">
                123, ABC Tower, <br />
                Pune – 4110xx, Maharashtra, India
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Phone:</span> +91 9876543210
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Email:</span> info@hotstartenergy.com
            </p>
            <Button asChild>
              <Link href="/contact"><Phone className="mr-2 h-4 w-4" /> Request Quote / Contact Sales</Link>
            </Button>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/career" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=switchgear" className="text-muted-foreground hover:text-primary">Switchgear & Panels</Link></li>
              <li><Link href="/products?category=busbar" className="text-muted-foreground hover:text-primary">Busbar Trunking Systems</Link></li>
              <li><Link href="/products?category=cables" className="text-muted-foreground hover:text-primary">Cables & Wires</Link></li>
              <li><Link href="/products?category=meters" className="text-muted-foreground hover:text-primary">Energy Meters & Monitoring</Link></li>
              <li><Link href="/products?category=lighting" className="text-muted-foreground hover:text-primary">Lighting & Accessories</Link></li>
              <li><Link href="/products?category=automation" className="text-muted-foreground hover:text-primary">Automation & Drives</Link></li>
            </ul>
            <div className="pt-4">
                <Button variant="outline" asChild>
                    <Link href="/company-profile.pdf" target="_blank">Download Company Profile (PDF)</Link>
                </Button>
            </div>
          </div>

          {/* Column 4: Get in Touch / Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div>
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939234871928!2d72.5836263154238!3d23.02603468495147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d9b%3A0x43f9a7238644837!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1626356983633!5m2!1sen!2sus"
                    width="100%"
                    height="150"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps Location of Ahmedabad Office"
                ></iframe>
            </div>
             <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
            </div>
          </div>
        </div>

        <div className="lower-footer mt-12 pt-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hotstart Energy Pvt. Ltd. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-primary">Terms of Use</Link>
                <Link href="/sitemap" className="hover:text-primary">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
