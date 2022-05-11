<template>
  <div>
    <h1>Signin callback</h1>
  </div>
</template>

<script>
export default {
  name: 'SigninCallback',
  async created() {
    console.log('Signin callback path', this.$route);
    const callbackUrl = window.location.origin + this.$route.fullPath;
    await this.$auth.userManager.signinCallback(callbackUrl);
    this.$router.replace({ name: 'home' });
  }
}
</script>
