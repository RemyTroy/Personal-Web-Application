// GalleryPage.js

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryPage = () => {
  const images = [
    {
      original: 'images/Self-Portrait.jpg',
      thumbnail: 'images/Self-Portrait.jpg',
      description: 'Troy Hoffman, Self Portrait',
      originalHeight: '450px',
    },
    {
      original: 'images/Streets-Shinjuku.png',
      thumbnail: 'images/Streets-Shinjuku.png',
      description: 'Beautiful Streets of Shinjuku during a busy afternoon',
      originalHeight: '450px',
    },
    {
      original: 'images/Japan-Karting.png',
      thumbnail: 'images/Japan-Karting.png',
      description: 'Mario Karts in the Streets of Tokyo while being dressed up in costumes',
      originalHeight: '450px',
    },
    {
      original: 'images/Drum-Kit-Coding-Project.jpg',
      thumbnail: 'images/Drum-Kit-Coding-Project.jpg',
      description: 'Drum Kit coding project',
      originalHeight: '450px',
    },
    {
      original: 'images/Akhiabara.jpg',
      thumbnail: 'images/Akhiabara.jpg',
      description: 'Self Portrait of Me in Japan Enjoying the streets of Akihabara Electric Town',
      originalHeight: '450px',
    },
    {
      original: 'images/Japan-Scenery.PNG',
      thumbnail: 'images/Japan-Scenery.PNG',
      description: 'Beautiful Scene in the heart of Tokyo - Japan\'s version of the Eiffel Tower',
      originalHeight: '450px',
    },
    {
      original: 'images/News-Letter-Signup-Project.PNG',
      thumbnail: 'images/News-Letter-Signup-Project.PNG',
      description: 'News Letter Sign Up Project that will send out emails and newsletters to subscribers',
      originalHeight: '450px',
    },
    {
      original: 'images/Simon-Game-Web-App-CreatedbytroyHoffman.png',
      thumbnail: 'images/Simon-Game-Web-App-CreatedbytroyHoffman.png',
      description: 'The Famous Simon Game that everyone grew up playing',
      originalHeight: '450px',
    },
    {
      original: 'images/Lettuce-Wrap-Cooking-Hobby.jpg',
      thumbnail: 'images/Lettuce-Wrap-Cooking-Hobby.jpg',
      description: 'Fun little lettuce wraps that I made. One of my favorite hobbies is to cook and I love trying new things out',
      originalHeight: '450px',
    },
    {
      original: 'images/Japan-Cultural-Breakfast-min.jpg',
      thumbnail: 'images/Japan-Cultural-Breakfast-min.jpg',
      description: 'Cultural Breakfast at a small mom-and-pop type shop in Tokyo',
      originalHeight: '450px',
    },
  ];

  return (
    <>
      <h2>Gallery</h2>
      <article>
        <ImageGallery items={images} />
      </article>
    </>
  );
};

export default GalleryPage;
