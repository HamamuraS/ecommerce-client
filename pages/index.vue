<template>
  <div class="container">
    <div class="row">
      <div v-for="(product, index) in products"
        key="'product-' + index"
        class="col-md-4">
      <div class="card mb-3">
        <img :src="product.photoURL" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">
            {{ product.name }}
          </h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <div class="d-grid">
            <button @click="addToCart(product)" class="btn btn-outline-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    <ShoppingCart v-model="shoppingCart"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          uuid: '1',
          name: 'Camera model 1',
          description: 'This is a camera model 1',
          price: 100,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '2',
          name: 'Camera model 2',
          description: 'This is a camera model 2',
          price: 200,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '3',
          name: 'Camera model 3',
          description: 'This is a camera model 3',
          price: 300,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '4',
          name: 'Camera model 4',
          description: 'This is a camera model 4',
          price: 400,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '5',
          name: 'Camera model 5',
          description: 'This is a camera model 5',
          price: 500,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '6',
          name: 'Camera model 6',
          description: 'This is a camera model 6',
          price: 600,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          uuid: '7',
          name: 'Camera model 7',
          description: 'This is a camera model 7',
          price: 700,
          photoURL: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ],
      shoppingCart: [
        
      ]
    }
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  },
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem('shoppingCart', JSON.stringify(newValue));
      },
      deep: true
    }
  },
  methods: {
    addToCart(product) {
      let exists = false;
      
      for (const cartItem of this.shoppingCart) {
        if (cartItem.uuid === product.uuid) {
          cartItem.amount++;
          exists = true;
          break;
        }
      }
      
      if (!exists) {
        this.shoppingCart.push({
          ...product,
          amount: 1
        });
      }
      console.log('Product added to cart', product)
    } 
  }
}
</script>