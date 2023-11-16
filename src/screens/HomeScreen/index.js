import React from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {useStyleProcessor} from '../../hooks/useStyleProcessor';
import CustomDropDown from '../../components/customDropdown';
import {layoutPtToPx} from '../../utils/responsiveUI';
import {getCountryCodeByCurrency} from '../../utils';
import useHomeScreenData from './useHomeScreenData';

function HomeScreen() {
  const {
    bIsLoading,
    sSelectedSourceCurrency,
    sDestinationCurrency,
    fnSourceCurrencyDropDownClick,
    fnDestinationCurrencyDropDownClick,
  } = useHomeScreenData();

  const localStyle = useStyleProcessor(styles, 'HomeScreen');

  if (bIsLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={localStyle.container}>
        {sSelectedSourceCurrency ? (
          <CustomDropDown
            onClick={fnSourceCurrencyDropDownClick}
            text={sSelectedSourceCurrency}
            imageUri={`https://flagcdn.com/48x36/${getCountryCodeByCurrency(
              sSelectedSourceCurrency,
            ).toLowerCase()}.png`}
          />
        ) : null}

        <View style={localStyle.verticalSpace} />

        {sDestinationCurrency ? (
          <CustomDropDown
            onClick={fnDestinationCurrencyDropDownClick}
            text={sDestinationCurrency}
            imageUri={`https://flagcdn.com/48x36/${getCountryCodeByCurrency(
              sDestinationCurrency,
            ).toLowerCase()}.png`}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verticalSpace: {
    padding: layoutPtToPx(16),
  },
};

export default HomeScreen;
