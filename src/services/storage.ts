import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  set: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  },
  get: async <T>(key: string) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) return JSON.parse(data) as T;
      return null;
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  },
};
