export const tokyoNumber = {
  data(){
    return{
      tmData:'Hello',
      title:'Welcome to Tokyo',
      subtitle:'"Tokyo is great city',
      number:0,
    }
  },
  filters:{
    lowerCase(value){
      return value.toLowerCase();
    }
  },
}