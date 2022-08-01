import './app.css';

document.querySelector('#app').innerHTML = `
  <main class= 'bg-pink-200 h-full w-full text-xs' >
  <nav>
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
  <div class='flex justify-center items-center'>
  <div class='flex'>
  <div class='flex flex-col justify-center items-center'>
  </div>
  </div>
  </div>
  </div>
  </main>
`;
