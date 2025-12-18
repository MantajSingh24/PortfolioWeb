"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

function VerificationContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const statusConfig = {
    success: {
      icon: "✓",
      iconColor: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      title: "Email Verified Successfully!",
      message: "Your message has been sent to Mantaj. You should receive a response soon.",
      showContactLink: false,
    },
    invalid: {
      icon: "✕",
      iconColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      title: "Invalid Verification Link",
      message: "This verification link is invalid or has already been used. Please submit a new contact request.",
      showContactLink: true,
    },
    expired: {
      icon: "⏱",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      title: "Verification Link Expired",
      message: "This verification link has expired. Verification links are valid for 15 minutes. Please submit a new contact request.",
      showContactLink: true,
    },
    already: {
      icon: "ℹ",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      title: "Already Verified",
      message: "This email has already been verified and your message has been sent to Mantaj.",
      showContactLink: false,
    },
    error: {
      icon: "!",
      iconColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      title: "Verification Error",
      message: "An error occurred while verifying your email. Please try again or contact support.",
      showContactLink: true,
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.error;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className={`${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-8 md:p-12 shadow-xl`}>
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${config.bgColor} ${config.iconColor} text-4xl font-bold mb-4 border-2 ${config.borderColor}`}
            >
              {config.icon}
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              {config.title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {config.message}
            </p>
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">What happens next?</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Your verified message has been delivered to Mantaj</li>
                    <li>• You'll receive a response at the email you provided</li>
                    <li>• Typical response time is within 24-48 hours</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {(status === "expired" || status === "invalid") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Need help?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You can also reach out directly at{" "}
                    <a href="mailto:taranpalbrar58@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                      taranpalbrar58@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </motion.button>
            </Link>
            
            {config.showContactLink && (
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-slate-900 dark:text-slate-100 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700"
                >
                  Try Again
                </motion.button>
              </Link>
            )}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <p>Have questions? Visit the <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact page</Link></p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Verifying...</p>
        </div>
      </div>
    }>
      <VerificationContent />
    </Suspense>
  );
}

