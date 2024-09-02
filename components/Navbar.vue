
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        
        <NuxtLink to="/" class="navbar-brand">
          Online Store
        </NuxtLink>
        
        
        <div 
          class="sidebar offcanvas offcanvas-start bg-dark" 
          tabindex="-1" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-2">  
            <ul class="navbar-nav justify-content-start align-items-center flex-grow-md-down-1">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="nav-link">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="nav-link">
                Contact us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="nav-link">
                Hot sale!
              </NuxtLink>
            </li>
            </ul>
            <form class="d-flex mx-auto w-100 w-lg-50" @submit.prevent="performSearch">
              <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
            </form>
          </div>
        </div>

          <div class="d-flex gap-4">
            
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="bi bi-cart"></i>
            </button>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <i class="bi bi-justify"></i>
            </button>

          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    performSearch() {
      console.log('Searching for:', this.searchQuery); // logica de busqueda
      this.isSearchVisible = false;
    }
  }
}
</script>

<style>

  @media 
  (max-width: 767.98px) {
      .flex-grow-md-down-1 {
          flex-grow: 1 !important;
      }
  };
  
  @media 
  (min-width: 992px) {
      .w-lg-50 {
          width: 50% !important;
      }
  };
        
</style>
