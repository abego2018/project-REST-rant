const React = require('react')
const Def = require('./default')

function home() {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pizzaimage.jpg" alt="Pizza" />
                    <div>
                    Photo by <a href="https://unsplash.com/@v_uk_europe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vitalii Chernopyskyi</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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
