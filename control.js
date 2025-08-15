
	let pantalla = document.querySelector(".pantalla");

  const paneles = Array.from(document.getElementsByClassName("panel"));
  
  
  
  
  
  
	function transicion(elemento, accion){
	  
	  
		if(accion){
		  
		  
			elemento.classList.remove("fadeOut");
			elemento.classList.add("fadeIn");
			
			
      const rect = elemento.getBoundingClientRect();
      
      const targetY = rect.top + window.pageYOffset;
  
      window.scrollTo({ top: targetY, behavior: "smooth" });

			
			
		}else{
			
			elemento.classList.remove("fadeIn");
			elemento.classList.add("fadeOut");
			
		}
		
		
	}
	
	
	
	
	
	
  const io = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => { 

			transicion(entry.target, entry.isIntersecting)
      
    });
    
    
  }, {
    
		threshold: 0.3
    
  });
  
  
  
  

  for (let i = paneles.length-1; i > -1; i--){
    
    io.observe(paneles[i]);
    
  }




