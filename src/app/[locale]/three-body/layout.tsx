import type { ReactNode } from "react";
import { SpaceStarfield } from "@/components/layout/SpaceStarfield/SpaceStarfield";
import { GalleryProvider } from "@/features/three-body/presentation/providers/GalleryProvider";
import { ThreeBodyExperimentProvider } from "@/features/three-body/presentation/providers/ThreeBodyExperimentProvider";
// import { GalleryProvider } from "@/features/three-body/presentation/providers/GalleryProvider";

// import { ThreeBodyExperimentProvider } from "@/features/three-body/presentation/providers/ThreeBodyExperimentProvider";

const ThreeBodyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <GalleryProvider>
        <ThreeBodyExperimentProvider>
          <SpaceStarfield />
          {children}
        </ThreeBodyExperimentProvider>
      </GalleryProvider>
    </div>
  );
};

export default ThreeBodyLayout;
