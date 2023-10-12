const basePath = import.meta.env.VITE_API_BASEPATH

export function imgUrlTrans(url) {
  if (url && typeof url === 'string' && url.indexOf('static-resource') > -1) {
    const rawUrl = url
      ? (basePath.endsWith('/') ? basePath.substring(0, basePath.length - 1) : basePath) + url
      : null
    return window.DataEaseBi
      ? `${window.DataEaseBi.baseUrl}${rawUrl.startsWith('/api') ? rawUrl.slice(5) : rawUrl}`
      : rawUrl
  } else {
    return url
  }
}
