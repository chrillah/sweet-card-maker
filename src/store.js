import { createStore } from 'vuex'

const mutations = {
  savedPosters(state, poster){
    state.showSaved = true
    state.posters.push(poster)
  },

  removePoster(state, posterToRemove){
    state.showRemoved = false
    state.showSaved = true
    const tempArray = state.posters
    for(let i = 0; i< tempArray.length;i++){
      if(!posterToRemove){
        state.posters.push(tempArray[i])
      }
    }
  },
  // increment(state) {
  //   state.counter++
  // },


  moveCar(state) {
    state.numberOfClick++
    state.right += 10
    if (state.numberOfClick > 20) {
      state.right = -50
      state.numberOfClick = 0
    }
  }
}

const state = {
  showSaved : false,
  showRemoved : false,
  posters : [],
  // counter: 0,
  right: -50,
  numberOfClick: 0,
  posterStyles : [],
  fonts: {
    mono: "font-family: 'Xanh Mono', monospace;",
    serif: "font-family: 'Playfair Display', serif;",
    display: "font-family: 'Monoton';",
    monoItalic: "font-family: 'Xanh Mono', monospace;font-style: italic;",
    serifItalic: "font-family: 'Playfair Display', serif;font-style: italic;",
    displayItalic: "font-family: 'Monoton';font-style: italic;"
  },
  bgColors: {
    darkPurple: 'background-color: #2A0057;',
    purple: 'background-color: #6800D6;',
    mintGreen: 'background-color: #B4E0D4;',
    pastelGreen: 'background-color: #53A68E;',
    ashGreen: 'background-color: #76948C;',
    neonGreen: 'background-color: #00E09F;',
    grayGreen: 'background-color: #50635E;'
  }
}

export default createStore({ mutations: mutations, state: state, strict: true })
