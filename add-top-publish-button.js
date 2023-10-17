window.addEventListener("load", () => {

    const form = document.querySelector('form.edit_post')
  
    if ( form ) {
      const title = document.querySelector('.rnk-SectionTitle_Main')
      const btn = document.createElement('button')
  
      btn.innerText = 'Publicar'
      btn.setAttribute('form', form.id)
      btn.classList.add('rnk-Forms_Button')
      title.appendChild(btn)
      
    }
});
