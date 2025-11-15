export interface BreadcrumbItem { 
    label: string; 
    href?: string 
};

export interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  bannerUrl?: string;
  breadcrumb?: BreadcrumbItem[];
}