import React, { useEffect, useState } from 'react'

function ShoppingList() {
    const [input, setInput] = useState("")
    const [data, setData] = useState()
    const [addItem, setAddItem] = useState([])
    const [doneItems, setDoneItems] = useState([]);
    const[debouncedInput,setDebouncedInput]=useState("")
  const handleChange = (e) => {
    setInput(e.target.value);  // always update immediately
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);  // update only after delay
    }, 2000);

    // cleanup to clear previous timer if input changes
    return () => clearTimeout(timer);
  }, [input]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.frontendeval.com/fake/food/${debouncedInput}`);
                const result = await res.json();

                setData(result)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (debouncedInput) {
            fetchData();
        }
    }, [debouncedInput]);
    const getItem = (e) => {
        const idx = e.target.getAttribute('data-id')
        setAddItem(prev => [...prev, data[idx]]);
    }

    const handleDone = (i) => {
        setDoneItems((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );
    }
    const handleDelete = (i) => {
        setAddItem((prev) => prev.filter((_, index) => index !== i));
    };
    return (
        <div >

          <div style={{ display: "flex", justifyContent: "space-between",width:"1000px"}}>
              <div >
                <h1>ShoppingList</h1>
                <input placeholder='Enter the product...' style={{ borderRadius: "10px", padding: "10px 20px" }} type="text" onChange={handleChange} />
                <div onClick={getItem} className='shoppingList' style={{ border: "1px solid black", borderRadius: "10px", backgroundColor: "lightsalmon" }}>
                    {data && data.map((item, i) => {
                        return (
                            <div key={i} >
                               <h4 style={{borderTop:"1px solid black",borderBottom:"1px solid black"}}  data-id={i}> {item}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div style={{ marginTop: "20px" }}>
                <h2>Your Bucket</h2>
                {
                    addItem.map((item, i) => {
                        return (
                            <div key={i} style={{ backgroundColor: "orange", borderRadius: "10px", display: "flex", justifyContent: "space-between", padding: "10px 20px", marginTop: "10px",width:"200px" }}>
                                <button onClick={() => { handleDone(i) }}>Done</button>
                                <p style={{
                                    textDecoration: doneItems.includes(i) ? "line-through" : "none"
                                }}> {item}</p>
                                <button onClick={() => handleDelete(i)}>Delete</button>

                            </div>
                        )
                    })
                }
            </div>
          </div>

        </div>
    )
}

export default ShoppingList