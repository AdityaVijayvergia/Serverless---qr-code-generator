const qr = require('qr-image')

const generate = async request => {
  const body = await request.json();
  const text = body.text;
  const qr_png = qr.imageSync(text||"https://workers.dev")
  return new Response(qr_png, {headers})
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

// const generate = async request => {
//   return new Response("Hello worker!", { 
//     status: 200,
//     headers: { 'content-type': 'text/plain' }
//   });
// }

async function handleRequest(request) {
  if(request.method == "POST"){
    response = await generate(request)
  }
  else{
    response = new Response('Expected POST', {status:405})
  }
  return response;
 
}
