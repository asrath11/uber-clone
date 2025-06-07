import React, { useState, useEffect } from 'react';
import {
  FaRegStar,
  FaRegFileAlt,
  FaRegCheckSquare,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

function Requirements() {
  const [currentPage, setCurrentPage] = useState(0);
  const [columnsPerPage, setColumnsPerPage] = useState(1);

  const cards = [
    {
      id: 1,
      icon: <FaRegStar size={36} className='mb-3 text-yellow-500' />,
      title: 'Requirements',
      items: ['Be at least 18 years old', 'Clear a background screening'],
    },
    {
      id: 2,
      icon: <FaRegFileAlt size={36} className='mb-3 text-blue-500' />,
      title: 'Documents',
      items: [
        "Valid driver's license (private or commercial)",
        'Proof of residency',
        'Car documents: insurance, registration, permit',
      ],
    },
    {
      id: 3,
      icon: <FaRegCheckSquare size={36} className='mb-3 text-green-500' />,
      title: 'Signup Process',
      items: ['Create an account', 'Upload documents', 'Wait for approval'],
    },
  ];

  useEffect(() => {
    const updateColumnsPerPage = () => {
      if (window.innerWidth >= 1280) {
        setColumnsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setColumnsPerPage(2);
      } else {
        setColumnsPerPage(1);
      }
    };

    updateColumnsPerPage();
    window.addEventListener('resize', updateColumnsPerPage);
    return () => window.removeEventListener('resize', updateColumnsPerPage);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [columnsPerPage]);

  const totalPages = Math.ceil(cards.length / columnsPerPage);
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  const handleNext = () => {
    if (canGoNext) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (canGoPrev) setCurrentPage(currentPage - 1);
  };

  const getCurrentPageCards = () => {
    const startIndex = currentPage * columnsPerPage;
    const endIndex = startIndex + columnsPerPage;
    return cards.slice(startIndex, endIndex);
  };

  const shouldShowControls = totalPages > 1 && columnsPerPage < cards.length;

  const getGridClasses = () => {
    if (columnsPerPage === 3) return 'grid-cols-3';
    if (columnsPerPage === 2) return 'grid-cols-2';
    return 'grid-cols-1';
  };

  return (
    <section className='mx-auto px-10 py-10 max-w-7xl space-y-8'>
      <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold'>
        Here's what you need to sign up
      </h1>

      <div className=' relative'>
        <div className={`grid ${getGridClasses()} gap-12 min-h-[300px]`}>
          {getCurrentPageCards().map((card) => (
            <div
              key={card.id}
              className='flex flex-col items-start justify-center text-left p-4 transition duration-300 ease-in-out transform hover:scale-105'
            >
              {card.icon}
              <h2 className='text-2xl font-semibold text-[#333333] mb-2'>
                {card.title}
              </h2>
              <ul className='list-disc text-lg flex flex-col items-start text-gray-700 pl-4'>
                {card.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {shouldShowControls && (
        <div className='flex justify-end gap-4 items-center'>
          <div className='text-sm text-black font-bold'>
            {currentPage + 1}/{totalPages}
          </div>
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label='Previous page'
            className={`flex items-center gap-2 p-4 rounded-3xl font-medium ${
              canGoPrev
                ? 'bg-gray-300 hover:bg-gray-400'
                : 'bg-gray-200 cursor-not-allowed opacity-50'
            }`}
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label='Next page'
            className={`flex items-center gap-2 p-4 rounded-3xl font-medium ${
              canGoNext
                ? 'bg-gray-300 hover:bg-gray-400'
                : 'bg-gray-200 cursor-not-allowed opacity-50'
            }`}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Requirements;
