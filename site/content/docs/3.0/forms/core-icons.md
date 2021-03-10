---
layout: icon-list
title: Core Icons
description: Icons
group: components
toc: true
source: Webstop
---

    
          
    
## Usage
Add the script into head
<pre><code>&#x3C;script src=&#x22;https://kit.fontawesome.com/070d2da37d.js&#x22; crossorigin=&#x22;anonymous&#x22;&#x3E;&#x3C;/script&#x3E;</code></pre>


    
## Sizing
           
<row> 
{{< example >}}
  <i class="fas fa-camera fa-xs"></i>
  <i class="fas fa-camera fa-sm"></i>
  <i class="fas fa-camera fa-lg"></i>
  <i class="fas fa-camera fa-2x"></i>
  <i class="fas fa-camera fa-3x"></i>
  <i class="fas fa-camera fa-5x"></i>
  <i class="fas fa-camera fa-7x"></i>
  <i class="fas fa-camera fa-10x"></i>
{{< /example >}}
</row>
         
<div class="container">
        <div class="row d-flex">
  <div class="col">
    <div class="card">
      {{< example-icons >}}
      <i class="fas fa-camera fa-3x"></i>
      {{< /example-icons >}}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>         
{{< example >}}

{{< /example >}}

<section class="pt-5 pb-5">
      <div class="container">
        <div class="row d-flex">
          {{ range .Pages }}
          <div class="col-md-4 mb-4 ">
            <div class="card card-body card-box text-center h-100">
              <div class="title">
                <h3><a href="{{ .URL }}">{{ .Title }}</a></h3>
              </div>
              <div class="text">
                <p>{{ .Description }}</p>
              </div>
              <a href="{{ .URL }}">Learn More</a>
            </div>
          </div>
          {{ end }}
        </div>
      </div> 
      
     </section>  

 <div class="grid">
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="User">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-user-circle fa-2x"></i></p><p>User</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-user-circle&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
              </div>
            </div>
          </div>
            <div class="grid-item item col-md-3" data-toggle="admin" data-title="shopping list">
              <div class="grid-item-content">
                <div class="grid-card">
                  <div class="grid-card-title"><p><i class="fad fa-clipboard-list-check fa-2x"></i></p><p>Shopping List</p>
                   <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-clipboard-list-check&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                    </div>
                  <div class="grid-card-handle"></div>   
                </div>
              </div>
            </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="coffee">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-coffee-pot fa-2x"></i></p>  <p>Coffee</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-coffee-pot&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                <div class="grid-card-handle"></div> 
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="mail">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-envelope fa-2x"></i></p>  <p>Mail</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-envelope&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                <div class="grid-card-handle"></div>               
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="hamburger">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="far fa-bars fa-2x"></i></p><p>Hamburger</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;far fa-bars&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="cart">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-shopping-cart fa-2x"></i></p>  <p>Cart</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>                
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="arrow">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-arrow-up fa-2x"></i></p>  <p>Arrow Up</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-arrow-up&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>                
                <div class="grid-card-handle"></div>               
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="arrow">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-arrow-down fa-2x"></i></p><p>Arrow Down</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-arrow-down&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>               
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="arrow">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-arrow-left fa-2x"></i></p>  <p>Arrow Left</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-arrow-left&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>               
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="arrow">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-arrow-right fa-2x"></i></p>  <p>Arrow Right</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-arrow-right&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>                
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="check">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-check fa-2x"></i></p><p>Check</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-check&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="x, close">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="far fa-times fa-2x"></i></p>  <p>Close</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;far fa-times&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>                
                <div class="grid-card-handle"></div>                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="question">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-question-circle fa-2x"></i></p>  <p>Question</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-question-circle&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>               
                <div class="grid-card-handle"></div>               
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="info">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-info-circle fa-2x"></i></p><p>Info</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-info-circle&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="admin" data-title="tags">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-tags fa-2x"></i></p>  <p>Tags</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-tags&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="phone">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-mobile-alt fa-2x"></i></p>  <p>Phone</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-mobile-alt&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="login">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-sign-in fa-2x"></i></p><p>Sign In</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-sign-in&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="admin" data-title="logout">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-sign-out fa-2x"></i></p>  <p>Sign Out</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-sign-out&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="add plus">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-plus-circle fa-2x"></i></p>  <p>Add</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-plus-circle&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="subtract">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-minus-circle fa-2x"></i></p><p>Subtract</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-minus-circle&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="newsletter">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-newspaper fa-2x"></i></p>  <p>Newsletter</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-newspaper&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="pharmacy">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-prescription-bottle-alt fa-2x"></i></p>  <p>Pharmacy</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-prescription-bottle-alt&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-xl-3" data-toggle="admin" data-title="locator">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-search-location fa-2x"></i></p><p>Store Locator</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-search-location&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-xl-3" data-toggle="food" data-title="recipe">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-oven fa-2x"></i></p>  <p>Recipes</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-oven&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-xl-3" data-toggle="marketing" data-title="weekly ad">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-calendar-star fa-2x"></i></p>  <p>Weekly AD</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-calendar-star&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                 <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="calendar">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-calendar-alt fa-2x"></i></p><p>Calendar</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-calendar-alt&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="coupon">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-ticket fa-2x"></i></p>  <p>Coupon</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-ticket&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="produce">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-carrot fa-2x"></i></p>  <p>Produce</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-carrot&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="meat">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-meat fa-2x"></i></p><p>Meat</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-meat&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="food" data-title="dairy cow">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-cow fa-2x"></i></p>  <p>Dairy</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-cow&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="gluten free">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p> <span class="fa-layers fa-fw fa-2x">
                  <i class="fas fa-wheat" data-fa-transform="shrink-8"></i>
                  <i class="fas fa-ban"></i>
                  
                </span></p> <p>Gluten Free</p>
                 <p class="icon-code-snip"> &#x3C;span class=&#x22;fa-layers fa-fw fa-2x&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-wheat&#x22; data-fa-transform=&#x22;shrink-8&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;i class=&#x22;fas fa-ban&#x22;&#x3E;&#x3C;/i&#x3E;
                  
                &#x3C;/span&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="kosher">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p> <span class="fa-layers fa-fw fa-2x">
                  <i class="far fa-circle"></i>
                  <i class="fas fa-union" data-fa-transform="shrink-7"></i>
                </span></p> 
                  <p>Kosher</p>
                 <p class="icon-code-snip">&#x3C;span class=&#x22;fa-layers fa-fw fa-2x&#x22;&#x3E;
                  &#x3C;i class=&#x22;far fa-circle&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;i class=&#x22;fas fa-union&#x22; data-fa-transform=&#x22;shrink-7&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/span&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="dairy free">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p> <span class="fa-layers fa-fw fa-2x">
                  <i class="fas fa-cow" data-fa-transform="shrink-8"></i>
                  <i class="fas fa-ban"></i>
                  
                </span></p><p>Dairy Free</p>
                 <p class="icon-code-snip"> &#x3C;span class=&#x22;fa-layers fa-fw fa-2x&#x22;&#x3E;
                  &#x3C;i class=&#x22;fas fa-cow&#x22; data-fa-transform=&#x22;shrink-8&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;i class=&#x22;fas fa-ban&#x22;&#x3E;&#x3C;/i&#x3E;
                  &#x3C;/span&#x3E;</p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="leaf" data-title="vegan">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-leaf fa-2x"></i></p>  <p>Vegan</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-leaf&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="vegetarian salad">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-salad fa-2x"></i></p><p>Vegetarian</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-salad&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
                  
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="admin" data-title="contact">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-paper-plane fa-2x"></i></p>  <p>Contact</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-paper-plane&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
               
                 
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="edit">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-edit fa-2x"></i></p>  <p>Edit</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-edit&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="share">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-share-alt fa-2x"></i></p><p>Share</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-share-alt&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="print printable coupons">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-print fa-2x"></i></p>  <p>Printable</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-print&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="employee person dolly">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-person-dolly fa-2x"></i></p>  <p>Employee</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-person-dolly&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="bakery pie">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-pie fa-2x"></i></p><p>Bakery</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-pie&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="food" data-title="dessert ice cream">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-ice-cream fa-2x"></i></p>  <p>Dessert</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-ice-cream&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="organic">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fak fa-organic fa-2x"></i></p>  <p>Organic</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fak fa-organic&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="clock">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-clock fa-2x"></i></p><p>Clock</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-clock&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="admin" data-title="heart healthy">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-heart fa-2x"></i></p>  <p>Healthy</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-heart&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="money">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-money-bill-alt fa-2x"></i></p>  <p>Money</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-money-bill-alt&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="search">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-search fa-2x"></i></p><p>Search</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-search&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="admin" data-title="Link">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-link fa-2x"></i></p>  <p>Link</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-link&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="store storefront">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-store fa-2x"></i></p>  <p>Storefront</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-store&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="fish seafood">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-fish fa-2x"></i></p><p>Fish/Seafood</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-fish&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="food" data-title="frozen cold">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-temperature-frigid fa-2x"></i></p>  <p>Frozen</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-temperature-frigid&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="food" data-title="alcohol wine">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-glass-cheers fa-2x"></i></p>  <p>Alcohol</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-glass-cheers&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="beauty product soap">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-pump-soap fa-2x"></i></p><p>Beauty</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-pump-soap&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="food" data-title="catering">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-concierge-bell fa-2x"></i></p>  <p>Catering</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-concierge-bell&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="delivery">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-truck-container fa-2x"></i></p>  <p>Delivery</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-truck-container&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-xl-3" data-toggle="marketing" data-title="curbside">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-truck-loading fa-2x"></i></p><p>Curbside</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-truck-loading&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
         
          <div class="grid-item item col-xl-3" data-toggle="marketing" data-title="gifts">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-gifts fa-2x"></i></p>  <p>Gifts</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-gifts&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-xl-3" data-toggle="marketing" data-title="gift card">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-gift-card fa-2x"></i></p>  <p>Gift Card</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-gift-card&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-xl-3" data-toggle="marketing" data-title="floral flower">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-flower-daffodil fa-2x"></i></p>  <p>Floral</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-flower-daffodil&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                 <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="sale badge">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-badge-dollar fa-2x"></i></p><p>Sale</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-badge-dollar&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="community">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-users fa-2x"></i></p>  <p>Community</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-users&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="charity">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-hand-holding-heart fa-2x"></i></p>  <p>Charity</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-hand-holding-heart&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="qr code">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"><p><i class="fad fa-qrcode fa-2x"></i></p><p>QR Code</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-qrcode&#x22;&#x3E;&#x3C;/i&#x3E; </p>
                  </div>
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="marketing" data-title="barcode scan">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-barcode-scan fa-2x"></i></p>  <p>Barcode Scan</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-barcode-scan&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="parking">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-parking fa-2x"></i></p>  <p>Parking</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-parking&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="car">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-car fa-2x"></i></p>  <p>Car</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-car&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="admin" data-title="wrench">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fad fa-wrench fa-2x"></i></p>  <p>Wrench</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fad fa-wrench&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

          <div class="grid-item item col-md-3" data-toggle="social" data-title="twitter">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-twitter fa-2x"></i></p>  <p>Twitter</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-twitter&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="facebook">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-facebook fa-2x"></i></p>  <p>facebook</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-facebook&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="instagram">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-instagram fa-2x"></i></p>  <p>Instagram</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-instagram&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="youtube">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-youtube fa-2x"></i></p>  <p>youtube</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-youtube&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="pinterest">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-pinterest fa-2x"></i></p>  <p>pinterest</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-pinterest&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="app store">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-app-store-ios fa-2x"></i></p>  <p>App Store</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-app-store-ios&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>
          <div class="grid-item item col-md-3" data-toggle="social" data-title="google">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title">
                 <p><i class="fab fa-google-play fa-2x"></i></p>  <p>Google Play</p>
                 <p class="icon-code-snip">  &#x3C;i class=&#x22;fab fa-google-play&#x22;&#x3E;&#x3C;/i&#x3E; </p>                        
                </div>
                
                <div class="grid-card-handle"></div>
                
              </div>
            </div>
          </div>

         </div>
        

        <template class="grid-item-template">
          <div class="grid-item">
            <div class="grid-item-content">
              <div class="grid-card">
                <div class="grid-card-title"></div>
                <div class="grid-card-details"></div>
                <div class="grid-card-handle"></div>
                <div class="grid-card-remove">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        </template>

        
      </div>
      </div>
    </section>