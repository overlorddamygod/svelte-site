<script context="module">
  export const load = async ({ fetch }) => {
    const cardDetails = await fetch("/api/home").then((res) => res.json());

    return {
      props: { cardDetails },
    };
  };
</script>

<script>
  import Layout from "../components/Layout.svelte";
  import Card from "../components/Card.svelte";
  import Banner from "../components/Banner.svelte";

  export let cardDetails;
</script>

<Layout _title="Landing">
  <Banner />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 my-5">
    {#each cardDetails as card}
      <Card name={card.icon}>
        {card.body}
      </Card>
    {/each}
  </div>
</Layout>
