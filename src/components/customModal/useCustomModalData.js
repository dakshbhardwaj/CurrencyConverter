import {useCallback, useEffect, useState} from 'react';
import {EventTypes, LocalEvent} from '../../utils/localEvent';

function useCustomModalData() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filteredModalData, setFilteredModalData] = useState([]);
  const [shouldShowSearchBar, setShouldShowSearchBar] = useState(false);
  const [isSourceCurrencyModal, setIsSourceCurrencyModal] = useState(false);

  const onModalShown = payload => {
    setIsVisible(true);
    setModalData(payload.data);
    setFilteredModalData(payload.data);
    setShouldShowSearchBar(payload.shouldShowSearchBar);
    setIsSourceCurrencyModal(payload.isSourceCurrencyModal);
  };

  useEffect(() => {
    LocalEvent.on(EventTypes.ShowSourceCurrencyModal, onModalShown);
    LocalEvent.on(EventTypes.ShowDestinationCurrencyModal, onModalShown);

    return () => {
      LocalEvent.off(EventTypes.ShowSourceCurrencyModal, onModalShown);
      LocalEvent.off(EventTypes.ShowDestinationCurrencyModal, onModalShown);
    };
  }, []);

  const onSearchQueryChange = useCallback(
    query => {
      const filteredData = modalData.filter(item =>
        item.destinationCurrencyName
          ? item.destinationCurrencyName
              .toLowerCase()
              .includes(query.toLowerCase())
          : item.label.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredModalData(filteredData);
    },
    [modalData],
  );

  const onHideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onItemClick = useCallback(
    value => {
      onHideModal();
      if (isSourceCurrencyModal) {
        LocalEvent.emit(EventTypes.OnSourceCurrencyItemClick, {value});
      } else {
        LocalEvent.emit(EventTypes.OnDestinationCurrencyItemClick, {value});
      }
    },
    [isSourceCurrencyModal, onHideModal],
  );

  return {
    bIsVisible: isVisible,
    bShouldShowSearchBar: shouldShowSearchBar,
    oModalData: filteredModalData,
    fnOnSearchQueryChange: onSearchQueryChange,
    fnHideModal: onHideModal,
    fnOnItemClick: onItemClick,
  };
}

export default useCustomModalData;
