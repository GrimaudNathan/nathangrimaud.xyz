module.exports = {
  extends: ['plugin:vue/vue3-essential', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ["Home", "Work", "Contact", "About"],
      },
    ],
  },
}
