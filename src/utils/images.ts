const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/projects/*',
  { eager: true }
);

const logoImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/logos/*', {
  eager: true,
});

export function getProjectImage(path: string): ImageMetadata | undefined {
  const assetPath = path.replace('/images/projects/', '/src/assets/images/projects/');
  return projectImages[assetPath]?.default;
}

export function getLogoImage(path: string): ImageMetadata | undefined {
  const assetPath = path.replace('/images/logos/', '/src/assets/images/logos/');
  return logoImages[assetPath]?.default;
}
