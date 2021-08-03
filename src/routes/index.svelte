<script>
    import Layout from "../components/Layout.svelte";
    import Card from "../components/Card.svelte";
    import Banner from "../components/Banner.svelte";
</script>

<Layout _title="Landing">
    <Banner/>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 my-5">
        <Card name={"business.svg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card>
        <Card name={"badge.svg"}>
            Sed tempore incidunt voluptate, maxime non distinctio saepe provident qui doloribus.
        </Card>
        <Card name={"target.svg"}>
            Dolores optio nesciunt maiores aperiam.
        </Card>
    </div>
</Layout>
