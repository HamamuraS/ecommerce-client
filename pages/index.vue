<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2 bg-light">
        <h3 class="mt-3">{{ searchQuery }}</h3>
        <div v-for="(filter, index) in filters" :key="'filter-' + index" class="filter-section mt-4">
          <h6>{{ filter.title }}</h6>
          <ul class="list-unstyled">
            <li v-for="(option, optIndex) in filter.options" :key="'option-' + optIndex">
              <a href="" rel="nofollow" class="text-decoration-none text-muted">{{option}}</a>
            </li>
            <form v-if="filter.type==='RANGE'" method="post" class="d-flex align-items-center gap-1">
                <input type="text" class="form-control form-control-sm" style="width: 65px;" placeholder="Min" />
                <span class="text-muted">-</span>
                <input type="text" class="form-control form-control-sm" style="width: 65px;" placeholder="Max" />
                <button type="submit" class="btn btn-primary btn-sm btn-icon rounded-circle">
                  <i class="bi bi-arrow-right"></i>
                </button>
            </form>
          </ul>
        </div>
      </div>

      <div class="col-12 col-md-9 col-lg-10 main-content">
        <div class="row">
          <div
            v-for="(product, index) in products"
            :key="'product-' + index"
            class="col-md-4"
          >
            <div
              class="card mb-3 shadow product-card"
              @click="selectProduct(product)"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
            >
              <img :src="product.photoURL" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p
                  class="card-text d-inline-block text-truncate"
                  style="max-width: 100%"
                >
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <product-modal :product="selectedProduct" @add-to-cart="addToCart" />
    <ShoppingCart v-model="shoppingCart" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          title: 'Brands',
          type: 'SELECTION',
          options: ['Canon', 'Nikon', 'Sony', 'Fujifilm']
        },
        {
          title: 'Price',
          type: 'RANGE',
          options: ['Under $100', '$100 - $200', '$200 - $300', '$300 - $400', '$400 - $500', '$500 - $600', '$600 - $700']
        }
      ],
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
          description: 'This is a camera model 3 with a long descriptiooooooooooooooooooooooooooooooooooooooooooooooooooooooon',
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
      shoppingCart: [],
      selectedProduct: {
        name: 'Sample Product',
        description: 'This is a sample product description.'
      },
      searchQuery: 'Techie'
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
    },
    selectProduct(product) {
      this.selectedProduct = product;
    }
  }
}
</script>


<style scoped>
.product-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.btn-icon {
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon i {
  font-size: 10px;
}
</style>