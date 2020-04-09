import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/helpers/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [], 
    products: [], 
    product: null 
  },
  mutations: {
    GET_PRODUCT_BYID(state, product) {
      state.product = product                                                                  
      sessionStorage.setItem('product', state.product)
    },
    GET_PRODUCTS(state, product) {
      state.products = product                                                                 
      sessionStorage.setItem('products', state.products)
    },
    ADD_TO_CART(state, {product, quantity}) {
      let exists = state.cart.find(item => { return item.product._id === product._id})           
      if(exists) {
        exists.quantity += quantity
        return
      }

      state.cart.push({product, quantity})
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => { return item.product._id !== id})
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    getProductById({commit}, id) {            
      axios.get('/products/' + id) 
      .then(res => { 
        if(res !== null) {
          commit('GET_PRODUCT_BYID', res.data)
        } 
      })
    },
    getProducts({commit}) {
      axios.get('/products')
      .then(res => {
        if(res !== null) {
          commit('GET_PRODUCTS', res.data)
        }
      })
    },
    addProductToCart({commit}, { product, quantity}) {
      commit('ADD_TO_CART', { product, quantity})
    },
    deleteProductFromCart({commit}, id) {
      commit('DELETE_FROM_CART', id)
    } 
  },
  getters: {
    products(state) {
      return state.products
    },
    product(state) {                                                           
      return state.product
    },
    shoppingCart(state) {
      state.cart = JSON.parse(localStorage.getItem('cart'))
      return state.cart
    },
    shoppingCartTotal(state) {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    },
    shoppingCartItemCount(state) {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    }
  }
})
