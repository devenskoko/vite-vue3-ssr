<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
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
