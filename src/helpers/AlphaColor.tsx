import Color from "color";
import { __ALERTS, __COLORS, __GRAY_SCALE } from "../layout/Theme";

export const getAlphaColor = (
  alpha: number,
  color: __COLORS | __ALERTS | __GRAY_SCALE
) => {
  return Color(color)
    .rgb()
    .alpha(alpha)
    .string();
};
