module PlayersHelper
  def get_moves
    JSON.parse(File.read('config/moves.json'))["moves"]
  end

  def choose_winner player1, player2, move1, move2
    wins = ""
    moves = get_moves
    kill1 = moves.select{|m| m["move"] == move1}.first["kills"]
    kill2 = moves.select{|m| m["move"] == move2}.first["kills"]
    if kill1 == move2
      wins = player1
    elsif kill2 == move1
      wins = player2
    else
      wins = "no_winner"
    end
    wins
  end

  def get_posible_moves
    moves = get_moves
    moves.map{|m| m["move"] }
  end
end
