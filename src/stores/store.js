import { writable } from 'svelte/store';

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
