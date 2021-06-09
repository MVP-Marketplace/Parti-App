import { FiVideo } from 'react-icons/fi'

function Default() {
  return(
    <div>
      <header>
        <h1>LOGO</h1>
        <div>
          <h3>Inv count</h3>
          <h3>unsent count</h3>
          <button className="btn">Schedule Delivery</button>
          <button className="btn">Invite</button>
          <button className="btn">Preview</button>
        </div>
      </header>
      <main>
        <div className="left">
          <h1>Left side placeholder</h1>
        </div>
        <div className="right">
          <div className="prevBox" />
          <button className="btn">
            <h3>Upload New Video</h3>
            <FiVideo />
          </button>
        </div>
      </main>
    </div>
  )
}

export default Default;