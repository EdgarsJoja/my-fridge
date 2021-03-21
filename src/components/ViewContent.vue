<template>
  <div class="view-content p-4">
    <div class="max-w-xl mt-0 mb-0 ml-auto mr-auto">
      <h1 class="text-gray-50 text-4xl mb-8">
        <slot name="header"></slot>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>
