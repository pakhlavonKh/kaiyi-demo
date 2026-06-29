export type Engine = "gas" | "hybrid";

export interface EngineSpec {
  power: string;
  accel: string;
  consumption: string;
  priceFrom: string;
}

export const engineSpecs: Record<Engine, EngineSpec> = {
  gas: {
    power: "197",
    accel: "9.4",
    consumption: "7.8",
    priceFrom: "289 000 000",
  },
  hybrid: {
    power: "279",
    accel: "7.5",
    consumption: "4.9",
    priceFrom: "329 000 000",
  },
};
