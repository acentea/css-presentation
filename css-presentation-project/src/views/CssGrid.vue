<template>
    <body>
    <div id="content">
        <header>Header</header>
        <main>Main</main>
        <section>Section</section>
        <aside>Aside</aside>
        <nav>Nav</nav>
        <footer>footer</footer>
    </div>
    </body>
</template>

<style scoped>

    /* mobile grid*/
    #content {
        color: #fff;
        font-family: 'Nunito Semibold';
        text-align: center;
        max-width: 1500px;
        margin: 0 auto;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(100px, auto);

        grid-gap: 10px;

        grid-template-areas:
                "abcd abcd abcd abcd"
                "footer footer footer footer"
                "main main main main"
                "main main main main"
                "aside aside nav nav"
                "section section section section"
                "section section section section";

    }

    /* desktop grid*/
    @media screen and (min-width: 760px) {
        #content {
            color: #fff;
            font-family: 'Nunito Semibold';
            text-align: center;
            max-width: 1500px;
            margin: 0 auto;

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(100px, auto);
            grid-gap: 10px;

            grid-template-areas: "abcd abcd abcd ." "aside aside main main" "nav nav main main" "section section section ." "section section section ." "footer footer footer footer";
        }
    }

    #content > * {
        background: aqua;
        padding: 30px;
    }

    header {
        grid-area : abcd;
    }

    main {
        grid-area : main;
    }

    section {
        grid-area : section;
    }

    aside {
        grid-area : aside;
    }

    nav {
        grid-area : nav;
    }

    footer {
        grid-area : footer;
    }


</style>


