import { call } from 'redux-saga/effects'

export default function * root () {
  yield call(console.log, 'Start saga')
}
