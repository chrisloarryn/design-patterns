import axios, { AxiosRequestConfig } from "axios";

export class HttpClient {
	async get(url: string, options?: AxiosRequestConfig<any> | undefined) {
		const { data, status } = await axios.get(url, options);
		if (status !== 200) {
			throw new Error("Error al obtener los datos");
		}
		console.log('====================================');
		console.log('status', status);
		console.log('====================================');
		return { data, status };
	}
}