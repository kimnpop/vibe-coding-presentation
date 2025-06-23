import { motion } from "framer-motion";
import { Slide } from "../SlideData";

interface SlideComponentProps {
  slide: Slide;
}

export const ImpactSlide = ({ slide }: SlideComponentProps) => {
  const IconComponent = slide.icon;
  return (
    <div className="text-center max-w-6xl mx-auto">
      <motion.div
        initial={{ scale: 0, rotateZ: 180 }}
        animate={{ scale: 1, rotateZ: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.2,
          ease: "easeOut",
        }}
        className="mb-12"
      >
        <div className="bg-gray-100 p-6 rounded-2xl inline-block shadow-lg border border-gray-200">
          <IconComponent size={56} className="text-gray-800" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-black mb-6 text-gray-900"
      >
        {slide.title}
      </motion.h1>
      {slide.subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 text-gray-600"
        >
          {slide.subtitle}
        </motion.h2>
      )}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 text-gray-600 font-light"
      >
        {slide.description}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI가 잘하는 것 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            ✅ AI가 잘하는 것
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {slide.benefits?.slice(0, 4).map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-green-800">
                    {benefit.label}
                  </span>
                  <span className="text-lg font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {benefit.value}
                  </span>
                </div>
                <div className="text-sm text-green-700 leading-relaxed">
                  {benefit.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI가 못하는 것 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6">
            ❌ AI가 어려워하는 것
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {slide.benefits?.slice(4).map((benefit, i) => (
              <motion.div
                key={i + 4}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-red-800">
                    {benefit.label}
                  </span>
                  <span className="text-lg font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                    {benefit.value}
                  </span>
                </div>
                <div className="text-sm text-red-700 leading-relaxed">
                  {benefit.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
