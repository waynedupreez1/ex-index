import { PUBLIC_URL, PUBLIC_ALL_EXERCISES_JSON, PUBLIC_GIF_DIRECTORY } from '$env/static/public';

interface Exercise {
	id: string;
	name: string;
	force: string;
	equipment: string;
	gif: string;
}

const URL_TO_ALL_EXERCISE_JSON = [PUBLIC_URL, PUBLIC_ALL_EXERCISES_JSON].join("/")
const URL_TO_GIF_PATH = [PUBLIC_URL, PUBLIC_GIF_DIRECTORY].join('/');

export const load = async () => {
	const response = await fetch(URL_TO_ALL_EXERCISE_JSON);

	const exercises: Exercise[] = await response.json();
	
	exercises.forEach((element) => {
		element.gif = [URL_TO_GIF_PATH, element.gif].join('/')
	});
	
	return {
		exercises
	};
};
