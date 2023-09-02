import React from 'react';

const Categories = ({ allCategories, filteritem }) => {
    return (
        <div className='btn-container'>
            {allCategories.map((category, index) => {
                return (
                    <button 
                    className='filter-btn' 
                    key={index} 
                    onClick={()=>filteritem(category)}>
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
