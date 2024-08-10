import "./headimg2.css"
import img from "./main_img.png"

const Headimg2=()=>
{

  return(
    <section id="Home">
   

    <div class="main">

        <div class="men_text">
            <h1>Get Fresh<span>Food</span><br/>in a Easy Way</h1>
        </div>

        <div class="main_image">
            <img src={img}/>
        </div>

    </div>

    <p> Our food delivery app connects you to a wide range of local restaurants and cuisines, offering everything from fast food to gourmet dishes. Our user-friendly platform ensures a hassle-free experience from start to finish, and our dedicated delivery team guarantees your food arrives hot and on time.</p>

    <div class="main_btn">
        <a href="#.">Order Now</a>
        
    </div>

</section>
  )
}

export default Headimg2;