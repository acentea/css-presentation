<template>
    <div class="wrapper">
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul class="social">
                <li><a href="" class="fb">Facebook</a></li>
                <li><a href="" class="tw">Twitter</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>

    .wrapper {
        width: 100%;
        margin: 0 auto;
    }

    nav {
        background: #333;
    }

    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav a {
        text-decoration: none;
        text-align: center;
        color: #fff;
        display: block;
        padding: 10px;
    }

    nav a:hover {
        background-color: #555;
    }

    a.tw {
        background: url("../assets/tw.png") no-repeat center;
        background-size: 80%;
    }

    a.fb {
        background: url("../assets/fb.png") no-repeat center;
        background-size: 80%;
    }

    .social a {
        text-indent: -10000px;
        margin: 0 auto;
    }

    .social {
        max-width: 80px;
        margin: 0 auto;
    }

    nav ul.social {
        display: flex;
        flex: 1 1 0;
    }

    nav ul.social li {
        flex: 1 1 0;
        padding-top: 20%;
    }


    @media screen and (min-width: 1000px) {
        nav ul {
            display: flex;
        }

        nav li {
            flex: 1 1 0;
        }

        nav {
            display: flex;
            justify-content: space-between;
        }

        ul.social{
            margin: 0;
        }
    }




</style>
