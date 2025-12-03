'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { productCategories } from '@/lib/data';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

export default function ProductManagerPage() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        brand: '',
        category: '',
        description: '',
        imageId: 'prod-circuit-breaker',
        specifications: {} as Record<string, string>
    });

    const [specKey, setSpecKey] = useState('');
    const [specValue, setSpecValue] = useState('');

    const handleAddSpec = () => {
        if (specKey && specValue) {
            setFormData(prev => ({
                ...prev,
                specifications: { ...prev.specifications, [specKey]: specValue }
            }));
            setSpecKey('');
            setSpecValue('');
        }
    };

    const generateJSON = () => {
        const json = JSON.stringify(formData, null, 2);
        navigator.clipboard.writeText(json + ',');
        toast.success('Product JSON copied to clipboard! Paste it into src/lib/data.ts');
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Product Manager</h1>
                <p className="text-muted-foreground">Generate code for new products.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>New Product Details</CardTitle>
                        <CardDescription>Fill in the details to generate the product entry.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Product ID (Unique)</Label>
                            <Input
                                placeholder="e.g., legrand-mcb-rx3"
                                value={formData.id}
                                onChange={e => setFormData({ ...formData, id: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Name</Label>
                            <Input
                                placeholder="Product Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Brand</Label>
                            <Input
                                placeholder="Brand Name"
                                value={formData.brand}
                                onChange={e => setFormData({ ...formData, brand: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select onValueChange={val => setFormData({ ...formData, category: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {productCategories.map(cat => (
                                        <SelectItem key={cat.id} value={cat.title}>{cat.title}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                placeholder="Short description..."
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="pt-4 border-t">
                            <Label>Specifications</Label>
                            <div className="flex gap-2 mt-2">
                                <Input placeholder="Key (e.g. Voltage)" value={specKey} onChange={e => setSpecKey(e.target.value)} />
                                <Input placeholder="Value (e.g. 240V)" value={specValue} onChange={e => setSpecValue(e.target.value)} />
                                <Button type="button" onClick={handleAddSpec} variant="secondary">Add</Button>
                            </div>
                            <div className="mt-2 space-y-1">
                                {Object.entries(formData.specifications).map(([k, v]) => (
                                    <div key={k} className="text-sm bg-slate-100 px-2 py-1 rounded flex justify-between">
                                        <span>{k}: {v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Generated JSON</CardTitle>
                        <CardDescription>Copy this and paste it into `src/lib/data.ts` inside the `products` array.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-xs font-mono min-h-[300px]">
                            {JSON.stringify(formData, null, 2)},
                        </pre>
                        <Button onClick={generateJSON} className="w-full mt-4">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy to Clipboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
