
'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { GradientButton } from './gradient-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

gsap.registerPlugin(SplitText);

interface SectionData {
  text: string;
  description: string;
  img: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
}

interface AnimatedSectionsProps {
  sections?: SectionData[];
  className?: string;
}

const defaultSections: SectionData[] = [
    {
      text: 'Powering the Future with Precision and Control',
      description: 'Trust Hotstart Energy to energize industry with reliability, technical expertise, and world-class brand partners.',
      img: PlaceHolderImages.find(p => p.id === 'hero-1')?.imageUrl || '',
      primaryAction: { text: 'Contact Us Now', href: '/contact' },
      secondaryAction: { text: 'View Products', href: '/products' },
    },
    {
      text: 'Your Partner in Electrical & Automation Solutions',
      description: 'We deliver end-to-end solutions, from switchgear and busbars to advanced industrial automation, powered by global leaders like Legrand and Socomec.',
      img: PlaceHolderImages.find(p => p.id === 'hero-2')?.imageUrl || '',
      primaryAction: { text: 'Explore Our Solutions', href: '/products' },
      secondaryAction: { text: 'About Our Company', href: '/about' },
    },
    {
      text: 'Reliable Cables for Every Application',
      description: 'As authorized dealers for KEI Cables, we provide high-performance wiring solutions that form the backbone of India’s most demanding projects.',
      img: PlaceHolderImages.find(p => p.id === 'hero-3')?.imageUrl || '',
      primaryAction: { text: 'Discover KEI Cables', href: '/brands/kei-cables' },
      secondaryAction: { text: 'Request a Quote', href: '/quote' },
    },
    {
      text: 'Innovative & Aesthetically Pleasing Designs',
      description: 'Experience the best of Legrand\'s innovative and beautifully engineered products. Visit our experience center to find the perfect fit for your project.',
      img: PlaceHolderImages.find(p => p.id === 'hero-4')?.imageUrl || '',
      primaryAction: { text: 'Visit Our Experience Center', href: '/contact' },
      secondaryAction: { text: 'See Legrand Products', href: '/brands/legrand' },
    },
  ];

const AnimatedSections: React.FC<AnimatedSectionsProps> = ({
  sections = defaultSections,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitHeadingsRef = useRef<SplitText[]>([]);
  const splitDescriptionsRef = useRef<SplitText[]>([]);
  const currentIndexRef = useRef<number>(-1);
  const animatingRef = useRef<boolean>(false);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  const imagesRefs = useRef<HTMLDivElement[]>([]);
  const outerRefs = useRef<HTMLDivElement[]>([]);
  const innerRefs = useRef<HTMLDivElement[]>([]);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);
  const descriptionRefs = useRef<HTMLParagraphElement[]>([]);
  const buttonsRefs = useRef<HTMLDivElement[]>([]);
  const counterCurrentRef = useRef<HTMLSpanElement | null>(null);
  const counterNextRef = useRef<HTMLSpanElement | null>(null);
  const counterCurrentSplitRef = useRef<SplitText | null>(null);
  const counterNextSplitRef = useRef<SplitText | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let loaded = 0;
    sections.forEach((section) => {
      if (!section.img) {
          loaded++;
          if (loaded === sections.length) {
            setImagesLoaded(true);
          }
          return;
      }
      const img = new Image();
      img.src = section.img;
      img.onload = () => {
        loaded++;
        if (loaded === sections.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === sections.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [sections]);

  const gotoSection = useCallback((index: number, direction: number) => {
    if (!containerRef.current || animatingRef.current) return;

    const sectionsElements = sectionsRefs.current;
    const images = imagesRefs.current;
    const outerWrappers = outerRefs.current;
    const innerWrappers = innerRefs.current;
    const buttons = buttonsRefs.current;

    const wrap = gsap.utils.wrap(0, sectionsElements.length);
    index = wrap(index);
    animatingRef.current = true;

    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => {
        animatingRef.current = false;
      }
    });

    timelineRef.current = tl;

    if (currentIndexRef.current >= 0) {
      const prevIndex = currentIndexRef.current;
      gsap.set(sectionsElements[prevIndex], { zIndex: 0 });
      tl.to(images[prevIndex], { xPercent: -15 * dFactor })
        .set(sectionsElements[prevIndex], { autoAlpha: 0 });
    }

    gsap.set(sectionsElements[index], { autoAlpha: 1, zIndex: 1 });

    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        xPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor)
      },
      { xPercent: 0 },
      0
    )
      .fromTo(
        images[index],
        { xPercent: 15 * dFactor },
        { xPercent: 0 },
        0
      );

    const animateText = (splitRef: React.MutableRefObject<SplitText[]>, stagger: number) => {
        if (splitRef.current[index] && splitRef.current[index].lines) {
            const lines = splitRef.current[index].lines;
            gsap.set(lines, { opacity: 0, yPercent: 100 });
            tl.to(
                lines,
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: { each: stagger, from: 'start' }
                },
                0.4
            );
        }
    };
    
    animateText(splitHeadingsRef, 0.1);
    animateText(splitDescriptionsRef, 0.05);

    if (buttons[index]) {
        gsap.set(buttons[index], { opacity: 0, y: 20 });
        tl.to(buttons[index], { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.8);
    }


    if (counterCurrentRef.current && counterNextRef.current) {
      if (!counterCurrentSplitRef.current) {
        counterCurrentSplitRef.current = new SplitText(counterCurrentRef.current, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        });
      }

      counterNextRef.current.textContent = String(index + 1);
      gsap.set(counterNextRef.current, { opacity: 1 });

      if (counterNextSplitRef.current) {
        counterNextSplitRef.current.revert();
        counterNextSplitRef.current = null;
      }
      counterNextSplitRef.current = new SplitText(counterNextRef.current, {
        type: 'lines',
        linesClass: 'line',
        mask: 'lines'
      });

      const currentLines = counterCurrentSplitRef.current?.lines || [];
      const nextLines = counterNextSplitRef.current?.lines || [];

      gsap.set(currentLines, { opacity: 1, yPercent: 0 });
      gsap.set(nextLines, { opacity: 1, yPercent: 100 * dFactor });

      tl.to(
        currentLines,
        {
          yPercent: -100 * dFactor,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'start' }
        },
        0.4
      );
      tl.to(
        nextLines,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: { each: 0.1, from: 'start' }
        },
        0.4
      ).add(() => {
        if (counterCurrentSplitRef.current) {
          counterCurrentSplitRef.current.revert();
          counterCurrentSplitRef.current = null;
        }
        if (counterNextSplitRef.current) {
          counterNextSplitRef.current.revert();
          counterNextSplitRef.current = null;
        }
        if (counterCurrentRef.current && counterNextRef.current) {
          counterCurrentRef.current.textContent = counterNextRef.current.textContent;
        }
        gsap.set(counterNextRef.current, { opacity: 0, clearProps: 'all' });
      });
    }

    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !imagesLoaded) return;

    gsap.registerPlugin(SplitText);

    const headings = headingRefs.current;
    const descriptions = descriptionRefs.current;
    const outerWrappers = outerRefs.current;
    const innerWrappers = innerRefs.current;

    splitHeadingsRef.current = headings.map(
      (heading) =>
        new SplitText(heading, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        })
    );
    splitDescriptionsRef.current = descriptions.map(
      (desc) =>
        new SplitText(desc, {
          type: 'lines',
          linesClass: 'line',
          mask: 'lines'
        })
    );

    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });

    gotoSection(0, 1);
    
    const interval = setInterval(() => {
        if (!animatingRef.current) {
          gotoSection(currentIndexRef.current + 1, 1);
        }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      splitHeadingsRef.current.forEach((split) => {
        if (split && typeof split.revert === 'function') {
          split.revert();
        }
      });
      splitDescriptionsRef.current.forEach((split) => {
        if (split && typeof split.revert === 'function') {
          split.revert();
        }
      });
      splitHeadingsRef.current = [];
      splitDescriptionsRef.current = [];
      if (counterCurrentSplitRef.current && typeof counterCurrentSplitRef.current.revert === 'function') {
        counterCurrentSplitRef.current.revert();
        counterCurrentSplitRef.current = null;
      }
      if (counterNextSplitRef.current && typeof counterNextSplitRef.current.revert === 'function') {
        counterNextSplitRef.current.revert();
        counterNextSplitRef.current = null;
      }
    };
  }, { scope: containerRef, dependencies: [sections.length, imagesLoaded, gotoSection] });

  return (
    <div 
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden bg-black text-white font-sans ${className}`}
    >
      <div className="absolute bottom-4 right-6 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {sections.map((section, i) => (
            <div
              key={`thumb-${i}`}
              className="w-12 h-8 rounded overflow-hidden relative cursor-pointer transition-transform duration-300"
              onClick={() => {
                if (currentIndex !== i && !animatingRef.current) {
                  const direction = i > currentIndex ? 1 : -1;
                  gotoSection(i, direction);
                }
              }}
            >
              <img
                src={section.img}
                alt={`Section ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                 className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
                   currentIndex !== i ? 'opacity-50' : 'opacity-0'
                 }`} 
               />
            </div>
          ))}
        </div>
        
        <div className="text-xs md:text-sm tracking-wider flex items-center gap-1">
          <div className="relative overflow-hidden h-[1em] leading-[1em] min-w-[0.8em]">
            <span ref={counterCurrentRef} className="block">1</span>
            <span ref={counterNextRef} className="block absolute left-0 top-0 opacity-0">2</span>
          </div>
          <span className="opacity-70">/ {sections.length}</span>
        </div>
      </div>

      {sections.map((section, i) => (
        <section 
          key={`section-${i}`} 
          className="absolute top-0 h-full w-full invisible"
          ref={(el) => { if (el) sectionsRefs.current[i] = el; }}
        >
          <div className="outer w-full h-full overflow-hidden" ref={(el) => { if (el) outerRefs.current[i] = el; }}>
            <div className="inner w-full h-full overflow-hidden" ref={(el) => { if (el) innerRefs.current[i] = el; }}>
              <div
                className="bg flex items-center justify-center absolute top-0 h-full w-full bg-cover bg-center"
                ref={(el) => { if (el) imagesRefs.current[i] = el; }}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url("${section.img}")`
                }}
              >
                <div className="z-10 text-center max-w-3xl px-4 normal-case">
                    <h2 className="section-heading text-white font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight" ref={(el) => { if (el) headingRefs.current[i] = el; }}>
                        {section.text}
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-white/80" ref={(el) => { if (el) descriptionRefs.current[i] = el; }}>
                        {section.description}
                    </p>
                    <div 
                        className="mt-8 flex flex-wrap justify-center gap-4"
                        ref={(el) => { if (el) buttonsRefs.current[i] = el; }}
                    >
                        <GradientButton asChild>
                            <Link href={section.primaryAction.href}>{section.primaryAction.text}</Link>
                        </GradientButton>
                        <GradientButton asChild variant="variant">
                            <Link href={section.secondaryAction.href}>{section.secondaryAction.text}</Link>
                        </GradientButton>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;
