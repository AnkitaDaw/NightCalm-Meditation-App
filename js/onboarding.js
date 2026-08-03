  function showScreen(id){
    const screens = document.querySelectorAll('.screen');
    if(!screens.length) return;
    screens.forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(id);
    if(!screen) return;
    screen.classList.add('active');
    const phone = document.querySelector('.phone');
    if(phone) phone.scrollTop = 0;
    window.scrollTo(0,0);
  }

  function setAuthState(isLoggedIn){
    localStorage.setItem('night-calm-auth', isLoggedIn ? 'logged-in' : 'guest');
  }

  function getAuthState(){
    return localStorage.getItem('night-calm-auth') || 'guest';
  }

  function togglePw(inputId, btn){
    const input = document.getElementById(inputId);
    if(!input) return;
    const icon = btn.querySelector('i');
    if(input.type === 'password'){
      input.type = 'text';
      icon.classList.remove('bi-eye'); icon.classList.add('bi-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('bi-eye-slash'); icon.classList.add('bi-eye');
    }
  }

  // Build simple skyline silhouettes with random lit windows
  function buildSkyline(elId, count){
    const el = document.getElementById(elId);
    if(!el) return;
    let html = '';
    for(let i=0;i<count;i++){
      const h = 30 + Math.random()*70;
      html += `<div class="bldg" style="height:${h}%;">`;
      const winCount = Math.floor(h/14);
      for(let w=0; w<winCount; w++){
        if(Math.random() > 0.45){
          html += `<div class="win" style="left:${20+Math.random()*50}%; bottom:${10 + w*16}%;"></div>`;
        }
      }
      html += `</div>`;
    }
    el.innerHTML = html;
  }

  window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      setTimeout(() => {
        splashScreen.classList.add('fade-out');
      }, 1000);
    }

    if(!document.querySelector('.screen.active')){
      const firstScreen = document.getElementById('screen-onboard1');
      if(firstScreen) firstScreen.classList.add('active');
    }

    buildSkyline('skyline1', 14);
    buildSkyline('skyline2', 16);
    buildSkyline('skyline3', 14);

    const registerForm = document.getElementById('registerForm');
    if(registerForm){
      registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        if(this.checkValidity() === false){ e.stopPropagation(); this.classList.add('was-validated'); return; }
        const p1 = document.getElementById('regPass').value;
        const p2 = document.getElementById('regPass2').value;
        if(p1 !== p2){ alert("Passwords don't match."); return; }
        setAuthState(true);
        window.location.href = 'home.html';
      });
    }

    const loginForm = document.getElementById('loginForm');
    if(loginForm){
      loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        if(this.checkValidity() === false){ e.stopPropagation(); this.classList.add('was-validated'); return; }
        setAuthState(true);
        window.location.href = 'home.html';
      });
    }
  });
