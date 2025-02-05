import './App.css';
import React from 'react';

import logo from './assets/handyhome.png'
import electrician from './assets/electrician.png'
import cleaner from './assets/cleaner.png'
import plumber from './assets/plumber.png'
import painter from './assets/painter.png'
import carpenter from './assets/carpenter.png'
import gardener from './assets/gardener.png'
import handyman from './assets/handyman.png'
import pestcontrol from './assets/pest.png'
import more from './assets/more.png'

import handy1 from './assets/handyman/1.png'
import handy2 from './assets/handyman/2.png'
import handy3 from './assets/handyman/3.png'
import handy4 from './assets/handyman/4.png'
import handy5 from './assets/handyman/5.png'

function techselected(name, score, price, photo) {
    const bios = [
        'Experienced professional with over 10 years of expertise in residential and commercial projects.',
        'Skilled technician known for reliability and high-quality workmanship.',
        'Dedicated handyman with a passion for solving problems and helping clients.',
        'Certified expert with a strong background in various maintenance and repair tasks.',
        'Friendly and efficient service provider with a focus on customer satisfaction.',
        'Detail-oriented professional with a knack for troubleshooting and fixing issues.',
        'Versatile handyman with experience in a wide range of home improvement projects.',
        'Reliable and trustworthy technician committed to delivering excellent results.',
        'Proficient in handling both small repairs and large-scale renovation projects.',
        'Customer-focused professional with a reputation for timely and efficient service.',
        'Highly skilled handyman with a strong work ethic and attention to detail.',
        'Experienced in providing top-notch services for both residential and commercial clients.',
        'Dedicated to ensuring the highest standards of quality and safety in every job.',
        'Knowledgeable technician with a proven track record of successful projects.',
        'Committed to delivering exceptional service and exceeding client expectations.',
        'Expert in various trades, including electrical, plumbing, and carpentry.',
        'Passionate about helping clients maintain and improve their homes.',
        'Skilled in using the latest tools and techniques for efficient repairs.',
        'Focused on providing cost-effective solutions without compromising on quality.',
        'Friendly and approachable professional with a commitment to excellence.'
    ];

    let bio = bios[Math.floor(Math.random() * 20)];
    let content = '';
    content += `
    <div style="display:flex;flex-direction:column;width:100%;text-align:center;margin:0;padding:20px;border-radius:10px;background-color:#f9f9f9;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
        <img src="${photo}" alt="Technician" style="width:50%;border-radius:10px;margin-left:auto;margin-right:auto"/>
        <h2 style="font-family: 'Arial', sans-serif;margin:10px 0;">${name}</h2>
        <p style="font-family: 'Arial', sans-serif;margin:10px 0;color:#555;">${bio}</p>
        <div style="font-family: 'Arial', sans-serif;margin:10px 0;color:#333;">Rating: ${score} ⭐</div>
        <div style="font-family: 'Arial', sans-serif;margin:10px 0;color:#333;">Price: $${price}/hour</div>

        <!-- Date Selection -->
        <div style="margin:10px 0;">
            <label for="service-date" style="font-family: 'Arial', sans-serif;">Select Date:</label>
            <input type="date" id="service-date" style="padding:8px;border-radius:5px;margin-top:5px;" />
        </div>

        <!-- Time Selection -->
        <div style="margin:10px 0;">
            <label for="service-time" style="font-family: 'Arial', sans-serif;">Select Time:</label>
            <input type="time" id="service-time" style="padding:8px;border-radius:5px;margin-top:5px;" />
        </div>

        <!-- Location Selection -->
        <div style="margin:10px 0;">
            <label for="service-location" style="font-family: 'Arial', sans-serif;">Select Location:</label>
            <input type="text" id="service-location" placeholder="Enter your address" style="padding:8px;border-radius:5px;margin-top:5px;width:80%;" />
        </div>

        <!-- Disclaimer -->
        <div style="margin:20px 0;padding:10px;border-radius:5px;background-color:#f8f8f8;color:#777;font-size:14px;">
            <p><strong>Disclaimer:</strong></p>
            <p>If you need to cancel your appointment, you are eligible for a full refund if canceled 24 hours before the appointment. If canceled within 24 hours of the appointment, a half refund will be provided.</p>
        </div>

        <!-- Book Now Button -->
        <div style="margin:20px 0;">
            <button id="book-now-btn" style="padding:10px 20px;font-size:16px;color:white;background-color:#4CAF50;border:none;border-radius:5px;cursor:pointer;">
                Book Now
            </button>
        </div>

        <!-- Loading Spinner -->
        <div id="loading-spinner" style="display:none;">
            <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 2s linear infinite; margin:auto;"></div>
            <p>Booking in progress...</p>
        </div>

        <!-- Success Message -->
        <div id="success-message" style="display:none;">
            <h3 style="color: green;">Successfully Booked!</h3>
            <p>Your appointment has been confirmed.</p>
        </div>
    </div>

    <style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    `;

    document.querySelector(".servicesdiv").innerHTML = content;

    document.getElementById("book-now-btn").addEventListener("click", function() {
        document.getElementById("book-now-btn").style.display = "none";
        document.getElementById("loading-spinner").style.display = "block";
        
        setTimeout(function() {
            document.getElementById("loading-spinner").style.display = "none";
            document.getElementById("success-message").style.display = "block";
        }, 3000); 
    });
}

function categoryselect(category){
    console.log("Pressed");
    const elements = [handy1, handy2, handy3, handy4, handy5];
    const names = ['Ali Haddad', 'Omar Khalil', 'Karim Nassar', 'Jad Saad', 'Rami Fares', 'Hassan Zain', 'Tarek Karam', 'Fadi Jaber', 'Nabil Mansour', 'Samir Abou', 'Ahmad Chahine', 'Youssef Daher', 'Mahmoud Ghanem', 'Walid Harb', 'Ziad Khoury', 'Layla Haddad', 'Nora Khalil', 'Sara Nassar', 'Maya Saad', 'Rania Fares'];
    let content=`<div style="margin-left:auto;margin-right:auto;">${category}</div>`;
    for (let i = 0; i < 3; i++) {
        let newcontent = '';
        content += `<div style="display:flex;flex-direction:row;width:100%;min-height:calc(100%/3*1.5);">`;
        for (let j = 0; j < 3; j++) {
            let chosen = elements[Math.floor(Math.random() * 5)];
            let score = Math.floor(Math.random() * 3) + 2;
            let name = names[Math.floor(Math.random() * 20)];
            let price=7+Math.floor(Math.random()*25);
            newcontent += `
            <div onClick="techselected('${name}', ${score}, ${price}, '${chosen}')" style="display:flex;flex-direction:column;width:calc(100%/3 - 6%);height:97%;text-align:center;margin:3%;border-radius:10px;background-color:white;">
                <img src=${chosen} alt='Handyman' style="height:80%;border-radius:10px;"/>
                <div id="name" style="font-family: 'Times New Roman', Times, serif;">Name: ${name}</div>
                <div id="rating" style="font-family: 'Times New Roman', Times, serif;">Rating: ${score}</div>
                <div id="pricing" style="font-family: 'Times New Roman', Times, serif;">Pricing: ${price}$/hr</div>
            </div>`;
        }
        content += newcontent;
        content += `</div>`;
    }
    document.querySelector(".servicesdiv").innerHTML=content;
}
window.techselected = techselected;

function App() {

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="container">
        <div className='topdiv'>
            <div className='imgdiv'>
                <img className='logoimg' src={logo} alt='Logo'/>
            </div>
        </div>
        <div className='searchdiv'>
            <form className='form' action="">
                <input className='searchbar' type="text" placeholder="I want to hire a ..."/>
            </form>
        </div>
        <div className='servicesdiv'>
            <div className='divrow'>
                <div className='divelement' onClick={() => categoryselect('Electricians')}>
                    <img className='profimages' src={electrician} alt='Electrician'/>
                    Electrician
                </div>
                <div className='divelement' onClick={() => categoryselect('Cleaners')}>
                    <img className='profimages' src={cleaner} alt='Cleaner'/>
                    Cleaner
                </div>
                <div className='divelement' onClick={() => categoryselect('Plumbers')}>
                    <img className='profimages' src={plumber} alt='Plumber'/>
                    Plumber
                </div>
            </div>
            <div className='divrow'>
                <div className='divelement' onClick={() => categoryselect('Painters')}>
                    <img className='profimages' src={painter} alt='Painter'/>
                    Painter
                </div>
                <div className='divelement' onClick={() => categoryselect('Carpenters')}>
                    <img className='profimages' src={carpenter} alt='Carpenter'/>
                    Carpenter
                </div>
                <div className='divelement' onClick={() => categoryselect('Gardener')}>
                    <img className='profimages' src={gardener} alt='Gardeners'/>
                    Gardener
                </div>
            </div>
            <div className='divrow'>
                <div className='divelement marginbottom0' onClick={() => categoryselect('Handymen')}>
                    <img className='profimages' src={handyman} alt='Handyman'/>
                    Handyman
                </div>
                <div className='divelement marginbottom0' onClick={() => categoryselect('Pest Control')}>
                    <img className='profimages' src={pestcontrol} alt='Pest Specialists'/>
                    Pest control
                </div>
                <div className='divelement marginbottom0' >
                    <img className='profimages' src={more} alt='More'/>
                    More
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
