<template>
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center">
                <img :src="product.photoURL" class="img-fluid rounded-start" :alt="product.name">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <h5 class="modal-title" id="productModalLabel">{{ product.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <p class="card-text">{{ product.description }}</p>
                  <p class="card-text"><small class="text-body-secondary">Price: ${{ product.price }}</small></p>
                  <div class="d-flex justify-content-end gap-2 mt-3">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addToCart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
}
</script>