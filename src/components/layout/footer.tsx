import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Linkedin, Instagram, Youtube, Facebook, Phone, Mail } from 'lucide-react';


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
             <div className="space-y-4 text-sm">
                <div className="space-y-1">
                    <h4 className="font-semibold flex items-center gap-2">Pune (Head Office)</h4>
                    <p className="text-muted-foreground">
                        Office No. 203, K. Square, K. P. Shroff Rd, Baner, Pune – 411045, Maharashtra, India.
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+91-99211-88399</span>
                    </div>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:hotstartenergy@gmail.com" className="hover:text-primary">hotstartenergy@gmail.com</a>
                    </div>
                </div>
                <div className="space-y-1">
                    <h4 className="font-semibold flex items-center gap-2">Ahmedabad (Branch Office)</h4>
                    <p className="text-muted-foreground">
                        514, Times Square 1, Thaltej-Shilaj Road, Nr. Ravija Plaza, Opp. Rambaug, Thaltej, Ahmedabad, Gujarat, 380059.
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+91-94263 21532</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:sales.ahm.hotstartenergy@gmail.com" className="hover:text-primary">sales.ahm.hotstartenergy@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:bhavesh.hotstartenergy@gmail.com" className="hover:text-primary">bhavesh.hotstartenergy@gmail.com</a>
                    </div>
                </div>
            </div>
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
          </div>

          {/* Column 4: Get in Touch / Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div>
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.148630041248!2d73.7785208759458!3d18.56702606689893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3ae7c2125f%3A0x1999645377a06416!2sK%20Square!5e0!3m2!1sen!2sin!4v1716301130325!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps Location of Pune Office"
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
