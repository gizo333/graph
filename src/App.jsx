import React, { useEffect, useRef } from 'react';
import './App.scss';
import circleInner from './img/circle.svg';
import circleExt from './img/circleext.svg';

function App() {
  const numberOfImages = 10;
  const numberOfExternalImages = 18;
  const radius = 180;
  const externalRadius = 300; 
  const outerRadius = radius;
  const canvasSize = radius * 2 + 40;
  const canvasRef = useRef(null);


  const professions = [
  
    {
      id: "circle-img-0",
      name: "Продуктовый дизайнер",
      mainSkills: [
        "Figma",
        "Sketch",
        "Illustrator",
        "Photoshop",
        "Principle",
        "Tilda",
      ],
      otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
    },

    {
      id: "circle-img-1",
      name: "Менеджер проекта",
      mainSkills: [
        "Visio", "1C", "Google Analytics", "Яндекс.Метрика", "Python", "SQL", "Tilda",
      ],
      otherSkills: ["Figma", "Sketch", "Shopify"],
    },

    {
      id: "circle-img-2",
      name: "Финансовый менеджер",
      mainSkills: ["1C", "Excel", "Power BI"],
      otherSkills: ["BPMN"],
    },

    {
      id: "circle-img-3",
      name: "Руководитель финансового департамента компании",
      mainSkills: ["Sketch", "Figma"],
      otherSkills: ["Shopify", "HQL"],
    },

    {
      id: "circle-img-4",
      name: "Продуктовый аналитик",
      mainSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "SQL",
        "Power BI",
        "Python",
        "Excel",
      ],
      otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
    },

    {
      id: "circle-img-5",
      name: "Руководитель финансового продукта",
      mainSkills: ["Visio"],
      otherSkills: ["Python"],
    },

    {
      id: "circle-img-6",
      name: "Менеджер по маркетингу",
      mainSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "Google Ads",
        "Ahrefs",
        "Главред",
        "My Target",
      ],
      otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
    },
    {
      id: "circle-img-7",
      name: "Менеджер по цифровой трансформации",
      mainSkills: [
        "Visio",
        "Google Analytics",
        "Яндекс.Метрика",
        "Python",
        "SQL",
        "Tilda",
      ],
      otherSkills: ["Figma", "Sketch", "Shopify"],
    },
    {
      id: "circle-img-8",
      name: "Финансовый аналитик",
      mainSkills: ["Excel", "SQL", "VBA", "1С"],
      otherSkills: ["Power BI", "Python"],
    },
    {
      id: "circle-img-9",
      name: "Предприниматель",
      mainSkills: ["1C", "Excel", "Power BI"],
      otherSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "Python",
        "SQL",
        "Tilda",
      ],
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvasSize, canvasSize);

      ctx.beginPath();
      ctx.arc(radius + 20, radius + 20, outerRadius, 0, Math.PI * 2, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#979797';
      ctx.stroke();
    }
  }, [numberOfImages, canvasSize, outerRadius]);


  
  

  const externalCircleImages = Array.from({ length: numberOfExternalImages }).map((_, index) => {
    const angle = (2 * Math.PI) / numberOfExternalImages * index; 
    const x = externalRadius * Math.cos(angle) + radius + 20;
    const y = externalRadius * Math.sin(angle) + radius + 20; 

    return (
      <img
        key={index}
        className='external-circle'
        src={circleExt}
        alt=""
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          
        }}
      />
    );
  });

  

  

  const images = Array.from({ length: numberOfImages }).map((_, index) => {
    const angle = (2 * Math.PI) / numberOfImages * index;
    const x = radius * Math.cos(angle) + radius + 20;
    const y = radius * Math.sin(angle) + radius + 20;
  
   
    const profession = professions.find(prof => prof.id === `circle-img-${index}`);
  
    return (
      <div className='prof-container' key={index} style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
        <img
          id={`circle-img-${index}`}
          src={circleInner}
          className="inner-circle-img"
        />
        {profession ? <div id={`prof-name-${index}`} className='prof'>{profession.name}</div> : null}
      </div>
    );
  });
  

  return (
    <header className="body-head">
      <div className="container">

       
        <div className='external-circle-container'>
          
          {externalCircleImages}
        <div className="inner-circle-container" style={{ position: 'relative', width: `${canvasSize}px`, height: `${canvasSize}px` }}>
          <canvas ref={canvasRef} width={canvasSize} height={canvasSize} style={{ position: 'absolute', top: -3, left: 0 }}></canvas>
          {images}
        </div>
        </div>
       

      </div>
    </header>
  );
}

export default App;
