import { writable } from 'svelte/store';

export const themeValue = writable<string>('light');
