"use client"
import React from 'react';
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md"; 
import {FaLinkedin } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pl-5">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
        <p>
          We are committed to providing the best services and creating innovative solutions for our clients worldwide.
        </p>
      </div>
    
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="hover:text-yellow-500">About</a></li>
          <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
          <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </div>
   
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Skills</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-yellow-500">HTML & CSS</a></li>
          <li><a href="#" className="hover:text-yellow-500">TypeScript</a></li>
          <li><a href="#" className="hover:text-yellow-500">Next.js</a></li>
          <li><a href="#" className="hover:text-yellow-500">Tailwind CSS</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
        <p>Email: <a href="sadiakham985@gmail.com" className="hover:text-yellow-500">sadiakham985@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="hover:text-yellow-500">+1 234 567 890</a></p>
        <p> Main Street, Karachi , Pakistan</p>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-6 text-center">
     
      <div className="flex justify-center space-x-6 mb-4">
      </div>
      <p>&copy; 2024 Sadia Khan. All rights reserved.</p>
      <div className="  flex justify-center items-center">
            <ul className="flex space-x-4 pt-5">
            <li>
                    <Link 
                        href="https://www.instagram.com/sadiakhan9433/"target="_blank"rel="noopener noreferrer" className="text-white text-center hover:text-[#E1aD01] ">
                        <FaInstagram size="30" />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/sadiarajpoot" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-[#E1aD01]">
                        <FaGithub  size="30" /></Link>
                </li>
                <li>
                    <Link href="mailto:sadiakham985@gmail.com" className="text-white text-center hover:text-[#E1aD01]">
                        <MdEmail size="30" />
                    </Link>
                </li>
                <li>
                    <Link href="https://wa.me/<0311-3199283>" target="_blank" rel="noopener noreferrer" className="text-white text-center hover:text-[#E1aD01]">
                        <FaLinkedin size="30" /> 
                    </Link>
        
                </li>

            </ul>
        </div>
    </div>


  </footer>
  

  )
}