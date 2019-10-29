import $ from 'jquery'

export const state = () => ({
  list: {},
  id: 1,
  shopCar:[]
})

export const mutations = {
  changeID(state, id) {
    state.id = id
  },
  changeList(state, obj) {
    state.shopCar=obj
    // console.log(state.shopCar, "vuex")
    let arr= state.shopCar.filter((item, index) => {
      return item.id==state.id
    })
    // console.log(arr,"arr")
    state.list=arr[0]
  },
}

export const actions = {
  get(context) {
    $.ajax({
      url: 'http://localhost:8000/shopxiang',
      type: 'post',
      data: {
        id: context.state.id
      }
    }).then(res => {
      // console.log(res)
      context.commit("changeList",res.content)
    })
 }
}

export const getters = {
  addCount(state) {
    return state.shopCar.filter((item, index) => {
      return item.count+=1
    })
  }
}