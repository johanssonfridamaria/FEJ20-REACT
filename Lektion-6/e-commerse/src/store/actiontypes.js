const actiontypes = () => {
  return {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    }
  }
}

export default actiontypes;