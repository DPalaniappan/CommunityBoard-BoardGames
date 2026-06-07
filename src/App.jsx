import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Card image='/images/exploding_kittens.png' title="Exploding Kittens" genre="Card Game" how_to_play_url="https://www.explodingkittens.com/pages/rules-kittens"/>
        <Card image='/images/root.png' title="Root" genre="War Game" how_to_play_url="https://boardgame.bg/root%20rules.pdf"/>
        <Card image='/images/sushigo.png' title="Sushi Go!" genre="Party Game" how_to_play_url="https://happypiranha.com/blogs/board-game-rules/how-to-play-sushi-go-board-games-rules-instructions"/>
        <Card image='/images/sequence.png' title="Sequence" genre="Strategy Game" how_to_play_url="https://images-na.ssl-images-amazon.com/images/I/81c4gCJTojL.pdf"/>
        <Card image='/images/azul.png' title="Azul" genre="Abstract Strategy Game" how_to_play_url="https://www.nextmove-games.com/en/azul/azul-game/"/>
        <Card image='/images/tickettoride.png' title="Ticket to Ride" genre="Strategy Game" how_to_play_url="https://boardgamegeek.com/blog/11244/blogpost/124312/the-rules-of-ticket-to-ride-in-4-easy-steps"/>
        <Card image='/images/onenightwerewolf.png' title=" One Night Ultimate Werewolf" genre="Social Deduction Game" how_to_play_url="https://weizmann.libanswers.com/loader?fid=13105&type=1&key=fe89ef270efc8dbef1e379ddf53ad027"/>
        <Card image='/images/monodeal.png' title="Monopoly Deal" genre="Card Game" how_to_play_url="https://monopolydealrules.com/index.php?page=play"/>
        <Card image='/images/sts.png' title = "SlayTheSpire Board Game" genre="Deck Building Game" how_to_play_url="https://www.jestatharogue.com/game-reviews/how-to-play-slay-the-spire-the-board-game/"/>
        <Card image='/images/catan.png' title="Catan" genre="Euro Game" how_to_play_url="https://www.catan.com/sites/default/files/2021-06/catan_base_rules_2020_200707.pdf"/>
      </div>
    </div>
  )
}

export default App
