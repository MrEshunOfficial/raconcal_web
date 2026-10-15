import React from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, site } from "@/lib/content";

export default function FooterSection() {
  const contacts = [
    ...site.phones.map((phone) => ({ icon: Phone, label: phone, href: `tel:${phone.replace(/\s/g, "")}` })),
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: site.location, href: undefined },
    { icon: Send, label: site.postal, href: undefined },
  ];

  return (
    <footer id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 rounded-3xl bg-secondary p-6 sm:gap-12 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Have a space that needs finishing?
            </h2>
            <p className="max-w-md text-muted-foreground">
              Send us photos or drawings of your room and we&apos;ll come back
              with ideas and a quote.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "h-11 px-5" })}>
                <MessageCircle data-icon="inline-start" /> Chat on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className={buttonVariants({ variant: "outline", size: "lg", className: "h-11 px-5" })}>
                Email us
              </a>
            </div>
          </div>
          <ul className="flex flex-col justify-center gap-4">
            {contacts.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background">
                  <Icon className="size-4" />
                </span>
                {href ? (
                  <a href={href} className="truncate hover:underline">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.slogan}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
