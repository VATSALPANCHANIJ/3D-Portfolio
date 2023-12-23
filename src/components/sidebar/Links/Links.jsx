import React from 'react'

const Links = () => {

  const items = ["HomePage", "Services", "Portfolio", "Content", "About"]
  console.log(items);
  return (
    <>
      <div className='links'>
        {items.map(item => 
          <a href={`#${item}`} key={item}>
            {item}
            </a>
        )}
      </div>
    </>
  );
};
export default Links
