import EventEmitter from 'eventemitter3';

export const LocalEvent = new EventEmitter();

export const EventTypes = {
  ShowDestinationCurrencyModal: 'SHOW_DESTINATION_CURRENCY_MODAL',
  ShowSourceCurrencyModal: 'SHOW_SOURCE_CURRENCY_MODAL',
  OnDestinationCurrencyItemClick: 'ON_DESTINATION_CURRENCY_ITEM_CLICK',
  OnSourceCurrencyItemClick: 'ON_SOURCE_CURRENCY_ITEM_CLICK',
};
