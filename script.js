//projects frames
let pages = [];
pages[0] = document.getElementById("iframe1");
pages[1] = document.getElementById("iframe2");
pages[2] = document.getElementById("iframe3");

//initial page source
document.getElementById('goto').href = pages[0].src ;

//to load initial frame
for (let i=1; i<pages.length; i++)
{
   pages[i].style.display = "none";
}

//function to change as per button click
document.getElementById('buttons').addEventListener('click',changerfunk);
let j=1;

function changerfunk(event)
{
    if(event.target.innerHTML === "Next")
    {
      if(j<pages.length)
        {
          for(let k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
                document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j++;
        }
      else
        {
          j = 0;
          for(k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
                document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j++;
        }
    }
    else
    {
        if(j>=0)
        {
          for(let k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
                document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j--;
        }
      else
        {
          j = pages.length-1;
          for(k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
                document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j--;
        }
    
    }
    
}

let slideshowinterval = setInterval(timefunk, 5000)

function timefunk()
{
    if(j<pages.length)
        {
          for(let k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
              document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j++;
        }
      else
        {
          j = 0;
          for(k=0; k<pages.length; k++)
          {
            if(k==j)
            {pages[k].style.display = "block";
                document.getElementById('goto').href = pages[k].src ;
            }
            else
            {pages[k].style.display = "none";}
          }
          j++;
        }
}

document.getElementById('pageview').addEventListener('mouseover',pausefunction)

function pausefunction()
{
    clearInterval(slideshowinterval);

}
document.getElementById('pageview').addEventListener('mouseout',resumefunk);

function resumefunk()
{
    slideshowinterval = setInterval(timefunk, 5000);
}