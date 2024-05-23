<script setup>
import {ref, computed} from "vue";

const cards = ref([
    {
      title: 'Консультирование по налогообложению и валютному законодательству',
      id:1,
      icon: '/icon.png',
    },
    {
      title: 'Консультирование по налогообложению и валютному законодательству',
      id:2,
    },
    {
      title: 'Заполнение налоговой отчетности',
      id:3,
    },
    {
      title: 'Представительство в налоговых органах',
      id:4,
    },
    {
      title: 'Представительство в налоговых органах',
      id:5,
    },
    {
      title: 'Представительство в налоговых органах',
      id:6,
    },
    {
      title: 'Представительство в налоговых органах',
      id:7,
    },
  ])

const flexTemplate = computed(() => {
  if (cards.value.length <= 4 ) {
    return 'flex-template-4'
  } else if(cards.value.length <= 6 ||  cards.value.length === 9 ||  cards.value.length === 8) {
    return 'flex-template-6'
  } else if(cards.value.length === 7) {

  }
  return 'flex'
})

// const gridTemplate = computed(() => {
//   if (cards.value.length <= 4 ) {
//     return 'grid-template-4'
//   } else if(cards.value.length === 5) {
//     return 'grid-template-5'
//   } else if(cards.value.length === 6 ||  cards.value.length === 9) {
//     return 'grid-template-6'
//   }
// })

</script>

<template>
  <div class="greetings">
    <h1>Test</h1>
    <div class="cards-wrapper">
      <div class="cards-item" :class="flexTemplate" v-for="(item, index) in cards">
        <svg class="cards-icon" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M9.13008 5.22153C9.87645 4.72282 10.6648 4.2986 11.4838 3.95234C13.4713 3.11206 14.465 2.69192 15.7328 3.53238C17.0007 4.37284 17.0007 5.74878 17.0007 8.50068V11.334C17.0007 14.0053 17.0007 15.3409 17.8305 16.1708C18.6604 17.0007 19.996 17.0007 22.6673 17.0007H25.5007C28.2525 17.0007 29.6285 17.0007 30.4689 18.2685C31.3094 19.5363 30.8893 20.5301 30.049 22.5175C29.7027 23.3365 29.2785 24.1249 28.7798 24.8713C27.2231 27.2009 25.0106 29.0167 22.422 30.089C19.8334 31.1612 16.9849 31.4418 14.2369 30.8951C11.4888 30.3485 8.96455 28.9993 6.98331 27.018C5.00207 25.0368 3.65282 22.5125 3.1062 19.7645C2.55958 17.0164 2.84012 14.1679 3.91236 11.5793C4.9846 8.99071 6.80038 6.77818 9.13008 5.22153Z" stroke="#253978" stroke-width="3"/>
          <path d="M20.541 3.2793C25.5192 4.5606 29.4384 8.47979 30.7197 13.458" stroke="#253978" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div>{{ item.title }}</div>
        <div>{{ item.id }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-wrapper {
  padding: 20px 40px;
  width: 100%;
  display: flex;
  //display: grid;
  gap: 24px;
  flex-wrap: wrap;
}

.cards-item {
  padding: 40px 28px;
  border-radius: 32px;
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(43, 87, 208, 0.25);
}

.grid-template-4 {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
.grid-template-5 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-template-6 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.flex-template-4 {
  flex: 1 0 calc(25% - 24px);
}
.flex-template-6 {
  flex: 1 0 calc(33% - 24px);
}
.flex-template-7 {
  flex: 1 0 calc(33% - 24px);
}

.cards-icon {
  display: block;
  padding: 20px;
  width: 74px;
  height: 74px;
  margin: 0 auto 31px;

  border-radius: 50%;
  box-shadow: 0px 2px 20px 0px rgba(43, 87, 208, 0.25);
}

@media (min-width: 1024px) {

}
</style>
