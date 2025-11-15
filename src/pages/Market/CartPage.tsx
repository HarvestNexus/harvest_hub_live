import React from "react";
import { HeroBanner } from "../../components/marketplace/HeroBanner";
import { CartSection } from "../../components/marketplace/CartSection";
import type { BreadcrumbItem } from "../../Interfaces/marketplace";
import type { CartItem } from "../../Interfaces/cart.interface";
import Navbar from "../../components/Navbar";
import Footer from "../General-landing-page/Footer";

export interface CartPageProps {
  breadcrumb?: BreadcrumbItem[];
  initialItems?: CartItem[];
  bannerUrl?: string;
}

const CartPage: React.FC<CartPageProps> = ({ breadcrumb, initialItems, bannerUrl }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white py-0 sm:py-6 ">
        <Navbar />
      </div>
      <HeroBanner breadcrumb={breadcrumb} bannerUrl={bannerUrl} />
      <CartSection initialItems={initialItems} />
      <Footer/>
    </div>
  );
};

export default CartPage;
