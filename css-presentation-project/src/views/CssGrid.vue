<template>
    <body>
    <div id="content">
        <div class="one">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
        <div class="nested">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
        </div>
        <div class="five">5</div>
        <div class="six">6</div>
    </div>
    </body>
</template>

<style scoped>

    #content {
        color: #fff;
        font-family: 'Nunito Semibold';
        text-align: center;
        max-width: 1500px;
        margin: 0 auto;

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, minmax(150px, auto));
        grid-gap: 20px;

    }

    .one {
        grid-column: 1 / 3;
    }

    .two {
        grid-column: 3 / 7;
    }

    .three {
        grid-column: 1 / 5;
        grid-row: 2 / 4;
    }

    .nested {
        grid-column: 4 / 7;
        grid-row: 2 / 4;

        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .five {
        grid-column: 3 / 7;
    }

    .six {
        grid-column: 1 / 3;
        grid-row: 4;
    }

    #content div {
        background: #3bbced;
        padding: 30px;
    }

    #content div:nth-child(even) {
        background: #777;
        padding: 30px;
    }

</style>


