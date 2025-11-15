import React from "react";
import type { HeroBannerProps } from "../../Interfaces/marketplace";
import HeroImage from 'src/assets/hero-image.png';

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title = "My Cart",
  breadcrumb = [{ label: "Home", href: "/" }, { label: "Marketplace", href: "/marketplace" }, { label: "My Cart" }],
}) => {
  return (
    <header className="w-full">
      <div
        className="relative w-full lg:h-[542px] h-57 md:h-72 bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url(${HeroImage})
          `
        }}
        aria-hidden="true"
      >
        <div className="w-full">
          <h1 className="text-2xl md:text-6xl font-bold leading-160 text-white text-center">{title}</h1>
          <div className="flex justify-center">
            <div className="bg-white  rounded-[24px] px-5 py-[5px] text-center mt-4">
              <nav className="text-[#646464] mt-1 text-xl leading-160">
                {breadcrumb.map((b, i) => (
                  <span key={i}>
                    {b.href ? (
                      <a href={b.href} className="hover:underline">
                        {b.label}
                      </a>
                    ) : (
                      <span>{b.label}</span>
                    )}
                    {i < breadcrumb.length - 1 && <span className="px-2">/</span>}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};