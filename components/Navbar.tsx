"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { EASE } from "@/lib/motion";
import { services } from "@/lib/services";
import { products } from "@/lib/products";

type NavItem = {
  label: string;
  href: string;
  menu?: { label: string; href: string; hint?: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    menu: [
      ...products.map((p) => ({ label: p.name, href: "/products", hint: p.tagline })),
      { label: "All products", href: "/products" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    menu: services.map((s) => ({ label: s.title, href: `/services/${s.slug}`, hint: s.value })),
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown

  // Only the home page has the dark hero behind the bar.
  const overlayCapable = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // White frosted over the dark hero; readable light pill once into content / other pages.
  const overlay = overlayCapable && !pastHero;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const shell = overlay
    ? `${scrolled ? "py-2.5" : "py-3"} border-white/15 bg-white/[0.08] text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl ${scrolled ? "bg-white/[0.12] border-white/25" : ""}`
    : scrolled
      ? "my-2 border-border bg-surface/80 py-2.5 shadow-soft backdrop-blur-xl"
      : "my-0 border-transparent py-5";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-content items-center justify-between gap-6 rounded-full border px-[var(--gutter)] transition-all duration-[400ms] ease-signature ${
          overlay ? "my-3" : ""
        } ${shell}`}
      >
        <Logo light={overlay} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.menu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  aria-expanded={openMenu === item.label}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    overlay
                      ? "text-white/80 hover:text-white"
                      : isActive(item.href)
                        ? "text-accent"
                        : "text-text-muted hover:text-heading"
                  }`}
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: openMenu === item.label ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="inline-block"
                  >
                    <Icon name="arrow" size={13} className="rotate-90" />
                  </motion.span>
                </Link>

                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="absolute left-0 top-full w-72 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-soft">
                        {item.menu.map((sub) => (
                          <Link
                            key={sub.label + sub.href}
                            href={sub.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                          >
                            <span className="block text-sm font-semibold text-heading">{sub.label}</span>
                            {sub.hint && (
                              <span className="mt-0.5 block text-xs leading-snug text-text-muted">
                                {sub.hint}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  overlay
                    ? "text-white/80 hover:text-white"
                    : isActive(item.href)
                      ? "text-accent"
                      : "text-text-muted hover:text-heading"
                }`}
              >
                {!overlay && isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          {overlay ? (
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-[400ms] ease-signature hover:-translate-y-0.5 hover:bg-white hover:text-[#0A1633]"
            >
              Get In Touch
            </Link>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-[400ms] ease-signature hover:-translate-y-0.5 hover:shadow-glow"
            >
              Get In Touch
              <Icon name="arrow" size={15} />
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${
            overlay ? "border-white/25 text-white" : "border-border bg-surface text-heading"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-heading/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.nav
              aria-label="Mobile"
              className="absolute inset-x-3 top-3 max-h-[90vh] overflow-y-auto rounded-card border border-border bg-surface p-6 shadow-soft"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border"
                  aria-label="Close menu"
                >
                  <Icon name="close" size={20} />
                </button>
              </div>
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href} className="border-b border-border py-3">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between text-lg font-semibold ${
                        isActive(item.href) ? "text-accent" : "text-heading"
                      }`}
                    >
                      {item.label}
                      <Icon name="arrow" size={18} />
                    </Link>
                    {item.menu && (
                      <ul className="mt-2 flex flex-col gap-1 pl-1">
                        {item.menu.map((sub) => (
                          <li key={sub.label + sub.href}>
                            <Link
                              href={sub.href}
                              className="block py-1.5 text-sm text-text-muted transition-colors hover:text-heading"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                Get In Touch
                <Icon name="arrow" size={15} />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
