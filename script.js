// ---- DEMO 1: MANIPULASI DOM ----
function sapa() {
  const nama = document.getElementById('inp1').value.trim();
  const out = document.getElementById('out1');
  if (!nama) {
    out.innerText = '⚠ Masukkan nama dulu!';
    out.className = 'output err';
  } else {
    out.innerText = 'Halo, ' + nama + '! 👋 Selamat belajar JavaScript!';
    out.className = 'output ok';
  }
}

function resetSapa() {
  document.getElementById('inp1').value = '';
  const out = document.getElementById('out1');
  out.innerText = 'Hasil akan muncul di sini...';
  out.className = 'output';
}

// ---- DEMO 2: COUNTER ----
let angka = 0;

function ubahCounter(delta) {
  angka = delta === 0 ? 0 : angka + delta;
  const el = document.getElementById('counter');
  el.innerText = angka;
  el.style.color = angka < 0 ? '#e05a5a' : '#5a4fcf';
  el.classList.add('pop');
  setTimeout(() => el.classList.remove('pop'), 120);
}

// ---- DEMO 3: TO-DO LIST ----
function tambahTodo() {
  const input = document.getElementById('todo-inp');
  const teks = input.value.trim();
  if (!teks) return;

  const list = document.getElementById('todo-list');
  document.getElementById('todo-empty').style.display = 'none';

  const li = document.createElement('li');
  li.className = 'todo-item';

  const cb = document.createElement('button');
  cb.className = 'cb';
  cb.onclick = () => {
    li.classList.toggle('done');
    cb.classList.toggle('on');
    cb.innerText = li.classList.contains('done') ? '✓' : '';
  };

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.innerText = teks;

  const del = document.createElement('button');
  del.className = 'todo-del';
  del.innerText = '✕';
  del.onclick = () => {
    list.removeChild(li);
    if (!list.children.length) {
      document.getElementById('todo-empty').style.display = 'block';
    }
  };

  li.appendChild(cb);
  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);
  input.value = '';
  input.focus();
}
