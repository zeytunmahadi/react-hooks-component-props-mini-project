 function About ({image="https://via.placeholder.com/215",about}){
    return(
        <div>
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
        </div>
    )

}
export default About;