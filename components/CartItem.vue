
<template>
  <div class="row">
  <div class="col-md-4">
    <img :src="product.photoURL" class="img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">
        {{ product.name }}
      </h5>
      <p class="card-text">
        {{ product.description }}
      </p>
      <p class="card-text">
        ${{ product.price }} x {{ product.amount }}
      </p>
      <div class="d-grid">
        <button @click="removeFromCart(product)" class="btn btn-outline-secondary">
          Remove
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: [
      'product'
    ],
    methods: {
      removeFromCart(product) {
        this.$emit('remove-from-cart', product);
      }
    }
  }
</script>