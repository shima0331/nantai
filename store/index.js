import Vuex from 'vuex'
const shuffle = require('shuffle-array')

const createStore = () => {
  return new Vuex.Store({
    state: {
      quizzes: [
        {
          id: 1,
          pref: 14,
          city: '神奈川県三浦市',
          city_yomi: 'しずおかけんみうらし',
          town: '海外町',
          town_yomi: 'かいとちょう'
        },
        {
          id: 2,
          pref: 14,
          city: '神奈川県川崎市川崎区',
          city_yomi: 'かながわけんかわさきしかわさきく',
          town: '砂子',
          town_yomi: 'いさご'
        },
        {
          id: 3,
          pref: 14,
          city: '横浜市保土ケ谷区',
          city_yomi: 'かながわけんよこはましほどがやく',
          town: '神戸町',
          town_yomi: 'ごうどちょう'
        },
        {
          id: 4,
          pref: 22,
          city: '静岡県沼津市',
          city_yomi: 'しずおかけんぬまづし',
          town: '小諏訪',
          town_yomi: 'こずわ'
        },
        {
          id: 5,
          pref: 22,
          city: '静岡県沼津市',
          city_yomi: 'しずおかけんぬまづし',
          town: '東熊堂',
          town_yomi: 'ひがしくまんどう'
        },
        {
          id: 6,
          pref: 22,
          city: '静岡県沼津市',
          city_yomi: 'しずおかけんぬまづし',
          town: '青野',
          town_yomi: 'おおの'
        },
        {
          id: 7,
          pref: 22,
          city: '静岡県熱海市',
          city_yomi: 'しずおかけんあたみし',
          town: '網代',
          town_yomi: 'あじろ'
        }
      ],
      cards: [], // 取得したカード
      question_index: 0, // 問題番号
      questions: [] // 問題
    },
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
            (payload.pref == 0 || payload.pref == quiz.pref) &&
            !state.cards.includes(quiz.id)
        )
        console.log(unanswereds)
        commit('setQuestions', shuffle(unanswereds))
      },
      getCards(commit) {
        // TODO ローカルストレージから取得するしてセット
        //axios.get('/api/message').then(function(response) {
        // 引数の commit を使って確定したデータをここからコミットする
        // commit('setCards', response.data.message)
        //})
      },
      // 今ある state のメッセージを ストレージに保存
      saveCards({ commit, state }) {
        // axios.put('/api/message', { message: state.message })
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
