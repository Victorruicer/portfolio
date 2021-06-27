import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Víctor Ruiz'
	}
});

export default app;