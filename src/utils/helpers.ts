import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEmpty} from 'lodash';

export const storeAsyncStorage = async (
  key: string,
  payload: string,
  is_object: boolean = true,
) => {
  var data = payload;

  if (is_object) {
    data = JSON.stringify(data);
  }

  await AsyncStorage.setItem(key, data);
};

export const getAsyncStorage = async (key: string) => {
  const value = await AsyncStorage.getItem(key);

  var parse = '';
  if (isEmpty(value)) {
    parse = JSON.parse(value as string);

    return parse;
  }

  return parse;
};
