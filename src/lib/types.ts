export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: 'Switchgear' | 'Home Solution';
  specifications: Record<string, string>;
  imageId: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  date: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  imageId: string;
}
