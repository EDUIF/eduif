export default {
  methods: {
    dispatch (componentName, eventName, ...params) {
      let parent = this.$parent || this.$root;
      // 当无自定义组件名时取当前昵称
      const getName = () => parent.$options.componentName || parent.$options.name;
      let name = getName();
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) name = getName();
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(...params));
      }
    },
  },
};
