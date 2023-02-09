import { createStore } from 'vuex'

const mutations = {
  increment(state) {
    state.counter++
  }
}

const state = {
  counter: 0,
  fonts: [
    {
      mono: "font-family: 'Xanh Mono', monospace;"
    },
    {
      serif: "font-family: 'Playfair Display', serif;"
    },
    {
      display: "font-family: 'Monoton';"
    }
  ],
  bgColors: [
    {
      darkPurple: 'background-color: #2A0057;'
    },
    {
      purple: 'background-color: #6800D6;'
    },
    {
      mintGreen: 'background-color: #B4E0D4;'
    },
    {
      pastelGreen: 'background-color: #53A68E;'
    },
    {
      ashGreen: 'background-color: #76948C;'
    },
    {
      neonGreen : "background-color: #00E09F;"
    },
    {
      grayGreen : "background-color: #50635E;"
    }
  ]
}

export default createStore({ mutations: mutations, state: state, strict: true })
