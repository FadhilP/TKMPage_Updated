<template>
<tr class="sm:border-b border-black p-4 responsive-table">
    <ValidationProvider :name="name" rules="required" v-slot="{ errors }">
    <td class="responsive-table mt-4 px-2 sm:px-5 py-2 sm:py-3" :class="{ 'rounded-lg bg-orange-100 sm:bg-white border-2 border-orange-300 sm:border-0' : errors != '' }">
        <input type="hidden" :name="name" :value="picked">
        <div class="w-full inline-flex items-center font-bold sm:font-normal">
        <div class="flex flex-col w-full" :class="{ 'm-2' : errors != '' }">
            <p class="text-gray-800 leading-relaxed" :class="{ 'font-bold' : errors != '' }">{{text}}</p>    
            <p class="text-gray-600 text-xs mt-1 font-normal leading-relaxed" :class="{ 'hidden' : !subtext }">{{subtext}}</p>    
        </div>
        <p :class="{ 'hidden' : errors == '' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 items-end">
                <path class="fill-current text-orange-200" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
                <path class="fill-current text-orange-500" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path>
            </svg>
        </p>
        </div>
    </td>
    </ValidationProvider>
    <td class="responsive-table px-1 sm:px-5 py-1 sm:py-3 mt-2 border sm:border-0 rounded select-none" :class="{ 'bg-gray-200 border-gray-400 border-4 sm:bg-white' : picked == '0' }">
    <label class="inline-flex w-full items-center cursor-pointer">
        <input type="radio" class="form-radio hidden sm:block border-black" v-model="picked" :name="name" value="0">
        <div class="flex flex-row ml-2 my-1 sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">0</div>
            <p class="mx-2 text-gray-800 text-sm" :class="{ 'font-semibold' : picked == '0' }">Tidak terjadi pada saya sama sekali</p>
        </div>
    </label>
    </td>
    <td class="responsive-table px-1 sm:px-5 py-1 sm:py-3 mt-2 border sm:border-0 rounded select-none" :class="{ 'bg-gray-200 border-gray-400 border-4 sm:bg-white' : picked == '1' }">
    <label class="inline-flex w-full items-center cursor-pointer">
        <input type="radio" class="form-radio hidden sm:block border-black" v-model="picked" :name="name" value="1">
        <div class="flex flex-row ml-2 my-1 sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">1</div>
            <p class="mx-2 text-gray-800 text-sm" :class="{ 'font-semibold' : picked == '1' }">Jarang terjadi pada saya</p>
        </div>
    </label>
    </td>
    <td class="responsive-table px-1 sm:px-5 py-1 sm:py-3 mt-2 border sm:border-0 rounded select-none" :class="{ 'bg-gray-200 border-gray-400 sm:bg-white' : picked == '2' }">
    <label class="inline-flex w-full items-center cursor-pointer">
        <input type="radio" class="form-radio hidden sm:block border-black" v-model="picked" :name="name" value="2">
        <div class="flex flex-row ml-2 my-1 sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">2</div>
            <p class="mx-2 text-gray-800 text-sm" :class="{ 'font-semibold' : picked == '2' }">Kadang terjadi pada saya</p>
        </div>
    </label>
    </td>
    <td class="responsive-table px-1 sm:px-5 py-1 sm:py-3 mt-2 border sm:border-0 rounded select-none" :class="{ 'bg-gray-200 border-gray-400 border-4 sm:bg-white' : picked == '3' }">
    <label class="inline-flex w-full items-center cursor-pointer">
        <input type="radio" class="form-radio hidden sm:block border-black" v-model="picked" :name="name" value="3">
        <div class="flex flex-row ml-2 my-1 sm:hidden">
            <div class="my-auto w-4 h-4 align-center inline-block bg-gray-500 text-center text-white text-xs rounded">3</div>
            <p class="mx-2 text-gray-800 text-sm" :class="{ 'font-semibold' : picked == '3' }">Sering terjadi pada saya</p>
        </div>
    </label>
    </td>
</tr>
</template>

<script>
export default {
    name: 'Content',
    data: function() {
        return {
            picked: '',
        }
    },
    props: {
        name: String,
        text: String,
        subtext: String,
    },
    computed: {
        pickedClasses() {
            return 'bg-gray-200'
        },
    }
}
</script>

<style>
/* Responsive table */
@media screen and (max-width: 640px) {
  table caption .responsive-table {
    font-size: 1.3em;
  }
  
  table thead .responsive-table {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr .responsive-table {
    display: block;
    margin-bottom: .625em;
  }
  
  table td .responsive-table {
    display: block;
    text-align: left;
  }
  
  table td::before .responsive-table {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>