import axios, { AxiosRequestConfig } from 'axios';
import { Platform } from 'react-native';

import { HttpResponse } from './types';

const baseURL = Platform.select({
  ios: 'http://localhost:1337/api',
  android: 'http://10.0.2.2:1337/api',
});

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async <T = any>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    const response = await api.get<T>(url, config);
    return { data: response.data, error: null, status: response.status };
  } catch (error: any) {
    return {
      data: undefined,
      error: error.response?.data || error.message,
      status: error.response?.status || null,
    };
  }
};

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    const response = await api.post<T>(url, data, config);
    return { data: response.data, status: response.status };
  } catch (error: any) {
    return {
      error: error.response?.data || error.message,
      status: error.response?.status,
    };
  }
};

export const put = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    const response = await api.put<T>(url, data, config);
    return { data: response.data, status: response.status };
  } catch (error: any) {
    return {
      error: error.response?.data || error.message,
      status: error.response?.status,
    };
  }
};

export const del = async <T = any>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    const response = await api.delete<T>(url, config);
    return { data: response.data, status: response.status };
  } catch (error: any) {
    return {
      error: error.response?.data || error.message,
      status: error.response?.status,
    };
  }
};

/*
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
*/
