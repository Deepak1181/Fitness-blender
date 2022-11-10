import { Stack,Box, Button, Link, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

export default function () {
  return (
    <div>
     <div  style={{
        backgroundColor: "rgb(49,172,201)",
        display:"flex"
      
      }}>
        <div style={{
       color:"white",
       marginTop:"50px"
      
      }}>
        <h1>Feel Great.</h1>
        <h1>Body and Mind.</h1>
        <p style={{
            width:"50%",
            marginLeft:"150px"
        }}>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</p>
       
      <Button>Join Now</Button>
        </div>
     <img  src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" alt=""  style={{ height:"400px"}}></img>
    
     </div>
    
<div style={{
           
            backgroundColor:"rgb(243,231,247)"
           
        }}>
    <div style={{
            width:"28%",
            marginLeft:"350px",
            backgroundColor:"rgb(243,231,247)"
           
        }}>

    <h1>Introducing FB Plus Passes</h1>
     <p>Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule.</p>
   <Button>BUY A PASS</Button>
   <div style={{
            width:"80%",
            marginLeft:"-110px",
           
           
        }}>
   
    <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp" alt="" style={{
          height:"200px",
         
        }}/>
   </div>
    </div>
    </div>


<div style={{
         display:"grid",
         gridTemplateColumns:"repeat(2,1fr)",
         marginLeft:"15px"
         
        }}>

<div style={{
    width:"100%" ,
    backgroundColor:"rgb(241,245,246)"  
        }}>
  <h1>Workout Videos</h1>
  <p>Exercise with certified personal trainers whether you’re at home or on the road.</p>
  <h5>Find a Workout</h5>
  <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp" alt="" style={{
    width:"100%"     
        }} />
</div>


<div style={{
    width:"100%",
  backgroundColor:"rgb(249,253,252)"
        }}>
  <h1>Programs</h1>
  <p>Professionally designed programs take the guesswork out of exercising.</p>
  <h5>Browse All Programs</h5>
  <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp" alt=""  style={{
    width:"100%"     
        }}/>
</div>



<div style={{
    width:"100%"  ,
    backgroundColor:"rgb(1,1,0)"   
        }}>
  <h1 style={{
    color:"white"
        }}>Wellness Articles</h1>
  <p style={{
    color:"white"
        }}>Research-backed articles to help you care for your body and mind.</p>
  <h5 style={{
    color:"white"
        }}>Learn from Experts</h5>
  <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp" alt=""  style={{
    width:"100%"     
        }}/>
</div>



<div style={{
    width:"100%",
    backgroundColor:"rgb(219,219,218)"     
        }}>
  <h1>Healthy Recipes</h1>
  <p>Fuel your day with recipes by Registered Dietitians and professional chefs.</p>
  <h5>Find a Recipe</h5>
  <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp" alt="" style={{
    width:"100%"     
        }} />
</div>

</div>





<div  style={{
 backgroundColor:"rgb(238,250,255)"     
        }}>
  <h1>Supportive Community</h1>
  <p>Stay motivated and engaged with a little help from a supportive community of other members.</p>
  <h5>Become a Member</h5>
  <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-1440.webp" alt=""  style={{
    width:"100%"     
        }} />
</div>



    </div>
  )
}
