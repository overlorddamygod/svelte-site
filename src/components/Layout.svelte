<script>
    import { base, assets } from "$app/paths"
    console.log(base,assets)

    export let _title = "Landing"
</script>

<svelte:head>
	<title>{_title}</title>
</svelte:head>

<div class="layout w-3/4 m-auto">
    <div class="header flex justify-between items-center py-7 border-b mb-7">
        <a href="./"><h1 class="text-3xl">Logo</h1></a>

        {#if base==""}
        <a href="/contact"><button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none">Contact Us</button></a>
        {/if}
    </div>
    <main>
        <slot/>
    </main>
</div>