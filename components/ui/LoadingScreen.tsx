"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-base flex items-center justify-center"
        >
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0.5 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display text-sm text-gold uppercase"
          >
            EV · PK
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
