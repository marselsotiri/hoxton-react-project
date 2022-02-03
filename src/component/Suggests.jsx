function Suggests() {
    return <div className="suggest-form">
        <h3>Suggest New Product</h3>
        <form className="form">
            <label>
                Enter Your Name: 
                <input type='text' name='name' required />
            </label>
            <label>
                Enter Photo Url:
                <input type='text' name='url' required minLength={5} />
            </label>
                <textarea name="text" placeholder="Enter your description" id="" cols={30} rows={5}></textarea>
            <button>Submit</button>
        </form>
    </div>
}
export default Suggests