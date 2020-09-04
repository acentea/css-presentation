<template>
    <body>
    <div id="content">
        <div class="one">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
        <div class="four">4</div>
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


