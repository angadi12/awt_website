'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Brand1 from '../../public/Brandlogo/Brand1.png';
import Brand2 from '../../public/Brandlogo/Brand2.png';
import Brand3 from '../../public/Brandlogo/Brand3.png';
import Brand4 from '../../public/Brandlogo/Brand4.png';
import Brand5 from '../../public/Brandlogo/Brand5.png';
import Brand6 from '../../public/Brandlogo/Brand6.png';
import Brand7 from '../../public/Brandlogo/Brand7.png';
import Brand8 from '../../public/Brandlogo/Brand8.png';
import Brand9 from '../../public/Brandlogo/Brand9.png';
import Brand10 from '../../public/Brandlogo/Brand10.png';
import Brand11 from '../../public/Brandlogo/Brand11.png';
import Brand12 from '../../public/Brandlogo/Brand12.png';
import Brand13 from '../../public/Brandlogo/Brand13.png';
import Brand14 from '../../public/Brandlogo/Brand14.png';
import Brand15 from '../../public/Brandlogo/Brand15.png';
import Brand16 from '../../public/Brandlogo/Brand16.png';
import Brand17 from '../../public/Brandlogo/Brand17.png';
import Brand18 from '../../public/Brandlogo/Brand18.png';

const Newslider = () => {
  const brandImages = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13,
    Brand14,
    Brand15,
    Brand16,
    Brand17,
    Brand18,
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const totalWidth = slider.scrollWidth;
    const halfWidth = totalWidth / 2;

    const step = () => {
      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      } else {
        slider.scrollLeft += 1;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    
    <div className="slider-container" ref={sliderRef}>
      <div className="slider-content">
        {brandImages.map((image, i) => (
          <div key={i} className="slide">
            <Image
              className="object-contain"
              src={image}
              alt={`brand ${i + 1}`}
              width={176} // Equivalent to 44 * 4
              height={128} // Equivalent to 32 * 4
            />
          </div>
        ))}
        {brandImages.map((image, i) => (
          <div key={i + brandImages.length} className="slide">
            <Image
              className="object-contain"
              src={image}
              alt={`brand ${i + 1}`}
              width={176} // Equivalent to 44 * 4
              height={128} // Equivalent to 32 * 4
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newslider;

