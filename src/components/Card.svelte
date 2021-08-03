<script>
    export let name = "business.svg";
</script>

<div class="flex flex-col justify-center items-center text-center px-10 py-10 shadow-lg rounded-2xl cursor-pointer hover:bg-opacity-75">
    <img src={`/svg/${name}`} alt={name} class="block py-2">
    <slot/>
</div>