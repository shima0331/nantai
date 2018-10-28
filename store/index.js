import Vuex from 'vuex'
const shuffle = require('shuffle-array')
var quizzes = require('./quizzes.json')

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      quizzes,
      cards: [], // 取得したカード
      question_index: 0, // 問題番号
      questions: [] // 問題
    }),
    mutations: {
      // メッセージの書き換え
      setCards(state, payload) {
        state.cards = payload
      },
      setQuestions(state, payload) {
        state.questions = payload
      }
    },
    actions: {
      // prefで指定した県のデータをシャッフルする
      shuffle({ commit, state }, payload) {
        var unanswereds = state.quizzes.filter(
          quiz =>
            (payload.pref_id == 0 || payload.pref_id == quiz.pref_id) &&
            !state.cards.includes(quiz.id)
        )
        commit('setQuestions', shuffle(unanswereds))
      },
      loadCards({ commit, state }) {
        if (localStorage.getItem('nantaiCards')) {
          Object.assign(
            state.cards,
            JSON.parse(localStorage.getItem('nantaiCards'))
          )
        }
      },
      // 今ある state のメッセージを ストレージに保存
      saveCards({ commit, state }) {
        console.log(JSON.stringify(state.cards))
        localStorage.setItem('nantaiCards', JSON.stringify(state.cards))
      }
    },
    getters: {
      quizzes(state) {
        return state.quizzes
      },
      cards(state) {
        return state.cards
      },
      questions(state) {
        return state.questions
      }
    }
  })
}

export default createStore
