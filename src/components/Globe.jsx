import { Globe } from "@/components/ui/globe"

export function GlobeDemo() {
  const globeConfig = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [0.3, 0.3, 0.35],
    markerColor: [0.98, 0.39, 0.08],
    glowColor: [0.6, 0.6, 0.65],
    markers: [],
  }
  
  return (
    <div className="bg-transparent relative flex w-full h-full items-center justify-center overflow-hidden">
      <Globe className="scale-[2.8] translate-y-[110%]" config={globeConfig} />
    </div>
  )
}
