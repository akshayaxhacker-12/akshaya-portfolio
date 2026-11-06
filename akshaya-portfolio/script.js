(function(){
  var boxes=document.querySelectorAll('#checks input');
  var n=document.getElementById('n'),bar=document.getElementById('bar'),v=document.getElementById('v'),why=document.getElementById('why');
  function update(){
    var s=0,r=[];
    boxes.forEach(function(b){if(b.checked){s+=+b.dataset.w;r.push(b.dataset.t);}});
    if(s>100)s=100;
    var lvl,c;
    if(s<=25){lvl='Low';c='var(--low)';}
    else if(s<=50){lvl='Medium';c='var(--med)';}
    else if(s<=75){lvl='High';c='var(--high)';}
    else{lvl='Critical';c='var(--crit)';}
    n.textContent=s;bar.style.width=s+'%';bar.style.background=c;
    v.textContent=lvl;v.style.color=c;
    why.textContent=r.length?('Contributing: '+r.join('; ')+'.'):'No indicators selected yet.';
  }
  boxes.forEach(function(b){b.addEventListener('change',update);});
  update();
})();
