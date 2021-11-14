import React from 'react';

const List = ({people}) => {
  const [dateList, setList]= React.useState(people)

  const removeDate = (id) =>{
    let newList = dateList.filter((person)=> person.id !== id)
    setList(newList)
  }

  return (
    <>
      <h3>{dateList.length} birthdays today</h3>
      {dateList.map((person)=>{
        const {id,name,age,image} = person
        return(
          <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button type='button' onClick={()=>removeDate(id)}>
                remove
              </button>
            </div>
          </article>
        )
      })}
      <button type='button' onClick={()=>{
        setList([])
      }}>
        Clear All 
      </button>
    </>
  );
};

export default List;
