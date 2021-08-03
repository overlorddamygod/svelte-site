<script>
    import Layout from "../components/Layout.svelte";
    import Card from "../components/Card.svelte";
</script>

<Layout _title="Landing">
    <img class="w-100" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&h=400&q=80" alt=""/>
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
