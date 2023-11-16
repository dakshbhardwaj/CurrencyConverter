import {PixelRatio} from 'react-native';

const fontPtToPx = points => {
  return points / PixelRatio.getFontScale();
};

const layoutPtToPx = points => {
  return PixelRatio.roundToNearestPixel(points);
};

export {fontPtToPx, layoutPtToPx};
