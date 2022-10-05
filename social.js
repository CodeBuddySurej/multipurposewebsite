window.onload=function(){
    let instagram = document.getElementById('ig');
    let youtube = document.getElementById('yt');
    let github= document.getElementById('gh');
   
    
    instagram.addEventListener('click', function(){
        window.open("https://www.instagram.com/smhbluish/", '_blank');
        
    });

    youtube.addEventListener('click', function(){
        window.open("https://www.youtube.com/c/codebuddysurej", '_blank');
        
    });

    github.addEventListener('click', function(){
        window.open("https://github.com/codebuddysurej", '_blank');
        
    });


};
