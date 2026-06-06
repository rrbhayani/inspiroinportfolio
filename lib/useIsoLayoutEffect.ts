import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect on the client (no flash), useEffect on the server (no SSR warning).
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
