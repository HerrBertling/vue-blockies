<template>
  <img :src="blockie" />
</template>

<script>
import blockies from "ethereum-blockies"

export default {
  name: "VueBlockie",
  props: {
    /**
     * Seed used to generate icon data, default: random
     */
    seed: {
      type: String,
      default: "randomString",
    },
    /**
     * To manually specify the icon color, default: random
     */
    color: {
      type: String,
      default: "#41B883",
    },
    /**
     * Choose a different background color, default: random
     */
    bgcolor: {
      type: String,
      default: "#35495E",
    },
    /**
     * Width/height of the icon in blocks, default: 8
     */
    size: {
      type: Number,
      default: 8,
    },
    /**
     * Width/height of each block in pixels, default: 4
     */
    scale: {
      type: Number,
      default: 4,
    },
    /**
     * Each pixel has a 13% chance of being of a third color,
     * default: random. Set to -1 to disable it. These "spots" create structures
     * that look like eyes, mouths and noses.
     */
    spotColor: {
      type: String,
      default: "#000",
    },
  },

  computed: {
    blockie() {
      const canvas = blockies.create({
        seed: this.seed,
        color: this.color,
        bgcolor: this.bgcolor,
        size: this.size,
        scale: this.scale,
        spotColor: this.spotColor,
      })
      return canvas.toDataURL()
    }
  }
}
</script>
