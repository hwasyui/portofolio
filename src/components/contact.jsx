import React, { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
  User,
  MessageSquareText,
  Pencil,
} from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="relative px-4 sm:px-6 py-16 text-zinc-800 dark:text-white">
      {/* Toast Alerts */}
      <div className="fixed top-4 right-4 z-50 w-[90%] sm:w-auto">
        {status === "success" && (
          <Alert className="bg-green-100 dark:bg-green-900 border-none shadow-lg">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-300" />
            <AlertTitle className="text-green-800 dark:text-green-100">
              Message Sent
            </AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-200">
              Thanks! I’ll get back to you soon.
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

      {/* Contact Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10"
      >
        {/* Left Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Want to build something together? Reach out!
          </h1>
          <p className="text-muted-foreground">
            Drop your details — I'll be in touch shortly.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-zinc-500" size={18} />
              <div>
                <h3 className="font-semibold mb-1">Address:</h3>
                <p>Medan Satria, Kota Bekasi, Jawa Barat, Indonesia.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-zinc-500" size={18} />
              <div>
                <h3 className="font-semibold mb-1">Phone:</h3>
                <p>
                  <a
                    href="https://wa.me/628999225882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 899-9225-882 (WhatsApp/Cellular Personal)
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/6285283043970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +62 852-8304-3970 (WhatsApp/Cellular Business Only)
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-zinc-500" size={18} />
              <div>
                <h3 className="font-semibold mb-1">Email:</h3>
                <p>angelicasutiwhiharto@gmail.com</p>
                <p>angelica.whiharto@student.president.ac.id</p>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 border-black border-solid border-1 dark:bg-zinc-900 p-6 rounded-2xl space-y-4 shadow-md"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-semibold block mb-1">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <Input
                name="name"
                placeholder="e.g. John Doe"
                className="pl-8 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold block mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <Input
                name="email"
                type="email"
                placeholder="e.g. johndoe@gmail.com"
                className="pl-8 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-semibold block mb-1">
              Subject
            </label>
            <div className="relative">
              <Pencil className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <Input
                name="subject"
                placeholder="e.g. Collaboration Inquiry"
                className="pl-8 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold block mb-1">
              Message
            </label>
            <div className="relative">
              <MessageSquareText className="absolute left-3 top-3 text-zinc-400" size={16} />
              <Textarea
                name="message"
                placeholder="Write your message..."
                className="pl-8 pt-2 h-[150px] overflow-auto resize-none placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 whitespace-pre-wrap break-all"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-black dark:bg-white text-white dark:text-black transition-transform duration-200 hover:scale-105 font-semibold"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin mr-2" size={16} />
                Sending...
              </>
            ) : (
              "SEND"
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
