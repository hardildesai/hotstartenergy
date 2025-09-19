import { ProductGrid } from '@/components/products/product-grid';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our comprehensive range of industrial switchgear and smart home solutions.
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
