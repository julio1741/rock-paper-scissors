module Api::V1
  class PlayersController < ApplicationController
    before_action :set_player, only: [:show, :edit, :update, :destroy]
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    include PlayersHelper

    # GET /players
    # GET /players.json
    def index
      @players = Player.all
    end

    # GET /players/1
    # GET /players/1.json
    def show
    end

    # GET /players/new
    def new
      @player = Player.new
    end

    # GET /players/1/edit
    def edit
    end

    # POST /players
    # POST /players.json
    def create
      @player = Player.new(player_params)

      respond_to do |format|
        if @player.save
          format.html { redirect_to @player, notice: 'Player was successfully created.' }
          format.json { render :show, status: :created, location: @player }
        else
          format.html { render :new }
          format.json { render json: @player.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /players/1
    # PATCH/PUT /players/1.json
    def update
      respond_to do |format|
        if @player.update(player_params)
          format.html { redirect_to @player, notice: 'Player was successfully updated.' }
          format.json { render :show, status: :ok, location: @player }
        else
          format.html { render :edit }
          format.json { render json: @player.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /players/1
    # DELETE /players/1.json
    def destroy
      @player.destroy
      respond_to do |format|
        format.html { redirect_to players_url, notice: 'Player was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    # GET /moves
    # GET /moves.json
    def moves
      moves = get_posible_moves
      render json: {moves: moves}, status: :ok
    end

    # POST /winner
    # POST /winner.json
    def winner
      player1 = winner_params["player1"]
      player2 = winner_params["player2"]
      move1 = winner_params["move1"]
      move2 = winner_params["move2"]
      winner = choose_winner player1, player2, move1, move2
      if winner == "no_winner"
        render json: {winner: "no_winner"}, status: :ok
      else
        render json: {winner: winner, player: winner == player1 ? 1 : 2}, status: :ok
      end
    end

    # POST /victory
    # POST /victory.json
    def victory
      player = Player.find_by_username(victory_params[:username])
      player.wins = player.wins + 1
      player.save!
      render json: {msg: "Player #{player.username} now has #{player.wins} wins!"}, status: :ok
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_player
        @player = Player.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def player_params
        params.require(:player).permit(:username, :wins)
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def winner_params
        params.permit(:player1, :player2, :move1, :move2)
      end

      def victory_params
        params.permit(:username)
      end
  end
end