import React, {useMemo} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {BackImage} from '../../assets';
import {fontPtToPx, layoutPtToPx} from '../../utils/responsiveUI';
import colors from '../../utils/colors';
import {useStyleProcessor} from '../../hooks/useStyleProcessor';

function BackButton({
  textStyle,
  style,
  buttonStyle,
  title,
  onPress,
  buttonImage,
  buttonImageStyle,
  buttonImageSource,
}) {
  const styles = useStyleProcessor(localStyles, 'BackButton');

  const backImage = useMemo(() => {
    return (
      <Image
        source={buttonImageSource ? buttonImageSource : BackImage}
        style={buttonImageStyle || styles.headerImage}
      />
    );
  }, [buttonImageSource, buttonImageStyle, styles.headerImage]);

  return (
    <View style={style || styles.headerContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyle || styles.headerImageContainer}>
        {buttonImage || backImage}
      </TouchableOpacity>
      {title ? (
        <Text style={textStyle || styles.headerTitle}>{title}</Text>
      ) : null}
    </View>
  );
}

export default React.memo(BackButton);

const localStyles = {
  container: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    marginLeft: layoutPtToPx(10),
    fontStyle: 'normal',
    fontSize: fontPtToPx(14),
    alignItems: 'center',
    letterSpacing: layoutPtToPx(0.28),
    color: colors.PaleSky,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: layoutPtToPx(10),
  },
  headerImage: {
    tintColor: colors.SherpaBlue,
    width: layoutPtToPx(8.1),
    height: layoutPtToPx(14),
    tablet: {
      width: layoutPtToPx(11.57),
      height: layoutPtToPx(20),
    },
  },
  headerTitle: {
    color: colors.SherpaBlue,
    fontSize: fontPtToPx(24),
    marginLeft: layoutPtToPx(30),
    tablet: {
      fontSize: fontPtToPx(32),
    },
  },
  headerImageContainer: {
    position: 'absolute',
    height: layoutPtToPx(50),
    width: layoutPtToPx(50),
    justifyContent: 'center',
    padding: layoutPtToPx(20),
  },
};
