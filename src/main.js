import './app.css';

document.querySelector('#app').innerHTML = `
  <main class= 'bg-pink-200 h-full w-full text-xs' >

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
  <div class='flex'>
  <div class='flex flex-col'>
  <div class='flex justify-center items-center mt-10 mx-5 flex-col'>
  <h1 class='text-3xl font-bold'>
  Trust is earned<br> through love and expression.<br>

  <span class='text-pink-700 '>Let us earn yours</span>
  </h1>
  <p class='text-gray-700'>
  We are reimagining the possibilities of your business<br> with high quality design and a web experience like never before.
  </p>

  </div>
  </div>
  </div>
  </div>

  </main>
`;
