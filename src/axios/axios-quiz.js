import axios from 'axios'

export default axios.create({
  baseURL: 'https://tatl-creator-quiz.firebaseio.com/'
})