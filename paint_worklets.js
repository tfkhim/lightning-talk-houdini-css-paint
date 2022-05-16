registerPaint(
  'checkerboard',
  class {
    paint(ctx, geom, properties) {
      const numColumns = Math.floor(geom.width / 30)
      const numRows = Math.floor(geom.height / 30)
      const evenStyle = 'grey'
      const oddStyle = 'lightblue'
      for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
          const isEvenStyle = (column + row) % 2 == 0
          ctx.fillStyle = isEvenStyle ? evenStyle : oddStyle
          ctx.fillRect(column * 30, row * 30, 30, 30)
        }
      }
    }
  }
)

registerPaint(
  'linear_gradient',
  class {
    paint(ctx, geom, properties) {
      const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height)
      gradient.addColorStop(0.1, 'rgba(0, 0, 0, 0)')
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 1)')
      gradient.addColorStop(0.9, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, geom.width, geom.height)
    }
  }
)
