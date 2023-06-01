/*
could be use as a:
  dameSpanOfuscado('https://www.rankia.cl/foros/bancos-cajas/')
and it returns:
  '<span rel="nofollow" data-reduce="=8ychpWYj1" data-reuse="ycvNmbhJ2Lz9mcvZ2LsNmLhl2auFmcuc3d39yL6MHc0RH" data-recycle="a" data-la1314="true">Abrir cuenta</span>'
or with some text:
  dameSpanOfuscado('https://www.rankia.cl/foros/bancos-cajas/', 'aqui my texto')
and it returns:
  '<span rel="nofollow" data-reduce="=8ychpWYj1" data-reuse="ycvNmbhJ2Lz9mcvZ2LsNmLhl2auFmcuc3d39yL6MHc0RH" data-recycle="a" data-la1314="true">aqui my texto</span>'

*/

const dameSpanOfuscado = (url, texto = 'Abrir cuenta') => {
  const line = btoa(url).split("").reverse("").join("")
  const firstPart = line.substring(0,10)
  const secondPart = line.substring(10, line.length - 1)
  const laLetra = line.substring(line.length - 1, line.length)

  return `<span rel="nofollow" data-reduce="${firstPart}" data-reuse="${secondPart}" data-recycle="${laLetra}" data-la1314="true">${texto}</span>`
}
