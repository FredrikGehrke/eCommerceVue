<template>
<!--Navbar -->
    <nav class="mb-1 navbar navbar-expand-lg  fixed-top scrolling-navbar my-nav-color">
        <div class="container">

            <router-link to="/" class="navbar-brand">
                <i class="fab fa-artstation"></i> Astore.se
            </router-link>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Produkter</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/clothes">Kläder</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/shoes">Skor</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/accessories">Accessoarer</router-link>
                    </li>

                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <!-- ShoppingCart -->
                    <li class="nav-item dropdown">
                        <a class="nav-link mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ shoppingCartItemCount }} <i class="fas fa-shopping-cart"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                            <ShoppingCart />
                        </div>
                    </li>

                    <!-- UserSettings -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right z-depth-2">
                            <UserSettings />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<!--/.Navbar -->
</template>

<script>
import ShoppingCart from '../shoppingcart/ShoppingCart.vue'
import UserSettings from '../user/UserSettings.vue'
import { mapGetters } from 'vuex'



export default {
    name: 'Navbar',
    components: {
        ShoppingCart,
        UserSettings
    },
    computed: {
        ...mapGetters(['shoppingCartItemCount'])
    }
}
</script>

<style scoped>
    .shopping-cart {
        min-width: 450px;
    }
    .my-nav-color {
    background: linear-gradient(to bottom, rgba(28, 35, 49, 0.966), rgb(28, 35, 49));
    color: #00C851;
    }
    .navbar-brand,
    .nav-link {
        color: #00C851;
    }

</style>