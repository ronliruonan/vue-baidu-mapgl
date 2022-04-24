export function createPoint (BMapGLGL, options = {}) {
  const {lng, lat} = options
  return new BMapGLGL.Point(lng, lat)
}

export function createPixel (BMapGLGL, options = {}) {
  const {x, y} = options
  return new BMapGLGL.Pixel(x, y)
}

export function createBounds (BMapGLGL, options = {}) {
  const {sw, ne} = options
  return new BMapGLGL.Bounds(createPoint(BMapGLGL, sw), createPoint(BMapGLGL, ne))
}

export function createSize (BMapGLGL, options = {}) {
  const {width, height} = options
  return new BMapGLGL.Size(width, height)
}

export function createIcon (BMapGLGL, options = {}) {
  const {url, size, opts = {}} = options
  return new BMapGLGL.Icon(url, createSize(BMapGLGL, size), {
    anchor: opts.anchor && createSize(BMapGLGL, opts.anchor),
    imageSize: opts.imageSize && createSize(BMapGLGL, opts.imageSize),
    imageOffset: opts.imageOffset && createSize(BMapGLGL, opts.imageOffset),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMapGLGL, opts.infoWindowAnchor),
    printImageUrl: opts.printImageUrl
  })
}

export function createLabel (BMapGL, options = {}) {
  const {content, opts} = options
  return new BMapGL.Label(content, {
    offset: opts.offset && createSize(BMapGL, opts.offset),
    position: opts.position && createPoint(BMapGL, opts.position),
    enableMassClear: opts.enableMassClear
  })
}

export function createSymbol (BMapGL, options = {}) {
  const {path, opts} = options
  return new BMapGL.Symbol(global[path] || path, {
    anchor: opts.anchor && createSize(BMapGL, opts.anchor),
    fillColor: opts.fillColor,
    fillOpacity: opts.fillOpacity,
    scale: opts.scale,
    rotation: opts.rotation,
    strokeColor: opts.strokeColor,
    strokeOpacity: opts.strokeOpacity,
    strokeWeight: opts.strokeWeight
  })
}

export function createIconSequence (BMapGL, options = {}) {
  const {symbol, offset, repeat, fixedRotation} = options
  return new BMapGL.IconSequence(
    symbol && createSymbol(BMapGL, symbol),
    offset,
    repeat,
    fixedRotation
  )
}
