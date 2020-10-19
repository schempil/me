
export default class RequestService {
	baseUrl = ""

	requestHeader = {
		'Content-Type': "application/json"
	}

	async get(endpoint: string) {
		const response = await fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: this.requestHeader
		})

		return response.json()
	}

	async post(endpoint: string, body?: any) {
		return fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'POST',
			headers: this.requestHeader,
			body: JSON.stringify(body)
		})
	}

	async put(endpoint: string, body?: any) {
		return fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'PUT',
			headers: this.requestHeader,
			body: JSON.stringify(body)
		})
	}

	async delete(endpoint: string) {
		return fetch(`${this.baseUrl}/${endpoint}`, {
			method: 'DELETE',
			headers: this.requestHeader
		})
	}

}