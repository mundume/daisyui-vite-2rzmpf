const o=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};o();document.querySelector("#app").innerHTML=`
  <main class= 'bg-pink-200 h-full w-full text-xs overflow-hidden' >

  <nav class="font-bold">
  <div class='flex justify-around  items-center'>
    <div class='flex justify-center items-center border-r-2 border-gray-800 h-10'>
    <span class='mr-10'><img src='assets/img/logo.png' alt='google logo' class='w-10 h-7' /></span>
    
    </div>
    <div>
      <ul class='flex justify-center items-center'>
      <li class=' line mr-2'><span class='mr-3 cursor-pointer'>Work<span></li>
      <li class=' line mr-2'><span class='mr-3 cursor-pointer'>Team<span></li>
      <li class=' line mr-2'><span class='mr-3 cursor-pointer'>Connect<span></li>
      </ul>
     
    </div>
    

  </div>
  <hr class='border-b-1 border-gray-800'/>
  </nav>
  
  </div>
  </div>
  <div class=' flex flex-col sm:flex-row'>
  <div class='mt-10 mx-5 flex justify-center items-center w-full sm:w-2/3 h-full flex-col sm:mx-40 my-40 sm:flex-row '>
  <div class='w-full '>
  <h1 class='text-3xl sm:text-5xl font-bold'>
  Trust is earned through <br>love and expression.<br>

  <span class='text-pink-700 '>Let us earn yours</span>
  </h1>
  <p class='text-gray-700 mt-7'>
  We are reimagining the possibilities of your business<br> with high quality design and a web experience like never before.
  </p>
 <button class='bg-gray-700 text-white font-bold py-3 px-4 my-7 '>View more <i class="fa-solid fa-arrow-right ml-1"></i></button>
  </div>
  
  </div>
  <div class=' m-auto justify-center items-center w-1/3 sm:mx-20 my-20'>
  <div class='w-full h-full items-center justify-center'>
  <img src='assets/img/space-ship-svgrepo-com.svg' alt='illustration' />
  </div>
  </div>
  </div>

  </main>
`;
