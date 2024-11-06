declare module "fake-animation-lib" {
  export type AnimatingState =
    | "before-animation"
    | "animating"
    | "after-animation";
  export function getAnimatingState(): AnimatingState;
}
