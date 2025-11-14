import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-row items-center justify-center gap-7 w-full max-w-4xl mx-auto h-full">
      {/* Avatar with fade-in from left */}
      <motion.div 
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src="/assets/avatar.png"
          alt="avatar"
          className="w-48 h-48 rounded-sm object-cover"
        />
      </motion.div>

      {/* Bio Text with fade-in from right */}
      <motion.div 
        className="flex items-center gap-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="text-text-strong font-mono font-normal text-base capitalize leading-6">
          A driven student at 1337BG (42 Network), passionate about Cybersecurity 
          and exploring DevOps. With a solid base in scripting and systems, I enjoy 
          uncovering how things work under the hood and securing them, while embracing 
          42's peer-learning philosophy.
        </p>
      </motion.div>
    </div>
  );
}