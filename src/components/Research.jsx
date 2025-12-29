import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#005f73] to-[#001219]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <BookOpen size={40} className="text-[#ee9b00]" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#94d2bd] to-[#ee9b00] bg-clip-text text-transparent">
              Research Work
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(238, 155, 0, 0.3)' }}
          className="bg-[#001219]/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#ee9b00]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#e9d8a6] mb-6">
            "Do Smaller Models Think Differently? An Explainability-Based Comparison of BERT and DistilBERT Using SST-5"
          </h3>
          
          <p className="text-[#94d2bd] text-lg leading-relaxed mb-6">
            This research investigates whether compressed transformer models like DistilBERT differ in their decision-making processes compared to larger models like BERT. Using the SST-5 dataset for fine-grained sentiment analysis, the study evaluates both models on classification performance and the reasoning behind their predictions.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-[#ee9b00] mb-3">Key Focus Areas:</h4>
            <ul className="space-y-2 text-[#94d2bd]">
              <li className="flex items-start gap-2">
                <span className="text-[#ee9b00]">•</span>
                <span>LIME and SHAP explainability techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ee9b00]">•</span>
                <span>Attention visualization and model interpretability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ee9b00]">•</span>
                <span>Analysis of linguistic cues and shortcut behavior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ee9b00]">•</span>
                <span>Trade-offs between model efficiency and transparency</span>
              </li>
            </ul>
          </div>

          <motion.a
            href="/research-paper.pdf"
            download="Research_Paper_BERT_DistilBERT.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-[#ee9b00] to-[#ca6702] text-white rounded-full font-semibold flex items-center gap-2 inline-flex cursor-pointer"
          >
            <Download size={20} /> Download Paper
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;