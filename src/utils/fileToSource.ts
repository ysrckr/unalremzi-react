export const fileToSource = (path: string) => {
  return new URL(path, import.meta.url).href;
};

export const assetsToSource = (path: string) => {
  return fileToSource(`/src/assets/${path}`);
};
