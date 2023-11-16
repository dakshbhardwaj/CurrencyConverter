import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {useStyleProcessor} from '../../hooks/useStyleProcessor';
import {layoutPtToPx} from '../../utils/responsiveUI';
import {getCountryCodeByCurrency} from '../../utils';

export default ({onPress, style, countryCode}) => {
  const localStyles = useStyleProcessor(styles, 'CircularImage');
  const cc = getCountryCodeByCurrency(countryCode).toLowerCase();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style || localStyles.container}>
        <Image
          source={{
            uri: `https://flagcdn.com/48x36/${cc}.png`,
          }}
          style={localStyles.image}
          resizingMode="contain"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: layoutPtToPx(30),
    height: layoutPtToPx(30),
    borderRadius: layoutPtToPx(15),
  },
  textButton: {
    marginLeft: layoutPtToPx(8),
    alignSelf: 'center',
    width: 'auto',
  },
};
