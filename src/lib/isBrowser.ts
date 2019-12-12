export const isSSR = (): boolean => {
  return typeof window === 'undefined';
};
