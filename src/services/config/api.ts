import axios from 'axios';

import type { AxiosInstance } from 'axios';

import { apiUrl } from '@utils';

const apiPublic: AxiosInstance = axios.create({
	baseURL: apiUrl,
	withCredentials: false,
});

const apiPrivate: AxiosInstance = axios.create({
	baseURL: apiUrl,
	withCredentials: true,
});

export { apiPublic, apiPrivate };
