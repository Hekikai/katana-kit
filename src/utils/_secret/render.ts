import { Slot } from "vue";

export const hSlot = (slot?: Slot, otherwise = undefined) => {
    return slot !== void 0 ? slot() || otherwise : otherwise
}
