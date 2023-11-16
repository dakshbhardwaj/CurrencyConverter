import {useCallback, useEffect, useState} from 'react';
import CurrencyApi from '../../api/CurrencyApi';
import {EventTypes, LocalEvent} from '../../utils/localEvent';

function useHomeScreenData() {
  const [selectedSourceCurrency, setSelectedSourceCurrency] = useState();
  const [destinationCurrency, setDestinationCurrency] = useState();
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CurrencyApi.getPublicCurrency()
      .then(response => {
        setResponseData(response.data.data);
        const sourceCurrencyKeys = Object.keys(response.data.data);
        setSelectedSourceCurrency(sourceCurrencyKeys[0]);
        setDestinationCurrency(
          response.data.data[Object.keys(response.data.data)[0]][0]
            .destination_currency_code,
        );
      })
      .catch(error => {
        console.log('Error fetching currency data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSourceCurrencyChange = useCallback(
    value => {
      setSelectedSourceCurrency(value);
      if (value) {
        const filteredDestinationCurrencyItems = responseData[value]?.map(
          currency => ({
            label: currency.destination_currency_code,
            value: currency.destination_currency_code,
            destinationCurrencyName: currency.destination_currency_name,
          }),
        );
        setDestinationCurrency(filteredDestinationCurrencyItems[0].value);
      }
    },
    [responseData],
  );

  const sourceCurrencyItems = Object.keys(responseData).map(currencyCode => ({
    label: currencyCode,
    value: currencyCode,
  }));

  const onSourceCurrencyItemClick = useCallback(
    payload => {
      handleSourceCurrencyChange(payload.value);
    },
    [handleSourceCurrencyChange],
  );

  const onDestinationCurrencyItemClick = useCallback(payload => {
    setDestinationCurrency(payload.value);
  }, []);

  const sourceCurrencyDropDownClick = useCallback(() => {
    LocalEvent.emit(EventTypes.ShowSourceCurrencyModal, {
      data: sourceCurrencyItems,
      onItemClick: onSourceCurrencyItemClick,
      shouldShowSearchBar: false,
      isSourceCurrencyModal: true,
    });
  }, [onSourceCurrencyItemClick, sourceCurrencyItems]);

  const destinationCurrencyDropDownClick = useCallback(() => {
    const filteredDestinationCurrencyItems = responseData[
      selectedSourceCurrency
    ]?.map(currency => ({
      label: currency.destination_currency_code,
      value: currency.destination_currency_code,
      destinationCurrencyName: currency.destination_currency_name,
    }));
    LocalEvent.emit(EventTypes.ShowDestinationCurrencyModal, {
      data: filteredDestinationCurrencyItems,
      onItemClick: onDestinationCurrencyItemClick,
      shouldShowSearchBar: filteredDestinationCurrencyItems?.length > 10,
      isSourceCurrencyModal: false,
    });
  }, [responseData, selectedSourceCurrency, onDestinationCurrencyItemClick]);

  useEffect(() => {
    LocalEvent.on(
      EventTypes.OnSourceCurrencyItemClick,
      onSourceCurrencyItemClick,
    );
    LocalEvent.on(
      EventTypes.OnDestinationCurrencyItemClick,
      onDestinationCurrencyItemClick,
    );
    return () => {
      LocalEvent.off(
        EventTypes.OnSourceCurrencyItemClick,
        onSourceCurrencyItemClick,
      ),
        LocalEvent.off(
          EventTypes.OnDestinationCurrencyItemClick,
          onDestinationCurrencyItemClick,
        );
    };
  }, [onDestinationCurrencyItemClick, onSourceCurrencyItemClick]);

  return {
    bIsLoading: loading,
    sSelectedSourceCurrency: selectedSourceCurrency,
    sDestinationCurrency: destinationCurrency,
    fnSourceCurrencyDropDownClick: sourceCurrencyDropDownClick,
    fnDestinationCurrencyDropDownClick: destinationCurrencyDropDownClick,
  };
}

export default useHomeScreenData;
