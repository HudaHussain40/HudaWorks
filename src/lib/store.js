import { readable, writable, derived  } from 'svelte/store';

export let theme = writable('light')