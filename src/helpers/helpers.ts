import { CurrencyEnum } from "../enums/CurrencyEnum";

export const generateUid = (): string => {
  return Date.now().toString(36) + Math.random().toString(36);
};

export const getValue = (value: string): string => {


  if (value.includes(CurrencyEnum.UAH)) {
    return value.replace(CurrencyEnum.UAH, "₴");
  } else if (value.includes(CurrencyEnum.USD)) {
    return value.replace(CurrencyEnum.USD, "$");
  }
  return value;
};
