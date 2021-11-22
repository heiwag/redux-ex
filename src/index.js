import { createStore } from 'redux'

function countReducer(state = { value: 0 }, action) {
	switch (action.type) {
		case 'counter/incremented':
			return { value: state.value + 1 }
		case 'counter/decremented':
			return { value: state.value - 1 }
		default:
			return state
	}
}

let store = createStore(
	countReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })

document.querySelector('#btn').addEventListener('click', function () {
	if (window.__REDUX_DEVTOOLS_EXTENSION__) {
		window.__REDUX_DEVTOOLS_EXTENSION__.send('custom/btnClick', {
			time: Date.now(),
		})
	}
})
