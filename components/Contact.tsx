"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

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

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 8000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
        setTimeout(() => {
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">
            Contact
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-2">
            If you&apos;d like to get in touch, you can reach me using the following methods. I am open to freelance projects and collaborations.
          </p>
        </div>
        
        <div
          className="bg-[#151515] rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/30 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div
              className="p-4 rounded-lg bg-[#151515]/90 border border-gray-700/30 transition-all duration-200 hover:border-yellow-100/60"
            >
              <p className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </p>
              <a
                href="mailto:taranpalbrar58@gmail.com"
                className="text-yellow-100/80 hover:text-yellow-100 transition-colors duration-300"
              >
                taranpalbrar58@gmail.com
              </a>
            </div>
            
            <a
              href="https://www.linkedin.com/in/mantaj-s-9448a7271"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-[#151515]/90 backdrop-blur-sm border border-gray-700/30 transition-all duration-200 hover:border-yellow-100/60 flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 text-yellow-100/80 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">LinkedIn</p>
                <p className="text-slate-100 group-hover:text-yellow-100/80 transition-colors duration-300">
                  in/mantaj-s-9448a7271
                </p>
              </div>
            </a>
            
            <a
              href="https://github.com/MantajSingh24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-[#151515]/90 backdrop-blur-sm border border-gray-700/30 transition-all duration-200 hover:border-yellow-100/60 flex items-center gap-3 group"
            >
              <svg className="w-6 h-6 text-yellow-100/80 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">GitHub</p>
                <p className="text-slate-100 group-hover:text-yellow-100/80 transition-colors duration-300">
                  mANtAjsINGH0
                </p>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-slate-800 pt-6 sm:pt-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center">
              {/* Left side - Illustration */}
              <div className="hidden lg:block">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6">
                    Send a quick note
                  </h3>
                  {/* Contact Illustration - animation removed for performance */}
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="relative w-full h-full rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl overflow-hidden bg-[#151515]/95 border border-gray-700/30">
                      <div className="relative z-10 mb-6">
                        <svg className="w-24 h-24 text-yellow-100/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="relative z-10 text-center">
                        <p className="text-slate-100 text-lg font-semibold mb-2">Let&apos;s Connect!</p>
                        <p className="text-gray-400 text-sm">I&apos;m always open to discussing new projects and opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="w-full">
                <p className="text-base sm:text-lg font-semibold text-slate-100 mb-2 text-center md:text-left">
                  Send me a message
                </p>
                <p className="text-xs sm:text-sm text-center md:text-left text-gray-400 mb-4">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-900 text-slate-100 focus:outline-none focus:border-yellow-100/60 focus:ring-2 focus:ring-yellow-100/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-900 text-slate-100 focus:outline-none focus:border-yellow-100/60 focus:ring-2 focus:ring-yellow-100/20 transition-all duration-200"
                    placeholder="name@email.com"
                  />
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-100/20 focus:border-yellow-100/60 transition-all duration-200 resize-y"
                    placeholder="Tell me about your project, opportunity, or just drop a friendly message..."
                  />
                  {submitStatus === "success" && (
                    <div
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg transition-all duration-150"
                    >
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-700 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                        <div>
                          <p className="text-green-700 dark:text-green-400 font-medium">
                            {statusMessage}
                          </p>
                          <p className="text-green-600 dark:text-green-500 text-sm mt-1">
                            Please check your inbox and click the verification link to complete your submission.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div
                      className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg transition-all duration-150"
                    >
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-700 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-700 dark:text-red-400 font-medium">
                          {statusMessage}
                        </p>
                      </div>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-yellow-100/80 hover:bg-yellow-100 text-gray-900 rounded-lg font-medium transition-all duration-150 border-2 border-yellow-100/60 hover:border-yellow-100 shadow-lg hover:shadow-xl flex justify-center"
                    style={{ willChange: "transform" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Email"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
