import React, {useCallback} from 'react';
import {
  Text,
  View,
  Modal,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../BackButton';
import {useStyleProcessor} from '../../hooks/useStyleProcessor';
import {fontPtToPx, layoutPtToPx} from '../../utils/responsiveUI';
import SearchBar from '../SearchBar';
import CircularImage from '../CircularImage';
import useCustomModalData from './useCustomModalData';

const CustomModal = () => {
  const localStyles = useStyleProcessor(styles, 'customModal');

  const {
    oModalData,
    bIsVisible,
    fnOnSearchQueryChange,
    fnHideModal,
    fnOnItemClick,
    bShouldShowSearchBar,
  } = useCustomModalData();

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={localStyles.item}
          onPress={() => fnOnItemClick(item.label)}>
          {item.label ? <CircularImage countryCode={item.label} /> : null}
          {item.destinationCurrencyName ? (
            <Text style={localStyles.textStyle}>
              {item.destinationCurrencyName}
            </Text>
          ) : null}
          <Text style={localStyles.textStyle}>{item.label}</Text>
        </TouchableOpacity>
      );
    },
    [fnOnItemClick, localStyles.item, localStyles.textStyle],
  );

  return bIsVisible ? (
    <Modal
      style={localStyles.modalStyle}
      animationType="slide"
      transparent={true}
      visible={bIsVisible}
      onRequestClose={fnHideModal}>
      <SafeAreaView style={localStyles.container}>
        <TouchableOpacity onPress={fnHideModal}>
          <View style={localStyles.tapContainer} />
        </TouchableOpacity>

        <View style={localStyles.innerContainer}>
          <BackButton onPress={fnHideModal} title="Select Currency" />
          <View style={localStyles.listContainer}>
            {bShouldShowSearchBar ? (
              <SearchBar onSearchQueryChange={fnOnSearchQueryChange} />
            ) : null}

            <FlatList
              data={oModalData}
              renderItem={renderItem}
              keyExtractor={item => item.label}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  ) : null;
};

const styles = {
  modalStyle: {
    margin: 0,
  },
  container: {
    flex: 1,
  },
  tapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: layoutPtToPx(14),
    flex: 1,
    width: '93.3%',
    landscape: {
      width: '100%',
    },
    tablet: {
      width: '65%',
      landscape: {
        width: '45%',
      },
    },
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
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
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: layoutPtToPx(10),
    paddingHorizontal: layoutPtToPx(5),
    tablet: {
      paddingVertical: layoutPtToPx(14),
    },
  },
  textStyle: {
    marginLeft: layoutPtToPx(10),
    color: 'black',
    textAlign: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: layoutPtToPx(10),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
};

export default CustomModal;
