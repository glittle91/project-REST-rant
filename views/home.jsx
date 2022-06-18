const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div>
      <img src="/images/burger.jpg" alt="Loaded Cheeseburger" />
      <div>
        Photo by <a href="https://unsplash.com/@mashkov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ilya Mashkov</a> on <a href="https://unsplash.com/">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home
