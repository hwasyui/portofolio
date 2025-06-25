import React, { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("idle"); 

    useEffect(() => {
        if (status === "success" || status === "error") {
            const timeout = setTimeout(() => setStatus("idle"), 2000);
            return () => clearTimeout(timeout);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
            .sendForm(
                "service_wcnd53j",
                "template_zhyq30r",
                form.current,
                "UnfzHsk4UdmX4s44E"
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <div className="relative">
            <div className="fixed top-4 right-4 z-50 w-[90%] sm:w-auto">
                {status === "success" && (
                    <Alert className="bg-green-100 dark:bg-green-900 border-none shadow-lg">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-300" />
                        <AlertTitle className="text-green-800 dark:text-green-100">
                            Message Sent
                        </AlertTitle>
                        <AlertDescription className="text-green-700 dark:text-green-200">
                            Thanks! I'll get back to you soon.
                        </AlertDescription>
                    </Alert>
                )}

                {status === "error" && (
                    <Alert className="bg-red-100 dark:bg-red-900 border-none shadow-lg" variant="destructive">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-300" />
                        <AlertTitle className="text-red-800 dark:text-red-100">
                            Failed to Send
                        </AlertTitle>
                        <AlertDescription className="text-red-700 dark:text-red-200">
                            Please try again later.
                        </AlertDescription>
                    </Alert>
                )}
            </div>

            <motion.div
                className="max-w-3xl mx-auto px-4 sm:px-6 py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold mb-4 text-center text-zinc-800 dark:text-white">
                    Contact Me
                </h1>
                <p className="text-center text-muted-foreground mb-10">
                    Have a project in mind, want to recruit me, or just want to say hello? Fill out the form below.
                </p>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-white">
                            Name
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-white">
                            Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1 dark:text-white">
                            Subject
                        </label>
                        <Input id="subject" name="subject" placeholder="What is this about?" required />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Write your message here..."
                            required
                        />
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex justify-center"
                    >
                        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" size={16} />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
