import {countries} from './countries';

export const getCountryCodeByCurrency = currencyCode => {
  const foundCountry = countries.find(
    country => country.currencyCode === currencyCode,
  );
  return foundCountry ? foundCountry.countryCode : null;
};
