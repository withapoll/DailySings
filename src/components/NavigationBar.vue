<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="#">
        <img src="../../public/app-logo.svg" alt="Logo" />
      </a>
      <div class="nav-content d-flex align-items-center">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-house-fill"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-line"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-search me-2"></i>
            </a>
          </li>
        </ul>
        <div class="user-icon">
          <a class="nav-link" href="#">
            <i class="bi bi-person-circle"></i>
          </a>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"></div>
    </div>
  </nav>
</template>

<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<style lang="scss" scoped>
.navbar-brand {
  img {
    width: 3.125rem;
  }
}

.navbar {
  padding: 0.5rem 1rem;

  .nav-content {
    width: 100%;
  }

  .nav-link {
    color: #fff;
    margin-right: 2rem;

    i {
      color: #424242;
    }

    &:hover {
      color: #fff;

      i {
        color: #fff;
      }
    }
  }

  .nav-item:last-child .nav-link {
    margin-right: 0;
  }

  .bi-person-circle,
  .bi-house-fill,
  .bi-line,
  .bi-search {
    font-size: 1.7rem;
  }
}

.bi-house-fill:hover {
  color: #ffffff;
}

.bi-line:hover {
  color: #fff;
}

.bi-search:hover {
  color: #fff;
}

.bi-person-circle:hover {
  color: #fff;
}

.bg-dark {
  background-color: #131313 !important;
}
</style>
