<script>
    export let field = { value: '', errorMessage: '' };
    export let name = '';
    export let type = 'text';
    export let placeholder = '';
    export let required = false;

    const handleInputType = (e) => {
        e.target.type = type;
    };
</script>
<div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for={name}>
        {name}
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" class:border-red-500={field.errorMessage} bind:value={field.value} id={name} on:input={handleInputType} {placeholder} {required}>
    {#if field.errorMessage != "" } 
        <p class="text-red-500 text-xs italic">{field.errorMessage}</p>
    {/if}
</div>