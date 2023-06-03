<script type="ts">
	import '@fontsource/poppins';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '../styles/normalize.css';
	import '../styles/reset.css';
	import '../styles/typography.css';
	import '../styles/global.css';
	import '../styles/vars.css';
	import Header from '$components/shared/Header.svelte';
	import Footer from '$components/shared/Footer.svelte';
	import CookieNotice from '$components/shared/CookieNotice.svelte';
</script>

<CookieNotice />
<Header />
<slot />
<Footer />
