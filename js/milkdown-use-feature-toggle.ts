import { SetState } from "@/utils/types";
import type { FC, ReactNode } from "react";
import { createContext, useCallback, useContext, useState } from "react";

type FeatureToggle = {
  enableGFM: boolean;
  enableBlockHandle: boolean;
};

const defaultFeatureToggle: FeatureToggle = {
  enableGFM: true,
  enableBlockHandle: true,
};

export const featureToggleCtx = createContext(defaultFeatureToggle);
export const setFeatureToggleCtx = createContext<SetState<FeatureToggle>>(
  () => {}
);

export const useFeatureToggle = () => useContext(featureToggleCtx);

export const useSetFeatureToggle = () => {
  const setFeatureToggles = useContext(setFeatureToggleCtx);

  return useCallback(
    (config: Partial<FeatureToggle>) => {
      setFeatureToggles((prev) => ({ ...prev, ...config }));
    },
    [setFeatureToggles]
  );
};
