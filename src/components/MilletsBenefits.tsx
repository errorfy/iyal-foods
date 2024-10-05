import hero from "../assets/final.jpg";

const MilletsBenefits = () => {
  return (
    <section className="relative w-full h-auto flex items-center sm:py-10 justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center   bg-cover filter blur-sm"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-6 bg-opacity-30 py-14 text-white flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white   text-center mb-10">
          Millets Benefits for Specific Body Parts
        </h2>

        {/* Grid Layout for Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
          {/* Left Column (Last 5 Benefits) */}
          <ul className="space-y-5 font-bold text-lg md:text-xl xl:text-2xl order-2 md:order-1">
            <li className="text-center">🦴 Bone Health - Finger Millet (Rich in calcium)</li>
            <li className="text-center">🛡️ Cancer Prevention - Pearl Millet, Barnyard Millet (Antioxidant)</li>
            <li className="text-center">💉 Anemia - Foxtail Millet, Pearl Millet, Finger Millet (Rich in Iron)</li>
            <li className="text-center">⚖️ Weight Management - Foxtail Millet, Little Millet (Low caloric, High Fiber)</li>
            <li className="text-center">🌿 Skin Health - Proso Millet, Kodo Millet (Rich in Antioxidant)</li>
          </ul>

          {/* Right Column (First 5 Benefits) */}
          <ul className="space-y-5 font-bold text-lg md:text-xl xl:text-2xl order-1 md:order-2">
            <li className="text-center">🫀 Heart Health - Foxtail Millet, Pearl Millet, Barnyard Millet (Rich in potassium, Fiber)</li>
            <li className="text-center">🍬 Diabetes - Finger Millet, Little Millet (Low Glycemic index, Rich in Fiber)</li>
            <li className="text-center">🍽️ Digestive Health - Proso Millet, Kodo Millet (High in Fiber)</li>
            <li className="text-center">👁️ Eye Health - Foxtail Millet, Pearl Millet (Rich in Thiamine)</li>
            <li className="text-center">🦠 Immune System - Barnyard Millet, Kodo Millet (Rich in Pyridoxine)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MilletsBenefits;
