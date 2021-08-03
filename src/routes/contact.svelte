<script>
    import Input from "../components/Input.svelte";
    import Layout from "../components/Layout.svelte";

    let nameField = {
        value: "",
        errorMessage: ""
    };
    let emailField = {
        value: "",
        errorMessage: ""
    };
    let responseMessage = {
        success: true,
        message: ""
    }

    const handleSubmit = (e) => {
        nameField.errorMessage = ""
        emailField.errorMessage = ""

        e.preventDefault();

        if ( nameField.value.trim() == "") {
            nameField.errorMessage = "Please enter your name";
        }
        if ( emailField.value.trim() == "" ) {
            emailField.errorMessage = "Please enter your email";
            return;
        }

        if ( !validateEmail(emailField.value) ) {
            emailField.errorMessage = "Invalid Email";
        }

        fetch(`/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameField.value,
                email: emailField.value
            })
        })
        .then(res=>res.json())
        .then(res=> {
            responseMessage = {
                success: true,
                message: res.message
            }
        }).catch(err=> {
            responseMessage = {
                success: false,
                message: "Error submitting the form."
            }
        })
    }

    const validateEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
</script>

<Layout _title="Contact">
    {#if responseMessage.message != "" }
        <div class="text-white rounded-md text-center py-2 my-5" class:bg-green-400={responseMessage.success} class:bg-red-400={!responseMessage.success}>
            {responseMessage.message}
        </div>
    {/if}
    <Input name="Full Name" field={nameField}/>
    <Input type="email" name="Email" field={emailField}/>
    <button class="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md focus:outline-none" type="submit" on:click={handleSubmit}>Submit</button>
</Layout>