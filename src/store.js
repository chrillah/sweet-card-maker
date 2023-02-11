import { createStore } from 'vuex'

const mutations = {
  savedCards(state, card) {
    state.cards.push(card)
    state.showCards = true
    state.showSaved = false
    // console.log('Sparar ' + card)
    // state.showBackButton = true

    // state.showRemoved = true

  },

  numberOfCards(state){
    return state.cards.length
  },

  back(state){
    state.showSaved = false
  },

  showSaveButton(state) {
    state.showSaved = true
    state.showRemoved = false
  },

  // hideBackButton(state){
  //   state.showBackButton = false
  // },
  // hideSaveButton(state){
  //   state.showSaved = false
  // },
  // hideRemoveButton(state) {
  //   state.showRemoved = false
  // },

  removeCard(state, cardToRemove) {
    console.log('Tar bort ' + cardToRemove.title)
    state.showRemoved = false
    state.showSaved = true
    state.tempCardList = state.cards
    for (let i = 0; i < state.tempCardList.length; i++) {
      if (!cardToRemove) {
        state.cards.push(state.tempCardList[i])
        console.log(state.cards)
      }
    }
    if (state.cards === null) {
      state.showCards = false
    }
  }
  // increment(state) {
  //   state.counter++
  // },

  // moveCar(state) {
  //   state.numberOfClick++
  //   state.right += 10
  //   if (state.numberOfClick > 20) {
  //     state.right = -50
  //     state.numberOfClick = 0
  //   }
  // }
}

const state = {
  showBackButton : false,
  tempCardList : [],
  showSaved: false,
  showRemoved: false,
  showCards: false,
  cards: []
  // counter: 0,
  // right: -50,
  // numberOfClick: 0,
  // posterStyles: [],
  // fonts: {
  //   mono: "font-family: 'Xanh Mono', monospace;",
  //   serif: "font-family: 'Playfair Display', serif;",
  //   display: "font-family: 'Monoton';",
  //   monoItalic: "font-family: 'Xanh Mono', monospace;font-style: italic;",
  //   serifItalic: "font-family: 'Playfair Display', serif;font-style: italic;",
  //   displayItalic: "font-family: 'Monoton';font-style: italic;"
  // },
  // bgColors: {
  //   darkPurple: 'background-color: #2A0057;',
  //   purple: 'background-color: #6800D6;',
  //   mintGreen: 'background-color: #B4E0D4;',
  //   pastelGreen: 'background-color: #53A68E;',
  //   ashGreen: 'background-color: #76948C;',
  //   neonGreen: 'background-color: #00E09F;',
  //   grayGreen: 'background-color: #50635E;'
  // }
}

export default createStore({ mutations: mutations, state: state, strict: true })
