
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: 'Switchgear' | 'Home Solution';
  specifications: Record<string, string>;
  imageId: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  imageId: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  short_description: string;
  productCount: number;
  categories: string[];
}

export interface JobOpening {
    id: string;
    title: string;
    location: string;
    shortDescription: string;
    roleDescription: string;
    responsibilities: string[];
    qualifications: string[];
}
