"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:taranpalbrar58@gmail.com?subject=${subject}&body=${body}`;
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:taranpalbrar58@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            If you'd like to get in touch, you can reach me using the following methods. I am open to freelance projects and collaborations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="surface-panel rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg surface-panel transition-all duration-300 hover:border-[var(--accent-strong)]"
            >
              <p className="text-sm font-medium text-[var(--text-muted)] mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </p>
              <a
                href="mailto:taranpalbrar58@gmail.com"
                className="text-[var(--accent)] hover:text-[var(--accent-strong)] transition-colors duration-300"
              >
                taranpalbrar58@gmail.com
              </a>
            </motion.div>
            
            <motion.a
              href="https://www.linkedin.com/in/mantaj-s-9448a7271"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg surface-panel transition-all duration-300 hover:border-[var(--accent-strong)] flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--text-muted)] mb-1">LinkedIn</p>
                <p className="text-[var(--foreground)] group-hover:text-[var(--accent-strong)] transition-colors duration-300">
                  in/mantaj-s-9448a7271
                </p>
              </div>
            </motion.a>
            
            <motion.a
              href="https://github.com/MantajSingh24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg surface-panel transition-all duration-300 hover:border-[var(--accent-strong)] flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 text-[var(--accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--text-muted)] mb-1">GitHub</p>
                <p className="text-[var(--foreground)] group-hover:text-[var(--accent-strong)] transition-colors duration-300">
                  mANtAjsINGH0
                </p>
              </div>
            </motion.a>
          </div>

          <div className="border-t-2 border-gray-200 dark:border-slate-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden md:block"
              >
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    Send a quick note
                  </h3>
                  {/* Contact Illustration */}
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div
                      className="relative w-full h-full rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #191D23 0%, #57707A 45%, #7B919C 100%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative z-10 mb-6"
                      >
                        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                      <div className="relative z-10 text-center">
                        <p className="text-white text-lg font-semibold mb-2">Let's Connect!</p>
                        <p className="text-white/90 text-sm">I'm always open to discussing new projects and opportunities</p>
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-lg font-semibold text-[var(--foreground)] mb-2 text-center md:text-left">
                  Send me a message
                </p>
                <p className="text-xs text-center md:text-left text-[var(--text-muted)] mb-4">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all duration-300"
                    placeholder="Your name"
                  />
                  <motion.input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all duration-300"
                    placeholder="name@email.com"
                  />
                  <motion.textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-300 resize-y"
                    placeholder="Tell me about your project, opportunity, or just drop a friendly message..."
                  />
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <p className="text-green-700 dark:text-green-400 font-medium text-center">
                        Just got your message, will get in touch soon!
                      </p>
                    </motion.div>
                  )}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-6 py-3 accent-btn rounded-lg font-medium transition-all duration-300 border-2 shadow-lg hover:shadow-xl flex justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Send Email"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
