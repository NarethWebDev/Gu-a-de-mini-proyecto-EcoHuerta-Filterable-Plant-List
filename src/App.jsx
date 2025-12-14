import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Counter from "./components/Counter";
import CropTips from "./components/CropTips";
import Footer from "./components/Footer";

export default function App() {
  const [showCrops, setShowCrops] = useState(false);
  const [showTips, setShowTips] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      
      <div className="flex-1 p-6 flex flex-col items-center gap-6">
        <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

        <Hero setShowCrops={setShowCrops} setShowTips={setShowTips} />

        {showCrops && (
          <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
            <Card title="Tomato" description="Warm-season crop rich in lycopene." />
            <Card title="Lettuce" description="Cool-season leafy vegetable." />
            <Card title="Carrot" description="Root crop high in beta-carotene." />
          </section>
        )}

        {showTips && <CropTips />}

        <Counter />
      </div>

      <Footer />
    </main>
  );
}
