import json from '../data/mock.json'

export default class ProfileService {

	getProfile(): Promise<Profile> {
		return new Promise((resolve, reject) => {
			resolve(json.profile)
		})
	}
}