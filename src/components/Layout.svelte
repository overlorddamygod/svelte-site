<script>    
    export let _title = "Landing"
</script>

<svelte:head>
	<title>{_title}</title>
</svelte:head>

<div class="layout w-3/4 m-auto">
    <div class="header flex justify-between items-center py-7 border-b mb-7">
        <a href="./"><h1 class="text-3xl">Logo</h1></a>
    </div>
    <main>
        <slot/>
    </main>
</div>