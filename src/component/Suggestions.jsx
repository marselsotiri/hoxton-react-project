// @ts-ignore
function Suggestion({ createSuggest }) {
    return <div className="suggest-form">
        <h3>Suggest New Product</h3>
        <form className="form"
        onSubmit={(e)=> {
        e.preventDefault()
        // @ts-ignore
        const suggest = {
            // @ts-ignore
            name: e.target.name.value ,
            // @ts-ignore
            url: e.target.url.value  ,
            // @ts-ignore
            desc: e.target.textarea.value ,
        }
        // @ts-ignore
        e.target.reset()
        createSuggest(suggest)
        }}
        >
            <label>
                Enter Your Name: 
                <input type='text' name='name' required />
            </label>
            <label>
                Enter Photo Url:
                <input type='text' name='url' required minLength={5} />
            </label>
                <textarea name="text" placeholder="Enter your description" 
// @ts-ignore
                name='textarea' id="" cols={30} rows={5}></textarea>
            <button>Submit</button>
        </form>
    </div>
}
export default Suggestion