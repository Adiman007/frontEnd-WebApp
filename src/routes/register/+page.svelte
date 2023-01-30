<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Sign in</title>
</svelte:head>
<body>
    <div class="banner">
            <marquee scrollamount="12">Le site des fans de cinéma !</marquee>
    </div>
    <div class="stonks">
        <img stonks src="/Stonks.png" alt="Stonks" width="300"
             height="300">
    </div>
    <div class="Pengu">
        <img stonks src="/DabbingPengu.png" alt="Stonks">
    </div>
    <div class="cinema">
        <img stonks src="/cinema.jpg" alt="cinema">
    </div>
    <h1 class="centered">Register</h1>
    <form use:enhance method="POST">
        <fieldset>
            <input

                    name="username"
                    type="text"
                    required
                    placeholder="Username"
            />
        </fieldset>
        <fieldset >
            <input

                    name="password"
                    type="password"
                    required
                    placeholder="Password"
            />
        </fieldset>
        <button type="submit">Sign-up</button>
    </form>
</body>
<div class="link" >
    <button onClick="window.location.href='/login';">You already have an account ? Sign-in !</button>
</div>
<style>
    .stonks {
        position: absolute;
        left: 10%;
        top: 80%;
        transform: translate(-50%,-50%);
    }
    .cinema {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%,-50%);
    }
    .Pengu {
        position: absolute;
        left: 90%;
        top: 80%;
        transform: translate(-50%,-50%);
    }

    body {
        background-color: #f1f1f1;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    .centered {
        position: absolute;
        font-size:55px;
        left: 50%;
        top: 33%;
        transform: translate(-50%,-50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: -webkit-linear-gradient(left, red, orange, yellow, green, blue, indigo, violet);
    }
    form{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .link {
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%,-50%);
    }
    .banner {
        position: fixed;
        top: 5%;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #f2f2f2;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
    }
    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .link {

        width: 10%;
        background-color: lightgrey;
        color: white;
        padding: 20px 20px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
    }
    .link:hover {
        background-color: grey;
    }
</style>