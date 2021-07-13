<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subtitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber"
export default {
  mixins:[tokyoNumber],
  data(){
    return{
      tmData:'Hello',
    }
  },
  directives:{
    border(el,binding){
      el.style.borderColor = binding.value.color;
      el.style.borderWidth = binding.value.width;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round){
        el.style.boxShadow ="0 2px 10px rgba(0, 0, 0, 0.4)"
      }
    }
  },
  components:{
    CountNumber,
  }
}
</script>
