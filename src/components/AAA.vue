<script lang="ts" setup="setup">
import useCounterStore from "../store/hooks/useCounterStore";

const counter = useCounterStore()
const addOne = () => {
    counter.$patch({
        number: counter.number + 1
    })
}
const {addMany, addAsyncMany, addAsyncWithAwait} = counter
</script>

<template>
    <div>
        A:
        {{ counter.number }}

        <button @click="addOne">+1</button>
        <button @click="addMany">add many</button>
        <button @click="addAsyncMany">add async many</button>
        <button @click="addAsyncWithAwait">add await many</button>

    </div>
</template>

<style lang="scss" scoped></style>
