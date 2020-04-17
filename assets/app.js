const items =document.getElementsByClassName('sitem');
function sitemEnter(event)
{
     
    anime({
        targets: event.target.children[0],
        // Properties 
        rotateZ: '360deg',
        scaleX:'0.8',
        scaleY:'0.8',
        visibility:'hidden',
        // Property Parameters
        duration: 200,
        easing: 'linear'
        // Animation Parameters
        // direction: 'alternate'
      });  
     
}

function sitemLeave(event)
{
     
    anime({
        targets: event.target.children[0],
        // Properties 
        rotateZ: '-360deg',
        scaleX:'1',
        scaleY:'1',
        // Property Parameters
        duration: 200,
        easing: 'linear'
        // Animation Parameters
        // direction: 'alternate'
      });  
     
}
 

for(let i=0;i<items.length;i++){
    items[i].addEventListener('mouseenter',sitemEnter);
    items[i].addEventListener('mouseleave',sitemLeave);
}