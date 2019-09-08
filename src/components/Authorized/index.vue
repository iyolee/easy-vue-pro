<script>
import { check } from "../../utils/auth";
export default {
  funcional: true,
  props: {
    authority: {
      type: Array,
      required: false
    }
  },
  render() {
    return check(this.$props.authority) ? this.$scopedSlots.default() : null;
  }
};
</script>
