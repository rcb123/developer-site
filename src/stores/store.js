import { writable } from 'svelte/store';

export const projects = writable([
	{
		title: 'Video to MP3 Converter',
		description:
			'A microservice-based video to MP3 converter using Kubernetes, Docker, MongoDB, RabbitMQ, and Python.',
		image: 'src/static/images/project-1.jpg',
		projectPage: '#',
		githubLink: 'https://github.com/rcb123/video-mp3-converter'
	},
	{
		title: 'Sveltype',
		description: 'A simple typing game made using JavaScript and SvelteKit. Based on Monkeytype.',
		image: 'src/static/images/project-2.jpg',
		projectPage: '/projects/sveltype',
		githubLink: 'https://github.com/rcb123/monkeytype-clone'
	},
	{
		title: 'Weather App',
		description: 'A simple weather app using SvelteKit and the OpenWeatherMap API',
		image: 'src/static/images/project-3.jpg',
		projectPage: '/projects/weather',
		githubLink: 'https://github.com/rcb123/weather-app'
	}
]);

export const slides = writable([
	{
		title: 'Task Tracker',
		description:
			'A full-stack web application that helps users track and manage their daily tasks, built using React, Node.js, and MongoDB.',
		image: 'src/static/images/slide-1.jpg'
	},
	{
		title: 'Fitness Scheduler',
		description:
			'A mobile app for finding and booking fitness classes in your area, built using Flutter and Firebase.',
		image: 'src/static/images/slide-2.jpg'
	},
	{
		title: 'Data Visualization',
		description:
			'A data visualization tool for exploring and analyzing large datasets, built using D3.js and React.',
		image: 'src/static/images/slide-3.jpg'
	}
]);
