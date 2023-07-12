export type librarieType =
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization';

const libraries: librarieType[] = ['places'];

const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcurs: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};

export { libraries, defaultOptions };
