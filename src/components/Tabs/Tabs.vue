<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    padding: 0 !important;

    width: 100% !important;
  }

  ul {
    padding: 1rem 1.5rem !important;
  }

  .tabs {
    background: rgba(0, 128, 0, 0.397);
  }

}
.tabs {
  border-bottom: var(--primary-color);
  margin: 0 10px;
}

.tabs-details {
  padding: 10px;
}

ul {
  display: flex;
  padding: 0;
  list-style: none;

  li {
    margin-right: 40px;
  }

  .nav-item {
    font-size: 1.8rem;
    font-weight: bolder;
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
      transition: 0.5s ease;
    }

    &.is-active {
      color: var(--primary-color);
    }
  }
}
</style>
