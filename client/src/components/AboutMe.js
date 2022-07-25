import React from 'react';


export default function AboutMe() {
    return (
        <div className='aboutme text-justify'>
            
            
            <img className="user-logo" src ={`${process.env.PUBLIC_URL}/img/profile.jpeg`} alt="bambang"/>
            <h2 className="text-center" style={{ color: "aquamarine"}}>About Me</h2>
            <p style={{ color: "powderblue"}}>
                I am Bambang Sugiarto Micha Djaja a web developer and a graphic designer. I am an architect graduate from <a href="https://www.its.ac.id/arsitektur/">The Institut Teknologi Sepuluh Nopember (abbreviated as ITS) </a> 
                Surabaya, Indonesia, on the 1st November, 1980. Since December 1984, I became an entrepreneur. This is my history of my entrepreneurship :  
                In year 1984 - 2000, as a Commisioner in Construction Company. In year 1991 - 2000 as a Chairman in Interior and Furniture Company,
                In year 2002 - Present as a Director in Small Business Company.
            </p>
                
            <p  style={{ color: "powderblue"}}>
            In order to display my design online and garner more public interest, I started learning web development at  
            <a href="https://bootcamp.uwa.edu.au/coding/landing/?s=Google-Brand&pkw=%2Buwa%20%2Bcoding%20%2Bbootcamp&pcrid=494735218547&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUNIVERSITY-OF-WESTERN-AUSTRALIA%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CBMM%7CCore%7CBootcamp&utm_term=%2Buwa%20%2Bcoding%20%2Bbootcamp&utm_content=494735218547&s=google&k=%2Buwa%20%2Bcoding%20%2Bbootcamp&gclid=CjwKCAjw3cSSBhBGEiwAVII0Z7i4MwLRSfnZiPRkIRS62Z55kXvEEoQsj8i3LO-iiNGi4mbaHy-0HhoCOJAQAvD_BwE&gclsrc=aw.ds"> Coding Bootcamp The University of Western Australia (UWA)</a> on the 7th February 2022.
                The course will finish in August 2022, I have enjoyed learning a variety of things, especiallly using React.
            </p>
            <p style={{ color: "powderblue"}}>
            In this Portfolio, I displayed Update Portfolio Page 2, Password Manager, Social Network API,
            BCKS Project, Employee Tracker and Tech Blog.
            </p> 
            <br/>        
        </div>
    );
}
      
