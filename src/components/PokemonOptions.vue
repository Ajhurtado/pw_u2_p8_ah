<template>
    <div class="options-container">
        <ul>
            <li>Po1</li>
            <li>Po2</li>
            <li>Po3</li>
            <li>Po4</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

ul {
    list-style-type: none;
}

li {
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    border-radius: 5px;
    border: solid 1px black;
    cursor: pointer;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.005);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>