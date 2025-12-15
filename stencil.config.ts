import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-starter-project-name",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
  // taskQueue: "immediate",
};
