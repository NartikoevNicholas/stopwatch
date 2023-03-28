<template>
    <div class="container">
        <Stopwatch 
            class="stopwatch" 
            v-for="i in this.stopwatchs"/>
        <AddElement 
            class="stopwatch" 
            @add_element="this.addStopwatchs"
        />   
    </div>
</template>

<script>
import Stopwatch from '@/components/Stopwatch.vue'
import AddElement from '@/components/AddElement.vue';
export default {
    components: {
        Stopwatch,
        AddElement
    },
    data() {
        return {
            stopwatchs: 0
        }
    },
    methods: {
        addStopwatchs() {
            this.stopwatchs += 1
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        background: #353638;
    }
    .container {
        margin: 72px 213px 82px 212px;
    }
    @media (max-width: 1024px) {
        .container {
            margin: 72px 133px 72px 135px;
        }
    }
    @media (max-width: 768px) {
        .container {
            margin: 72px 49px 77px 46px;
        }
    }
    .stopwatch {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 45px;
        margin-right: 50px;
    }
</style>