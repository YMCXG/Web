<template>
    <div>
        <ul class="aside">
            <router-link to="/shoeList" tag="li" exact class="asideLi" active-class="aside-active">
                Air Jordan 1
            </router-link>
            <router-link to="/shoeList/AirJordan2" tag="li" class="asideLi" active-class="aside-active">
                Air Jordan 2
            </router-link>
            <router-link to="/shoeList/AirJordan3" tag="li" class="asideLi" active-class="aside-active">
                Air Jordan 3
            </router-link>
            <router-link to="/shoeList/AirJordan4" tag="li" class="asideLi" active-class="aside-active">
                Air Jordan 4
            </router-link>
        </ul>

        <router-view class="shoeDetail"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
