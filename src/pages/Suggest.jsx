import { useEffect, useState } from "react"

function Suggest() {

    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3001/suggestions`)
            .then(resp => resp.json())
            .then(suggestFromServer => setSuggestions(suggestFromServer))
    }, [])

    console.log(suggestions);

    return <section className="menu section">

        <div className="title">
            <h2>Suggestions by Client</h2>
            <div className="underline"></div>
        </div>


        <div className='section-center'>
            {suggestions.map((suggest) => {
                return <article className='menu-item' key={suggest.id}>
                    <img src={suggest.url} alt={suggest.name} className='photo' />
                    <div className='item-info'>
                        <header>
                            <h4>Suggest by: {suggest.name}</h4>
                        </header>
                        <p className='item-text'>{suggest.desc}</p>
                    </div>
                </article>
            })}
        </div>

    </section>
}

export default Suggest