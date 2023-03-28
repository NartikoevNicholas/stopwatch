<template>
    <div class="add__element">
        <img 
            @click="this.$emit('add_element')"
            class="add__element__btn" 
            src="@/assets/btn_icon/add.svg" 
            alt="">
    </div>
</template>

<style scoped>
    .add__element {
        width: 225px;
        height: 120px;
        background: #696969;
    }
    .add__element__btn{
        position: relative;
        background: none;
        left: 103px;
        top: 50px;
        cursor: pointer;
    }
    .add__element__btn:hover {
        opacity: .8;
    }
</style>