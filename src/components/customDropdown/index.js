import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useStyleProcessor} from '../../hooks/useStyleProcessor';
import {chevronDown} from '../../assets';
import {fontPtToPx, layoutPtToPx} from '../../utils/responsiveUI';

const CustomDropDown = ({text, onClick, imageUri}) => {
  const localStyles = useStyleProcessor(styles, 'DropdownComponent');

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={localStyles.dropdown}
      onPress={onClick}>
      <Image
        source={{
          uri: `${imageUri}`,
        }}
        style={localStyles.image}
        resizingMode="contain"
      />
      <Text style={localStyles.dropDownText}>{text}</Text>
      <Image source={chevronDown} style={localStyles.chevronDown} />
    </TouchableOpacity>
  );
};

const styles = {
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  dropDownText: {
    marginLeft: layoutPtToPx(15),
    marginTop: layoutPtToPx(5),
    fontSize: fontPtToPx(16),
    color: '#003C43',
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'center',
    tablet: {
      fontSize: fontPtToPx(16),
      lineHeight: 20,
    },
  },
  chevronDown: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  image: {
    width: layoutPtToPx(30),
    height: layoutPtToPx(30),
    borderRadius: layoutPtToPx(15),
  },
};

export default CustomDropDown;
