/* eslint-disable */
let CRender = {
  name: "c-render",
  abstract: true,
  props: {
    render: {
      type: [Function, Boolean],
      default: true
    }
  },
  render() {
    let isRender;
    if (typeof isRender === "function") {
      isRender = this.render();
    } else {
      isRender = this.render;
    }
    return isRender ? this.$slots.default[0] : null;
  }
};

const install = Vue => {
  Vue.component("c-render", CRender);
};
export default { install };
