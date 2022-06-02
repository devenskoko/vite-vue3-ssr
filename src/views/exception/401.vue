<template>
  <n-result
    status="403"
    size="huge"
    title="403 禁止访问"
    description="总有些门是对你关闭的"
  >
    <template #footer>
      <n-button>放轻松</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: "home",
  });
};
</script>
