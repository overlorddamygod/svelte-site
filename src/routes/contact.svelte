<script>
    import Input from "../components/Input.svelte";
    import Layout from "../components/Layout.svelte";
    import { validateEmail, hasCharacters } from "../lib/validate";

    let nameField = {
        value: "",
        errorMessage: ""
    };
    let emailField = {
        value: "",
        errorMessage: ""
    };
    let response = {
        success: true,
        message: ""
    }

    const handleSubmit = (e) => {
        // Resetting error messages
        nameField.errorMessage = ""
        emailField.errorMessage = ""
        response.message = ""

        e.preventDefault();

        let hasError = false;

        if ( !hasCharacters(nameField.value) ) {
            nameField.errorMessage = "Please enter your name";
            hasError = true;
        }
        if ( !hasCharacters(emailField.value) ) {
            emailField.errorMessage = "Please enter your email";
            hasError = true;
        } else if ( !validateEmail(emailField.value) ) {
            emailField.errorMessage = "Invalid Email";
            hasError = true;
        }

        if ( hasError ) return;

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
            response = {
                success: true,
                message: res.message
            }
        }).catch(err=> {
            response = {
                success: false,
                message: "Error submitting the form."
            }
        })
    }
</script>

<Layout _title="Contact">
    {#if response.message != "" }
        <div class="text-white rounded-md text-center py-2 my-5" class:bg-green-400={response.success} class:bg-red-400={!response.success}>
            {response.message}
        </div>
    {/if}
    <Input name="Full Name" field={nameField}/>
    <Input type="email" name="Email" field={emailField}/>
    <button class="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md focus:outline-none" type="submit" on:click={handleSubmit}>Submit</button>
</Layout>