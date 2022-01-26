const vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--invh', vh + 'px')

window.addEventListener('resize', function() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--invh', vh + 'px')
})
