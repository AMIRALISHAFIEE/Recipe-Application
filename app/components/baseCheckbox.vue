<template>
    <div>
        <input type="checkbox" :id="labelId" />
        <label :for="labelId">{{ props.label }}</label>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }
})

const labelId = props.label.replace(/\s+/g, "-").toLowerCase()
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

div input {
  display: none;
}

div label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  user-select: none;
}

div label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border: 2px solid var(--primary-color);
  border-radius: 50%; 
  background: white;
  transition: 0.2s;
}
 
div label::after {
  content: "";
  position: absolute;
  left: 4.4px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  width: 13px;
  height: 13px;
  background: var(--primary-color);
  border-radius: 50%;
  transition: 0.2s;
}


div input:checked + label::after {
  transform: translateY(-50%) scale(1);
}

div input:checked + label::before {
  border-color: var(--primary-color);
}

div input:checked + label {
  text-decoration: line-through;
}
</style>