import Api from './Api';

const Endpoints = {
  getPublicCurrency:
    '/public/currency/pair?source_currency=AUD,HKD,MYR,SGD,USD,EUR,INR,GBP,CAD',
};

class CurrencyApi {
  getPublicCurrency = () => {
    const api = new Api();
    return api.get(Endpoints.getPublicCurrency);
  };
}

export default new CurrencyApi();
