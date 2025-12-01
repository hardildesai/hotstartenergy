"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your Name"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                        <p className="text-xs text-red-500">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                        <p className="text-xs text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>
                    <Input
                        id="subject"
                        placeholder="Inquiry about..."
                        {...register("subject")}
                        className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                        <p className="text-xs text-red-500">{errors.subject.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                        <p className="text-xs text-red-500">{errors.message.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
