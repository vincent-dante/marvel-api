export function FormatThumbnailUrl(path, extension) {
  if (path === undefined && extension === undefined)
    return 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'

  const url = path + '.' + extension
  return url.replace('http', 'https')
}

export function FormatDescription(description) {
  if (description === undefined) return description
  return description.replace(/[^a-z0-9 ,.?!]/gi, '')
}
