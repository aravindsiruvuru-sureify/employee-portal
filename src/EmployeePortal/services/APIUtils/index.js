/* eslint-disable import/prefer-default-export */
import {
  API_FAILED,
  API_FETCHING,
  API_INITIAL,
  API_SUCCESS,
} from '../APIConstants';

export const isAPIInitial = (status) => status === API_INITIAL;
export const isAPILoading = (status) => status === API_FETCHING;
export const isAPISuccess = (status) => status === API_SUCCESS;
export const isAPIFailed = (status) => status === API_FAILED;
