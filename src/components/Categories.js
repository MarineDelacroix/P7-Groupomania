import '../styles/Categories.css'

function Categories() {
    return <section className="menu">
        <div className="menuItem">
            <h2>SE CONNECTER</h2>
        <form className="login" method="post">
    <p className="lineForm">
        <label>Votre pseudo:</label>  <br/> <input type="text" name="pseudo" />
    </p>
    <p className="lineForm">
        <label>Votre mot de passe:</label>  <br/> <input type="text" name="password" />
    </p>

</form>
</div>
        <div className="menuItem">        
            <h2>CREER UN COMPTE</h2>
            <form className="subscribe" method="post">
    <p className="lineForm">
        <label>Votre pseudo:</label>  <br/> <input type="text" name="newPseudo" />
    </p>
    <p className="lineForm">
        <label>Votre mot de passe:</label>  <br/> <input type="text" name="newPassword" />
    </p>

</form>
</div>
    </section>
}

export default Categories