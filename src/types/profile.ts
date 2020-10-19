interface Profile {
	id: number
	tag: string
	first_name: string
	last_name: string
	birth_date: Date
	email: string
	phone: string
	title: string
	socials: Social[]
	address: Address
	work_experiences: WorkExperience[]
	educations: Education[]
	skills: Skill[]
	hobbies: string[]
}