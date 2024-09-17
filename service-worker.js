const CACHE_NAME = 'studytask-cache-v1';
const urlsToCache = [
'/',
'/index.html',
'https://raw.githubusercontent.com/Luanzinh0fc/Luanzinh0fc-Banco-de-dados-p-blicos/main/1000008714-removebg.png',
'https://raw.githubusercontent.com/StudyTask-ai/Esse-cone-o-de-/main/PORTUGU%C3%8AS.gif',
'https://raw.githubusercontent.com/StudyTask-ai/Esse-cone-o-de-/main/INGL%C3%8AS.gif',
'https://github.com/StudyTask-ai/Esse-cone-o-de-/blob/main/MATEM%C3%81TICA.gif?raw=true',
'https://github.com/StudyTask-ai/Esse-cone-o-de-/blob/main/CI%C3%8ANCIAS%20DA%20NATUREZA.gif?raw=true',
'https://github.com/StudyTask-ai/Esse-cone-o-de-/blob/main/CI%C3%8ANCIAS%20HUMANAS.gif?raw=true',
'https://github.com/StudyTask-ai/Esse-cone-o-de-/blob/main/educa%C3%A7%C3%A3o%20f%C3%ADsica.gif?raw=true',
'https://github.com/StudyTask-ai/Esse-cone-o-de-/blob/main/qualifica%C3%A7%C3%A3o%20Profissional.gif?raw=true',
'https://cdn-icons-png.flaticon.com/128/15414/15414401.png'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
console.log('Cache aberto');
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
// Retorna o recurso em cache, se disponível
if (response) {
return response;
}
// Faz o fetch da rede se não estiver no cache
return fetch(event.request);
})
);
});
