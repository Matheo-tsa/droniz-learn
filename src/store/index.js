import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		restaurantName: "La belle vue",
		shoppingCart: 0,
		simpleMenu: [
			{
				name: "Croissant",
				inStock: true,
				quantity: 1,
				price: 2.99
			},
			{
				name: "Baguette de pain",
				inStock: true,
				quantity: 1,
				price: 3.99
			},
			{
				name: "Éclair",
				inStock: false,
				quantity: 1,
				price: 4.99
			}
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
	},
	mutations: {
		ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
			state.shoppingCart += amount
		}
	},
	actions: {
		updateShoppingCart({ commit }, amount) {
			commit("ADD_ITEMS_TO_SHOPPING_CART", amount)
		}
	},
	modules: {}
})