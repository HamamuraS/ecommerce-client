<template>
  <div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Total - ${{ totalSum }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column">
        <div v-for="(product, index) in modelValue" :key="'cart-product-'+index" class="card mb-3">
          <cart-item 
            :product="product"
            @remove-from-cart="removeFromCart"
          />
        </div>
      </div>
      <div class="mt-auto pt-3 border-top border-primary-subtle d-flex justify-content-center mb-3">
          <button class="btn btn-outline-primary">
            Checkout
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  computed: {
    totalSum() {
      let sum = 0;
      
      for (const product of this.modelValue) {
        sum += product.price * product.amount;
      }
      
      return sum;
    }
  },
  methods: {
    removeFromCart(product) {
      const shoppingCart = this.modelValue;
      const productIndex = shoppingCart.findIndex(p => p.uuid === product.uuid);
      shoppingCart[productIndex].amount--;
      
      if (shoppingCart[productIndex].amount === 0) {
        shoppingCart.splice(productIndex, 1);
      }
      
      this.$emit('update:modelValue', shoppingCart);
    }
  }
}
</script>